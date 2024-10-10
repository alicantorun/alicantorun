// "use client";

// import React, { ReactNode } from "react";
// import { motion, useInView } from "framer-motion";

// interface RevealWrapperProps {
//     children: ReactNode;
// }

// export const RevealWrapper: React.FC<RevealWrapperProps> = ({ children }) => {
//     const ref = React.useRef(null);
//     const isInView = useInView(ref, { once: true, amount: 0.1 });

//     return (
//         <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 0 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//         >
//             {children}
//         </motion.div>
//     );
// };

"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
interface RevealWrapperProps {
    children: ReactNode;
}

export const RevealWrapper: React.FC<RevealWrapperProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            {children}
        </div>
    );
};
