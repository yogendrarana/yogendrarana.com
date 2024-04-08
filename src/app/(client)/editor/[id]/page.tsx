"use client";

import React from 'react'

import "@blocknote/react/style.css";
import "@blocknote/core/fonts/inter.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import Navbar from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Scroll } from 'lucide-react';

const Editor = () => {
    const editor = useCreateBlockNote();
    return (
        <div className='h-screen'>
            <Navbar />
            <div className="h-[calc(100vh-var(--nav-height))] px-[var(--px)] py-20 sm:px-[var(--md-px)]">
                <div className='h-full border rounded-xl overflow-y-auto flex flex-col'>
                    <div className='p-[2rem] font-bold text-center flex justify-between items-center border-b'>
                        <h1 className='text-[1.5rem]'>Blocknode Editor</h1>
                        <Button variant="default" className='p-[1.75rem] text-[1.5rem] rounded-xl'>Save</Button>
                    </div>
                    <ScrollArea className='flex-1 py-4'>
                        <BlockNoteView editor={editor} className='h-full' />
                        <ScrollBar />
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default Editor