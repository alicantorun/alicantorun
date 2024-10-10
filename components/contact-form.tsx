"use client";

import { useState } from "react";
import { Section } from "./section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const ContactForm = () => {
    const [inquiryType, setInquiryType] = useState("");
    const [budget, setBudget] = useState("");
    const [acceptPolicy, setAcceptPolicy] = useState(false);
    const [sendNDA, setSendNDA] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ inquiryType, budget, acceptPolicy, sendNDA });
    };

    return (
        <Section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="lg:mt-14">
                        <h3 className="text-2xl font-bold text-center lg:text-left">
                            Do you want to start a project?
                        </h3>
                        <span className="mt-3 block font-medium leading-6 text-gray-600 text-center lg:text-left">
                            Share the details and we'll figure out the next move
                            together.
                        </span>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <Select
                            onValueChange={(value) => setInquiryType(value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select an inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="General">General</SelectItem>
                                <SelectItem value="New business">
                                    New business
                                </SelectItem>
                                <SelectItem value="Media">Media</SelectItem>
                                <SelectItem value="Talent">Talent</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select onValueChange={(value) => setBudget(value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select an estimated budget" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="5000-10000">
                                    5,000-10,000 [USD]
                                </SelectItem>
                                <SelectItem value="10000-20000">
                                    10,000-20,000 [USD]
                                </SelectItem>
                                <SelectItem value="20000-50000">
                                    20,000-50,000 [USD]
                                </SelectItem>
                                <SelectItem value="50000+">
                                    50,000+ [USD]
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        <Input type="text" placeholder="Full name" />
                        <Input type="email" placeholder="Email" />
                        <Input type="text" placeholder="Country" />
                        <Input type="tel" placeholder="Phone number" />
                        <Textarea
                            placeholder="Tell us about your project"
                            className="h-40"
                        />

                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="acceptPolicy"
                                    checked={acceptPolicy}
                                    onCheckedChange={(checked) =>
                                        setAcceptPolicy(checked as boolean)
                                    }
                                />
                                <Label
                                    htmlFor="acceptPolicy"
                                    className="text-sm"
                                >
                                    I accept{" "}
                                    <a
                                        href="/privacy-policy"
                                        className="text-blue-500 underline"
                                    >
                                        Privacy Policy
                                    </a>
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="sendNDA"
                                    checked={sendNDA}
                                    onCheckedChange={(checked) =>
                                        setSendNDA(checked as boolean)
                                    }
                                />
                                <Label htmlFor="sendNDA" className="text-sm">
                                    Send me an NDA
                                </Label>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!acceptPolicy}
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};
