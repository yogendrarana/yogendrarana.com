"use client";

import { MY_DATA } from '@/data/my_data';

const EmailButton = () => {
    const handleClickOnMail = () => {
        window.open(`mailto:${MY_DATA.contact.email}`);
    }

    return (
        <button
            onClick={handleClickOnMail}
            className="
                    font-bold
                    mt-[1rem]
                    inline-block
                    relative
                    text-[1.5rem]
                    before:content-['']
                    before:py-[1rem]
                    before:absolute before:bottom-[-0.5rem] before:left-0
                    before:w-0
                    before:hover:w-full
                    before:border-b-2
                    before:border-black


                    before:transition-all
                    before:ease-in-out
                    before:duration-500
                "
        >{MY_DATA.contact.email}</button>
    )
}

export default EmailButton;