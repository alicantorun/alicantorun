"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionTitle, SectionSubtitle, Container } from "./section";
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
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

export const WhenWorkWithUs = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleData = {
        false: {
            text: "don't",
            color: "text-red-500",
            bgColor: "bg-red-100",
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
            bgColor: "bg-blue-100",
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
            <Container>
                <SectionTitle className="text-left sm:text-center">
                    When startups
                    <br />
                    <span
                        className={`text-left ${
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
                </SectionTitle>
                {/* <SectionSubtitle>
                    See the difference when you choose to work with our expert
                    team
                </SectionSubtitle> */}

                <AnimatePresence mode="wait">
                    <motion.div
                        key={isToggled ? "toggled" : "untoggled"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isToggled ? 100 : -100 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="grid md:grid-cols-3 gap-8">
                            {toggleData[isToggled ? "true" : "false"].items.map(
                                (item, index) => (
                                    <Card
                                        key={index}
                                        className="overflow-hidden"
                                    >
                                        <CardHeader>
                                            <div className="flex items-center">
                                                <div
                                                    className={`${
                                                        toggleData[
                                                            isToggled
                                                                ? "true"
                                                                : "false"
                                                        ].bgColor
                                                    } w-12 h-12 rounded-full flex items-center justify-center mr-4`}
                                                >
                                                    <item.icon
                                                        className={`w-6 h-6 ${
                                                            toggleData[
                                                                isToggled
                                                                    ? "true"
                                                                    : "false"
                                                            ].color
                                                        }`}
                                                    />
                                                </div>
                                                <h3 className="text-xl font-semibold">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                )
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="mt-12 text-center">
                    <Button size="lg">Start Your MVP Journey</Button>
                </div>
            </Container>
        </Section>
    );
};
