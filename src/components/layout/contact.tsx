import Link from "next/link";
import { MY_DATA } from "@/data/my-data";

// import components
import EmailButton from "@/components/util/email-button";

const Contact = () => {

    return (
        <div className="min-h-screen p-[var(--px)] sm:p-[var(--md-px)] flex flex-col justify-between">
            {/* heading */}
            <div className="py-[4rem] border-b">
                <div className="text-[5rem] font-bold uppercase">
                    <p>Contact Me</p>
                </div>
            </div>

            {/* contact detail */}
            <div className="py-[4rem] cursor-pointer border-b">
                <h1 className="text-[1.75rem]">Get in touch by email:</h1>

                <EmailButton email={MY_DATA.contact.emails[0]} />
                <EmailButton email={MY_DATA.contact.emails[1]} />
            </div>

            <div className="py-[4rem]">
                <p className="text-[1.75rem]">Or you can find me on:</p>
                <div className="mt-[1rem] text-[1.5rem] font-bold flex flex-wrap gap-[3rem] sm:gap-[1rem]">
                    {
                        MY_DATA.contact.social.map((social, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={social.url}
                                    target="_blank"
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
                                >{social.name}</Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact;