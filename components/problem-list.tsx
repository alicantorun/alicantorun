"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Message {
    sender: string;
    content: string;
    time: string;
    icon: string;
    color: string;
}

let messages = [
    {
        sender: "Founder",
        content: "Our frontend crashed during the demo! What's going on?",
        time: "2m ago",
        icon: "😱",
        color: "#FF3D71",
    },
    {
        sender: "Founder",
        content: "The app isn't opening. We're in an important VC meeting!",
        time: "5m ago",
        icon: "💼",
        color: "#FFB800",
    },
    {
        sender: "Founder",
        content: "Client is calling. They can't access the platform. Help!",
        time: "8m ago",
        icon: "📞",
        color: "#1E86FF",
    },
    {
        sender: "Founder",
        content: "You said the app was supposed to be working. What happened?",
        time: "12m ago",
        icon: "🤔",
        color: "#00C9A7",
    },
    {
        sender: "Founder",
        content: "We need to fix this ASAP. Our funding depends on it!",
        time: "15m ago",
        icon: "💰",
        color: "#9747FF",
    },
];

messages = Array.from({ length: 5 }, () => messages).flat();

const Message = ({ sender, content, icon, color, time }: Message) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                        <span className="text-sm sm:text-lg">{sender}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {content}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function AnimatedListDemo({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full flex-col p-0 sm:p-6 overflow-hidden",
                className
            )}
        >
            <AnimatedList>
                {messages.map((item, idx) => (
                    <Message {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
