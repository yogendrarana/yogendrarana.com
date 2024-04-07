"use client";

import { useState } from "react";
import { MY_DATA } from "@/data/my-data";

// components
import Accordion from "@/components/util/accordion";
import Image from "next/image";

const About = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | false>(false);
    const summaryParts = MY_DATA.professionalSummary.split('<br />');

    return (
        <div className="p-3 border rounded-2xl shadow-sm flex flex-col justify-center overflow-hidden">
            <div className="p-20 bg-gray-100 rounded-2xl">
                {/* heading */}
                <div className="border-b border-gray-300">
                    <div className="text-[5rem] font-bold uppercase">
                        <p className="">About Me</p>
                    </div>
                </div>

                {/* About detail */}
                <div className="py-[4rem] flex gap-[2.5rem] cursor-pointers sm:flex-col-reverse">
                    <div className="mt-[1rem] text-[1.5rem] text-justify">
                        {
                            summaryParts.map((part, index) => {
                                return (
                                    <p key={index} className="last:mt-[2rem]">{part}</p>
                                )
                            })
                        }
                    </div>
                    <Image
                        src={MY_DATA.avatarUrl}
                        alt="profile_pic"
                        height={15}
                        width={15}
                        unoptimized={true}
                        className="h-[15rem] w-[15rem] object-cover rounded-[1rem] sm:w-[10rem] sm:h-[10rem]"
                    />
                </div>

                {/* faq */}
                <div className="flex flex-col gap-[2rem]">
                    <h1 className="text-[2rem] font-bold border-b">More About Me!</h1>
                    <div className="flex flex-col gap-[2rem]">
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