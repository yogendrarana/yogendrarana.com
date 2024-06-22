import React from 'react'

const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="
                
                h-full w-full 
                bg-white 
                bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
                bg-[size:40px_40px] 
            "
        >{children}</div>
    )
}

export default BackgroundProvider;