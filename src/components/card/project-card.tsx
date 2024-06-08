import React from 'react'
import { TProject } from '@/types'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'

interface ProjectCardProps {
    project: TProject
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="p-4 relative flex flex-col rounded-md border shadow-sm overflow-hidden dark:border-neutral-800" >
            <div className="flex flex-col gap-2 justify-between">
                <div className="w-full justify-between items-center flex space-x-[10px]">
                    <div className='flex items-center gap-2'>
                        {
                            project.image
                                ? <Image src={project.image} alt={project.title} className="h-8 w-8 rounded-md border p-1" />
                                : <div className="h-8 w-8 bg-neutral-200 rounded-md"></div>
                        }
                        <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener"
                            className="group flex items-center gap-[6px] font-medium decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline"
                        >
                            <span>{project.title}</span>
                            <ArrowRight
                                size={13}
                                strokeWidth={2}
                                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-[2px] -rotate-45 duration-200"
                            />
                        </Link>
                    </div>

                    <Link target='_blank' href={project.githubLink || "/"} className='text-gray-700 hover:text-black'>
                        <i className='fa-brands fa-github text-xl'></i>
                    </Link>
                </div>
                <p className="truncate text-sm dark:text-neutral-400">{project.description}</p>
                
                <div className="items-center space-x-2 overflow-x-auto md:flex">
                    <div className="flex gap-2 flex-wrap">
                        {
                            project.techStack.map((tag, index) => (
                                <Badge key={index} className='bg-gray-100 text-gray-700 rounded-md hover:text-white cursor-pointer '>
                                    {tag}
                                </Badge>
                            ))
                        }
                    </div>
                </div >
            </div >
        </div>
    )
}

export default ProjectCard;