"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// prop type
interface AccordionProps {
    i: number;
    question: string;
    answer: string;
    activeAccordion: number | false;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer, activeAccordion, i }) => {
    const [isOpen, setIsOpen] = useState(activeAccordion === i);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col cursor-pointer"
        >
            {/* question */}
            <div className="group flex justify-between items-center">
                <p className="group-hover:underline">{question}</p>

                <button className="size-8 text-sm place-items-center rounded-full hover:border hover:border-gray-300 transition-all ease-in-out duration-300">
                    {isOpen ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                </button>
            </div>

            {/* answer */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="text-sm text-gray-500"
                    >{answer}</motion.section>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
