import React, { useEffect, useState } from "react";
import styles from "./ThemeToggleButton.module.css"; // Import styles if you have defined them
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(isDark ? "light" : "dark");
  };

  const isDark = theme === "dark"; // Definition of isDark

  return (
    <label
      className={`${styles.container} mr-8 z-50 mb-4 lg:mb-0`}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <input type="checkbox" defaultChecked={isDark} onChange={onChange} />
      <div />
    </label>
  );
}
