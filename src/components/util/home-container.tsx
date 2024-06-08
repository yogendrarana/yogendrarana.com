import React from 'react'

const HomeContainer = ({ children }: { children: React.ReactElement }) => {
    return (
        <div
            className='
                px-[20px] sm:px-[30px] md:px-[100px] lg:px-[150px] xl:px-[250px]
            '
        >
            {children}
        </div>
    )
}

export default HomeContainer