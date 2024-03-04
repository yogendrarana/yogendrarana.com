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
        <>
            <div
                className="flex flex-col gap-[rem] cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* question */}
                <div className="flex justify-between items-center">
                    <p className="text-[1.5rem] font-bold">{question}</p>

                    <button className="h-[3rem] w-[3rem] grid place-items-center rounded-full hover:bg-gray-100 transition-all ease-in-out duration-200">
                        {
                            isOpen ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>
                        }
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
                            className="text-[1.5rem] text-gray-500"
                        >{answer}</motion.section>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Accordion;
