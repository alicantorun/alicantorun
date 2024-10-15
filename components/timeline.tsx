"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    Container,
    H3,
    Lead,
    Section,
    SectionSubtitle,
    SectionTitle,
} from "./section";
import { Button } from "./ui/button";

export const Timeline = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    const timelineItems = [
        {
            week: "Week 1",
            description: "Project kickoff and requirements gathering",
        },
        {
            week: "Week 2",
            description: "UI/UX design and architecture planning",
        },
        { week: "Week 3", description: "Core feature development" },
        {
            week: "Week 4",
            description: "MVP completion and initial testing",
        },
        { week: "Week 5", description: "User feedback and first iteration" },
        {
            week: "Week 6",
            description: "Final adjustments and market-ready MVP",
        },
        {
            week: "Weeks 7-8",
            description: "Launch support and user acquisition",
        },
        { week: "Ongoing", description: "Continuous improvement and scaling" },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.5,
            },
        }),
    };

    return (
        <Section id="timeline">
            <Container>
                <SectionTitle>The Bolt ⚡ Studio MVP Journey</SectionTitle>
                <SectionSubtitle>
                    From concept to market-ready product in weeks
                </SectionSubtitle>

                <div className="relative mt-12">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-500 transform -translate-x-1/2" />
                    {timelineItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="mb-12 relative flex items-center"
                            variants={itemVariants}
                            initial="hidden"
                            animate={controls}
                            custom={index}
                        >
                            <div className="w-1/2 pr-8 text-right">
                                <p className="font-semibold text-blue-600">
                                    {item.week}
                                </p>
                            </div>
                            <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                            <div className="w-64 pl-8">
                                <p className="text-gray-700 whitespace-pre-line">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Lead>
                        Start today and in just 4-6 weeks, you could have
                    </Lead>
                    <H3 className="text-blue-600 mb-4">A Market-Ready MVP</H3>
                    <Button size="lg" className="">
                        Start Your MVP Journey
                    </Button>
                </div>
            </Container>
        </Section>
    );
};
