"use client";

import { useState } from "react";
import { MY_DATA } from "@/data/my_data";

// components
import Accordion from "@/components/util/Accordion";
import Image from "next/image";

const About = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | false>(false);
    const summaryParts = MY_DATA.generalSummary.split('<br />');

    return (
        <div className="p-[var(--px)] sm:p-[var(--md-px)] flex flex-col border-2 rounded-[2.5rem] overflow-hidden">

            {/* heading */}
            <div className=" border-b">
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
                <h1 className="text-[2rem] font-bold border-b">More abot me!</h1>
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

    )
}

export default About;