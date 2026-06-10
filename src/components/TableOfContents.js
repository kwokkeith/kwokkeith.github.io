import React, { useEffect, useState } from "react";

/**
 * TableOfContents
 * 
 * Props:
 *   sections — array of { id: string, label: string }
 *              id must match the `id` attribute on the section element in the page
 * 
 * Usage:
 *   import TableOfContents from "../TableOfContents";
 *   const SECTIONS = [
 *     { id: "highlights", label: "Highlights" },
 *     { id: "all-projects", label: "All Projects" },
 *   ];
 *   <TableOfContents sections={SECTIONS} />
 */
function TableOfContents({ title, sections }) {
    const [activeId, setActiveId] = useState(sections[0]?.id || "");

    useEffect(() => {
        const observers = [];
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
                { rootMargin: "-10% 0px -60% 0px" }
            );
            observer.observe(el);
            observers.push(observer);
        });
        // Return function in react is for cleanup (Component unmount)
        return () => observers.forEach(o => o.disconnect());
    }, [sections]);

    const handleClick = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (!el) return;
        // scrollIntoView puts the element flush with the top of the viewport,
        // but the fixed navbar overlaps it. Thus, manual calculation of navbar height
        const navbarHeight = document.querySelector(".site-navbar")?.offsetHeight || 70;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
        window.scrollTo({ top, behavior: "smooth" });
    };

    return (
        <nav className="pp-toc">
            <p className="pp-toc__label">{title}</p>
            <ul className="pp-toc__list">
                {sections.map(({ id, label }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            onClick={(e) => handleClick(e, id)}
                            className={`pp-toc__link${activeId === id ? " pp-toc__link--active" : ""}`}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default TableOfContents;