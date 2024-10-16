"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
    Container,
    H3,
    Lead,
    Section,
    SectionSubtitle,
    SectionTitle,
    Paragraph,
} from "./section";
import { Button } from "./ui/button";

export const Timeline = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                controls.start("visible");
            }, 500);
        }
    }, [controls, inView]);

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

    const lineVariants = {
        hidden: { height: 0 },
        visible: {
            height: "100%",
            transition: { duration: 2.5, ease: "easeInOut" },
        },
    };

    const weekVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.3, duration: 1, ease: "easeOut" },
        }),
    };

    const descriptionVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.3, duration: 1, ease: "easeOut" },
        }),
    };

    const dotVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
        }),
    };

    return (
        <Section id="timeline">
            <Container>
                <SectionTitle>The Bolt ⚡ Studio MVP Journey</SectionTitle>
                <SectionSubtitle>
                    From concept to market-ready product in weeks
                </SectionSubtitle>

                <div ref={ref} className="relative mt-12">
                    <motion.div
                        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform -translate-x-1/2"
                        variants={lineVariants}
                        initial="hidden"
                        animate={controls}
                    />
                    {timelineItems.map((item, index) => (
                        <div
                            key={index}
                            className="mb-20 relative flex items-center"
                        >
                            <motion.div
                                className="w-1/2 pr-8 text-right"
                                variants={weekVariants}
                                custom={index}
                                initial="hidden"
                                animate={controls}
                            >
                                <Paragraph className="font-semibold text-blue-600">
                                    {item.week}
                                </Paragraph>
                            </motion.div>
                            <motion.div
                                className="absolute left-[calc(50%-8px)] top-[calc(50%-8px)] w-4 h-4 bg-white border-2 border-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                                variants={dotVariants}
                                custom={index}
                                initial="hidden"
                                animate={controls}
                            />
                            <motion.div
                                className="w-64 pl-8"
                                variants={descriptionVariants}
                                custom={index}
                                initial="hidden"
                                animate={controls}
                            >
                                <Paragraph className="text-gray-700 whitespace-pre-line">
                                    {item.description}
                                </Paragraph>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: timelineItems.length * 0.2 + 2,
                        duration: 0.5,
                    }}
                >
                    <Lead>
                        Start today and in just 4-6 weeks, you could have
                    </Lead>
                    <H3 className="text-blue-600 mb-4">A Market-Ready MVP</H3>
                    <Button size="lg" className="">
                        Start Your MVP Journey
                    </Button>
                </motion.div>
            </Container>
        </Section>
    );
};
