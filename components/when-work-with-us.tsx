"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./section";
import {
    Zap,
    X,
    Eye,
    AlertTriangle,
    Clock,
    AlertCircle,
    Pencil,
    Smartphone,
    Search,
    Code,
    Timer,
    CheckCircle,
} from "lucide-react";

export const WhenWorkWithUs = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleData = {
        false: {
            text: "don't",
            color: "text-red-500",
            items: [
                {
                    icon: Zap,
                    title: "Slow Development",
                    description:
                        "Lengthy development cycles that delay your product launch and market entry.",
                },
                {
                    icon: X,
                    title: "Poor User Experience",
                    description:
                        "Unintuitive interfaces that frustrate users and hinder adoption of your MVP.",
                },
                {
                    icon: Eye,
                    title: "Low Visibility",
                    description:
                        "Lack of proper SEO and marketing strategies, making it hard for potential users to find your MVP.",
                },
                {
                    icon: AlertTriangle,
                    title: "Limited Functionality",
                    description:
                        "Basic features that fail to address core user needs or demonstrate your product's value.",
                },
                {
                    icon: Clock,
                    title: "Missed Deadlines",
                    description:
                        "Delays in development and launch, potentially missing crucial market opportunities.",
                },
                {
                    icon: AlertCircle,
                    title: "Inadequate Support",
                    description:
                        "Lack of technical assistance and guidance throughout the MVP development process.",
                },
            ],
        },
        true: {
            text: "do",
            color: "text-blue-500",
            items: [
                {
                    icon: Pencil,
                    title: "Creative Expertise",
                    description:
                        "Innovative designs tailored to your brand, creating a unique and engaging user experience.",
                },
                {
                    icon: Smartphone,
                    title: "Responsive Designs",
                    description:
                        "Ensuring your MVP works flawlessly across all devices, maximizing user engagement.",
                },
                {
                    icon: Search,
                    title: "SEO Optimization",
                    description:
                        "Implementing strategies to boost your MVP's visibility in search engine rankings.",
                },
                {
                    icon: Code,
                    title: "Custom Solutions",
                    description:
                        "Developing bespoke features that address your specific MVP requirements and user needs.",
                },
                {
                    icon: Timer,
                    title: "Quick Turnaround",
                    description:
                        "Rapid development cycle, delivering your MVP in 2-4 weeks without compromising quality.",
                },
                {
                    icon: CheckCircle,
                    title: "Exceptional Support",
                    description:
                        "Dedicated assistance throughout the MVP development process and beyond launch.",
                },
            ],
        },
    };

    return (
        <Section id="when-work-with-us">
            <div className="max-w-4xl mx-auto p-8">
                <div className="mb-4">
                    <h1 className="text-5xl font-bold text-center">
                        When startups
                    </h1>
                </div>

                <div className="flex items-center justify-center mb-12">
                    <h1 className="text-5xl font-bold">
                        <span
                            className={`${
                                toggleData[isToggled ? "true" : "false"].color
                            } inline-flex items-center`}
                        >
                            {toggleData[isToggled ? "true" : "false"].text}{" "}
                            <Switch
                                checked={isToggled}
                                onCheckedChange={setIsToggled}
                                className="mx-4 scale-150"
                            />
                        </span>{" "}
                        work with us.
                    </h1>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={isToggled ? "toggled" : "untoggled"}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {toggleData[isToggled ? "true" : "false"].items.map(
                                (item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg shadow-md"
                                    >
                                        <div className="text-4xl mb-4">
                                            <item.icon className="w-12 h-12 text-blue-500" />
                                        </div>
                                        <h2 className="text-xl font-semibold mb-2">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="mt-12 text-center">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                        Start Your MVP Journey
                    </button>
                </div>
            </div>
        </Section>
    );
};
