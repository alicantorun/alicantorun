"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
    Container,
    H3,
    Lead,
    Section,
    SectionSubtitle,
    SectionTitle,
    Paragraph,
} from "./section";
import { CTACalendarButton } from "./cta-calendar-button";

export const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 15,
        restDelta: 0.0001,
        mass: 0.05,
    });

    const timelineItems = [
        {
            week: "Week 1",
            description:
                "Project kickoff, requirements gathering, and rapid prototyping",
        },
        {
            week: "Week 2",
            description:
                "UI/UX design, architecture planning, and initial setup",
        },
        {
            week: "Week 3",
            description:
                "Core feature development and integration of key technologies",
        },
        {
            week: "Week 4",
            description: "MVP completion, initial testing, and bug fixes",
        },
        {
            week: "Week 5",
            description:
                "User feedback collection, analysis, and first iteration",
        },
        {
            week: "Week 6",
            description:
                "Final adjustments, performance optimization, and market-ready MVP",
        },
        {
            week: "Weeks 7-8",
            description:
                "Launch support, user onboarding, and initial marketing push",
        },
        {
            week: "Ongoing",
            description:
                "Continuous improvement, feature expansion, and scaling based on user data",
        },
    ];

    const getFutureDate = (weeksFromNow: number) => {
        const today = new Date();
        const futureDate = new Date(
            today.getTime() + weeksFromNow * 7 * 24 * 60 * 60 * 1000
        );
        return futureDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
        });
    };

    const lineHeight = useTransform(smoothProgress, [0, 0.9], ["0%", "100%"]);

    return (
        <Section id="timeline">
            <Container>
                <SectionTitle>The Bolt ⚡ Studio MVP Journey</SectionTitle>
                <SectionSubtitle>
                    From concept to market-ready product in weeks
                </SectionSubtitle>

                <div ref={containerRef} className="relative mt-12">
                    <motion.div
                        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform -translate-x-1/2"
                        style={{ height: lineHeight }}
                    />
                    {timelineItems.map((item, index) => {
                        const itemProgress = useTransform(
                            smoothProgress,
                            [
                                index / (timelineItems.length + 1),
                                (index + 1) / (timelineItems.length + 1),
                            ],
                            [0, 1]
                        );
                        const opacity = useTransform(
                            itemProgress,
                            [0, 0.2, 0.6, 1],
                            [0, 1, 1, 1]
                        );
                        const x = useTransform(
                            itemProgress,
                            [0, 0.2, 0.6, 1],
                            [-30, 0, 0, 0]
                        );

                        return (
                            <motion.div
                                key={index}
                                className="mb-20 relative flex items-center"
                                style={{ opacity }}
                            >
                                <motion.div
                                    className="w-1/2 pr-8 text-right"
                                    style={{ x }}
                                >
                                    <Paragraph className="font-semibold text-blue-600">
                                        {item.week}
                                    </Paragraph>
                                </motion.div>
                                <motion.div
                                    className="absolute left-[calc(50%-8px)] top-[calc(50%-8px)] w-4 h-4 bg-white border-2 border-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                                    style={{ scale: itemProgress }}
                                />
                                <motion.div
                                    className="w-36 sm:w-64 pl-8"
                                    style={{
                                        x: useTransform(x, (value) => -value),
                                    }}
                                >
                                    <Paragraph className="text-gray-700 whitespace-pre-line">
                                        {item.description}
                                    </Paragraph>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <Lead>
                        Start today and by{" "}
                        <span className="text-blue-600 font-semibold">
                            {getFutureDate(8)}
                        </span>
                        , you could have
                    </Lead>
                    <H3 className="text-blue-600 mb-4">A Market-Ready MVP</H3>
                    <CTACalendarButton size="lg" className="">
                        Start Your MVP Journey
                    </CTACalendarButton>
                </motion.div>
            </Container>
        </Section>
    );
};
