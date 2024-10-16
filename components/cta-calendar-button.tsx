"use client";

import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface CTACalendarButtonProps {
    size?: "default" | "sm" | "lg" | "xl";
    className?: string;
    children: ReactNode;
}

export const CTACalendarButton: React.FC<CTACalendarButtonProps> = ({
    size = "xl",
    className = "",
    children,
}) => {
    const handleClick = () => {
        window.open("https://calendar.app.google/QJv8aMhQvFVF5fmV9", "_blank");
    };

    return (
        <Button
            size={size}
            className={`space-x-2 ${className}`}
            onClick={handleClick}
        >
            {children}
        </Button>
    );
};
