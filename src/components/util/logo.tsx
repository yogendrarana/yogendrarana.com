"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <div onClick={() => router.push('/')} className='group inline-flex gap-[10px] cursor-pointer '>
            <p className="text-[1.75rem] group-hover:rotate-[360deg] transition-all ease-custom-transition duration-500">©</p>

            <div
                style={{ fontSize: 'var(--normal-font-size)' }}
                className="
                        w-[140px] group-hover:w-[225px]
                        flex items-center gap-[5px] relative overflow-hidden
                        transition-all ease-custom-transition duration-500
                    "
            >
                <p
                    className="
                            group-hover:translate-x-[-105%] whitespace-nowrap
                            transition-all ease-custom-transition duration-500
                        "
                >Yogendra Rana</p>

                <div
                    className="
                            absolute left-[100%]
                            group-hover:left-0 whitespace-nowrap
                            transition-all ease-custom-transition duration-500
                        "
                >
                    <p>Web Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Logo;