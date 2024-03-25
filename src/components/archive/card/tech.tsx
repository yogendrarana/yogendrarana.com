import React from 'react'
import Marquee from 'react-fast-marquee'

// data
import { tech } from '@/config/tech';
import Image from 'next/image';

const Tech = () => {
    const primary_languages = tech.languages.filter((lang) => lang.name !== "Go");
    const primary_frameworks = tech.frameworks.filter(f => !["Gin", "Nest"].includes(f.name));;
    const primary_stack = [...primary_languages, ...primary_frameworks];

    return (
        <div>
            <Marquee speed={100}>
                <div className="p-[1rem] flex gap-[.5rem]">
                    {
                        primary_stack.map((item, index) => (
                            <div key={index} className='group p-[.35rem] flex justify-center items-center cursor-pointer overflow-hidden'>
                                <Image
                                    src={item?.logo}
                                    alt={item.name}
                                    height={100}
                                    width={100}
                                    className="object-cover"
                                />
                            </div>
                        ))
                    }
                </div>
            </Marquee>
        </div>
    )
}

export default Tech