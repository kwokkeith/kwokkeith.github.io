import React, { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

function ThemeBubble({ darkMode, toggleDarkMode }) {
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {
        const footer = document.getElementById("site-footer");
        if (!footer) return;
        const observer = new IntersectionObserver(
            ([entry]) => setFooterVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    return (
        <button
            className={`theme-bubble${footerVisible ? " theme-bubble--raised" : ""}`}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
        >
            {darkMode ? <HiSun /> : <HiMoon />}
        </button>
    );
}

export default ThemeBubble;