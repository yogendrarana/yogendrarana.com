'use client'

import Link from 'next/link';
import { TProject } from '@/types';
import { useTransform, motion } from 'framer-motion';

// interfce
interface CardProps {
    project: TProject,
    i: number,
    range: [number, number],
    targetScale: number,
    progress: any
}

const Card: React.FC<CardProps> = ({ project, i, range, targetScale, progress }) => {
    const bgColors = ["#ECD4D6", "#E2DF9F", "#21DC99", "#FD866D"];
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <motion.div className="min-h-screen flex justify-center items-center sticky top-0">
            <div
                style={{ scale: scale.get(), backgroundColor: bgColors[i % bgColors.length], top: `calc(-5vh + ${i * 25}px)` }}
                className="
                    relative
                    h-[500px] w-[1000px]
                    origin-top  
                    transition-all
                    rounded-[2rem]
                    shadow-lg
                    overflow-hidden
                "
            >
                <div className='h-full w-full p-[5rem] flex flex-col gap-[2rem]'>
                    <h2 className='text-[3rem]'>{project.title}</h2>

                    <div className='flex gap-[1rem] flex-wrap'>
                        {
                            project.techStack.map((tech, i) => (
                                <span key={i} className="py-2 px-6 text-[1.25rem] border border-gray-800 rounded-[0.5rem]">{tech}</span>
                            ))
                        }
                    </div>

                    <p className='text-[2rem] text-justify'>{project.description}</p>

                    <div className='group text-[1.5rem] flex items-center gap-[1rem] cursor-pointer'>
                        <Link
                            href={project.link.href}
                            target='_blank'
                            className='text-[1.5rem] cursor-pointer duration-300 group-hover:mr-[1rem]'
                        >Visit the project</Link>

                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default Card