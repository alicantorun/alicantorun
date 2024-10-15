"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

export default function NumberTicker({
    value,
    direction = "up",
    delay = 0,
    className,
    decimalPlaces = 0,
    startValue = 10, // New prop for starting value
}: {
    value: number;
    direction?: "up" | "down";
    className?: string;
    delay?: number; // delay in s
    decimalPlaces?: number;
    startValue?: number; // New prop type
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? startValue : 0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                motionValue.set(direction === "down" ? value : startValue);
            }, delay * 1000);
        }
    }, [motionValue, isInView, delay, value, direction, startValue]);

    useEffect(
        () =>
            springValue.on("change", (latest) => {
                if (ref.current) {
                    ref.current.textContent = Intl.NumberFormat("en-US", {
                        minimumFractionDigits: decimalPlaces,
                        maximumFractionDigits: decimalPlaces,
                    }).format(Number(latest.toFixed(decimalPlaces)));
                }
            }),
        [springValue, decimalPlaces]
    );

    return (
        <span
            className={cn(
                "inline-block tabular-nums text-black dark:text-white tracking-wider",
                className
            )}
            ref={ref}
        />
    );
}
