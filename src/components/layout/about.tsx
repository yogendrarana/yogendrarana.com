"use client";

import Image from "next/image";
import { useState } from "react";

// data
import { MY_DATA } from "@/data/my-data";

// components
import Accordion from "@/components/util/accordion";

const About = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | false>(false);

    return (
        <div className="p-2 border rounded-lg shadow-sm flex flex-col justify-center overflow-hidden">
            <div className="p-20 bg-gray-100 rounded-lg flex flex-col gap-8">
                {/* heading */}
                <div className="border-b border-gray-300">
                    <div className="text-[40px] font-bold uppercase">
                        <p className="">About Me!</p>
                    </div>
                </div>

                {/* About detail */}
                <div className="flex gap-[20px] cursor-pointers sm:flex-col-reverse">
                    <div className="text-justify">
                        <p>{MY_DATA.professionalSummary}</p>
                    </div>
                    <Image
                        src={MY_DATA.avatarUrl}
                        alt="profile_pic"
                        height={100}
                        width={100}
                        unoptimized={true}
                        className=" object-cover rounded-[1rem] sm:w-[10rem] sm:h-[10rem]"
                    />
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