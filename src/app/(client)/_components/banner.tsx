"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// components
import Navbar from "../../../components/navigation/navbar";

// data
import { tech } from "@/config/tech"
import { MY_DATA } from "@/data/my-data";
import { Dock, DockIcon } from "@/components/util/dock";

const Banner = () => {
    const name = MY_DATA.name.split("");
    const primary_languages = tech.languages.filter((lang) => lang.name !== "Go");
    const primary_frameworks = tech.frameworks.filter(f => !["Gin", "Nest"].includes(f.name));;
    const primary_stack = [...primary_languages, ...primary_frameworks];

    return (
        <div className='h-[70vh] w-full flex flex-col justify-between relative'>
            <Navbar />
            <div className='flex flex-col flex-1 gap-10 justify-center items-center w-full'>
                <div className="px-3 py-1 border rounded-full flex items-center gap-2">
                    <div className="size-3 bg-green-500 rounded-full"> </div>
                    <div className="text-sm">{MY_DATA.generalSummary}</div>
                </div>

                <div className="text-center font-bold sm:text-[30px]">
                    {name.map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="cursor-pointer lowercase text-[50px] md:text-[80px]"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                <Dock>
                    {
                        primary_stack.map((item, index) => (
                            <DockIcon key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.25, marginLeft: "1rem", marginRight: "1rem" }}
                                    key={index}
                                    className='flex justify-center cursor-pointer bg-white'
                                >
                                    <Image
                                        src={item?.logo}
                                        alt={item.name}
                                        height={25}
                                        width={25}
                                        className="object-cover"
                                    />
                                </motion.div>
                            </DockIcon>
                        ))
                    }
                </Dock>
            </div>
        </div>
    )
}

export default Banner;