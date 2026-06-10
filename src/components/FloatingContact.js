import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { HiPlus, HiX } from "react-icons/hi";

const LINKS = [
    { icon: <FaEnvelope />, label: "Email", href: "mailto:kwokkeith@example.com" },
    { icon: <SiGooglescholar />, label: "Google Scholar", href: "https://scholar.google.com", target: "_blank" },
    { icon: <AiFillGithub />, label: "GitHub", href: "https://github.com/kwokkeith", target: "_blank" },
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://www.linkedin.com/in/kwokkeith/", target: "_blank" },
];

function FloatingContact() {
    const [open, setOpen] = useState(false);
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {
        const footer = document.getElementById("site-footer");
        if (!footer) return;
        const observer = new IntersectionObserver(
            ([entry]) => setFooterVisible(entry.isIntersecting),
            { threshold: 0.15 } // when footer covers xx% of the screen then make the contact bubble dissapear
        );
        observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    // Keep mounted always — CSS handles the fade via opacity + pointer-events
    return (
        <div className={`fc-root${footerVisible ? " fc-root--hidden" : ""}`}>

            {/* Desktop: horizontal pill */}
            <div className="fc-pill">
                {LINKS.map((link, i) => (
                    <a
                        key={i}
                        href={link.href}
                        target={link.target || "_self"}
                        rel="noreferrer"
                        aria-label={link.label}
                        className="fc-pill__item"
                    >
                        {link.icon}
                        <span className="fc-pill__tooltip">{link.label}</span>
                    </a>
                ))}
            </div>

            {/* Mobile: toggle + fan */}
            <div className="fc-mobile">
                {LINKS.map((link, i) => (
                    <a
                        key={i}
                        href={link.href}
                        target={link.target || "_self"}
                        rel="noreferrer"
                        aria-label={link.label}
                        className={`fc-bubble fc-bubble--item${open ? " fc-bubble--visible" : ""}`}
                        style={{ "--i": i }}
                        onClick={() => setOpen(false)}
                    >
                        {link.icon}
                    </a>
                ))}
                <button
                    className={`fc-bubble fc-bubble--main${open ? " fc-bubble--main-open" : ""}`}
                    onClick={() => setOpen(o => !o)}
                    aria-label={open ? "Close contact menu" : "Open contact menu"}
                >
                    {open ? <HiX /> : <HiPlus />}
                </button>
            </div>

        </div>
    );
}

export default FloatingContact;