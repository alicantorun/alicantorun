"use client";

import React, { useState, useEffect } from "react";
import {
    Plus,
    Minus,
    Zap,
    Rocket,
    ShieldCheck,
    Users,
    Key,
    Fingerprint,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Section } from "./section";

interface Feature {
    name: string;
    price: number;
    icon: React.ReactNode;
    description: string;
}

export const CostCalculator: React.FC = () => {
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [savings, setSavings] = useState(0);

    const features: Feature[] = [
        {
            name: "Authentication",
            price: 2000,
            icon: <Key className="w-6 h-6" />,
            description: "Secure user authentication system",
        },
        {
            name: "SSO",
            price: 3000,
            icon: <Fingerprint className="w-6 h-6" />,
            description: "Single Sign-On for seamless access",
        },
        {
            name: "User Management",
            price: 2500,
            icon: <Users className="w-6 h-6" />,
            description: "Comprehensive user management tools",
        },
        {
            name: "Role-based Access",
            price: 3500,
            icon: <ShieldCheck className="w-6 h-6" />,
            description: "Granular control over user permissions",
        },
        {
            name: "Multi-factor Auth",
            price: 2000,
            icon: <Zap className="w-6 h-6" />,
            description: "Enhanced security with MFA",
        },
        {
            name: "API Integration",
            price: 4000,
            icon: <Rocket className="w-6 h-6" />,
            description: "Seamless third-party integrations",
        },
    ];

    const toggleFeature = (feature: string) => {
        setSelectedFeatures((prev) =>
            prev.includes(feature)
                ? prev.filter((f) => f !== feature)
                : [...prev, feature]
        );
    };

    const traditionalCost = selectedFeatures.reduce((total, feature) => {
        const featurePrice =
            features.find((f) => f.name === feature)?.price || 0;
        return total + featurePrice;
    }, 4999);

    const launchableCost = 4999; // Fixed price

    useEffect(() => {
        setSavings(traditionalCost - launchableCost);
    }, [traditionalCost]);

    return (
        <Section id="cost-calculator">
            <Card className="space-y-8 p-8">
                <h2 className="text-4xl font-bold text-center text-black">
                    Interactive Cost Calculator
                </h2>
                <p className="text-xl text-center text-gray-700">
                    Discover how much you can save with our innovative
                    fixed-price model!
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-black">
                            Choose Your Features:
                        </h3>
                        {features.map((feature) => (
                            <motion.button
                                key={feature.name}
                                onClick={() => toggleFeature(feature.name)}
                                className={`flex items-center justify-between w-full p-4 rounded-lg transition-colors ${
                                    selectedFeatures.includes(feature.name)
                                        ? "bg-black text-white"
                                        : "bg-white text-black hover:bg-gray-100"
                                }`}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center space-x-3">
                                    {feature.icon}
                                    <span className="font-medium">
                                        {feature.name}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm">
                                        ${feature.price}
                                    </span>
                                    {selectedFeatures.includes(feature.name) ? (
                                        <Minus className="h-5 w-5" />
                                    ) : (
                                        <Plus className="h-5 w-5" />
                                    )}
                                </div>
                            </motion.button>
                        ))}
                    </div>
                    <div className="space-y-6">
                        <motion.div
                            className="p-6 bg-white rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-black">
                                Your Potential Savings:
                            </h3>
                            <div className="space-y-4">
                                <p className="flex justify-between items-center">
                                    <span className="text-gray-600">
                                        Traditional Approach:
                                    </span>
                                    <span className="text-xl font-bold text-black">
                                        ${traditionalCost}
                                    </span>
                                </p>
                                <p className="flex justify-between items-center">
                                    <span className="text-gray-600">
                                        Launchable Studio:
                                    </span>
                                    <span className="text-xl font-bold text-black">
                                        ${launchableCost}
                                    </span>
                                </p>
                                <motion.div
                                    className="border-t pt-4 mt-4"
                                    // animate={{ scale: [1, 1.05, 1] }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                >
                                    <p className="flex justify-between items-center text-2xl font-bold text-black">
                                        <span>Total Savings:</span>
                                        <span>${savings}</span>
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                        <div className="bg-black text-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center">
                                <Rocket className="mr-2" /> Why Choose
                                Launchable Studio?
                            </h4>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    All features included for one fixed price
                                </li>
                                <li>No hidden costs or surprise fees</li>
                                <li>Faster development and deployment</li>
                                <li>
                                    Experienced team dedicated to your success
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-2xl font-bold text-black mb-4">
                        Ready to save ${savings} on your next project?
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
                        Get Started Now
                    </button>
                </motion.div>
            </Card>
        </Section>
    );
};
