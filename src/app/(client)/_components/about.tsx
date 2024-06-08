"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

// data
import { MY_DATA } from "@/data/my-data";

// components
import Accordion from "@/components/util/accordion";
import Experience from "./experience";

const About = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | false>(false);

    return (
        <div className="p-2 border rounded-lg shadow-sm flex flex-col justify-center overflow-hidden">
            <div className="p-6 sm:p-10 md:p-20 bg-gray-100 rounded-lg flex flex-col gap-8">
                {/* heading */}
                <div className="border-b border-gray-300">
                    <div className="text-[40px] font-bold uppercase">
                        <p className="">About Me!</p>
                    </div>
                </div>

                {/* About detail */}
                <div className="flex cursor-pointers sm:flex-col-reverse">
                    <p>{MY_DATA.professionalSummary}</p>
                </div>

                {/* faq */}
                <div className="flex flex-col gap-4">
                    <h1 className="pb-2 text-xl font-bold border-b border-gray-300">More About Me!</h1>
                    <div className="flex flex-col gap-4">
                        {
                            MY_DATA.faq.map((faq, index) => {
                                return (
                                    <div key={index} onClick={() => setActiveAccordion(index)}>
                                        <Accordion question={faq.question} answer={faq.answer} activeAccordion={activeAccordion} i={index} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;