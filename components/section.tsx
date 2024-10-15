import React from "react";
import { RevealWrapper } from "./reveal-wrapper";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

import { cn } from "@/lib/utils";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
    id,
    className,
    children,
}) => (
    <RevealWrapper>
        <section id={id} className={cn("py-8 sm:py-16 md:py-24", className)}>
            {children}
        </section>
    </RevealWrapper>
);

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    children,
    className,
}) => (
    <h2
        className={cn(
            "text-4xl md:text-5xl font-bold text-center mb-4",
            className
        )}
    >
        {children}
    </h2>
);

interface SectionSubtitleProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionSubtitle: React.FC<SectionSubtitleProps> = ({
    children,
    className,
}) => (
    <p
        className={cn(
            "text-2xl text-center text-gray-600 mt-4 mb-4 max-w-3xl mx-auto",
            className
        )}
    >
        {children}
    </p>
);

interface CommonProps {
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown;
}

export const H1: React.FC<CommonProps> = ({
    children,
    className,
    ...props
}) => (
    <h1
        className={cn(
            "text-5xl md:text-7xl font-bold leading-tight mb-6",
            className
        )}
        {...props}
    >
        {children}
    </h1>
);

export const H2: React.FC<CommonProps> = ({
    children,
    className,
    ...props
}) => (
    <h2
        className={cn(
            "text-4xl md:text-5xl font-semibold leading-tight mb-4",
            className
        )}
        {...props}
    >
        {children}
    </h2>
);

export const H3: React.FC<CommonProps> = ({
    children,
    className,
    ...props
}) => (
    <h3
        className={cn(
            "text-3xl md:text-4xl font-semibold leading-snug mb-3",
            className
        )}
        {...props}
    >
        {children}
    </h3>
);

export const Paragraph: React.FC<CommonProps> = ({
    children,
    className,
    ...props
}) => (
    <p className={cn("text-lg leading-relaxed mb-6", className)} {...props}>
        {children}
    </p>
);

export const Lead: React.FC<CommonProps> = ({
    children,
    className,
    ...props
}) => (
    <p
        className={cn("text-xl md:text-2xl text-gray-600 mb-4", className)}
        {...props}
    >
        {children}
    </p>
);

export const Container: React.FC<CommonProps> = ({
    children,
    className,
    ...props
}) => (
    <div
        className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
        {...props}
    >
        {children}
    </div>
);

interface GridProps extends CommonProps {
    cols?: 1 | 2 | 3 | 4;
}

export const Grid: React.FC<GridProps> = ({
    children,
    className,
    cols = 1,
    ...props
}) => (
    <div
        className={cn(
            "grid gap-8 md:gap-12",
            {
                "md:grid-cols-2": cols === 2,
                "md:grid-cols-3": cols === 3,
                "md:grid-cols-4": cols === 4,
            },
            className
        )}
        {...props}
    >
        {children}
    </div>
);

type IconName = keyof typeof LucideIcons;

interface IconProps extends Omit<LucideProps, "ref"> {
    name: string;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
    const LucideIcon = LucideIcons[
        name as IconName
    ] as React.ComponentType<LucideProps>;
    return <LucideIcon className={cn("w-8 h-8", className)} {...props} />;
};

export const List: React.FC<CommonProps> = ({
    children,
    className,
    ...props
}) => (
    <ul className={cn("space-y-4", className)} {...props}>
        {children}
    </ul>
);

export const ListItem: React.FC<CommonProps> = ({
    children,
    className,
    ...props
}) => (
    <li className={cn("flex items-start text-lg", className)} {...props}>
        {children}
    </li>
);
