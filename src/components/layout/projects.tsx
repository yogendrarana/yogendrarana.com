"use client";

import { MY_DATA } from '@/data/my-data'
import React from 'react'

const Projects = () => {
    const projects = MY_DATA.projects;

    return (
        <div className='min-h-screen my-[5rem] px-[var(--px)] sm:px-[var(--md-px)] text-center'>
            <div className=''>
                <h2 className='mb-[1rem] text-[5rem] font-bold'>My Projects</h2>
                <p className='text-[2rem] text-gray-500'>My projects usually includes websites and web applications</p>
            </div>

            <div>
                asdf
            </div>
        </div>
    )
}

export default Projects;