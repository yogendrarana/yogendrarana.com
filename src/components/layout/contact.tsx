import Link from "next/link";
import { MY_DATA } from "@/data/my-data";

// import components
import EmailButton from "@/components/util/email-button";

const Contact = () => {

    return (
        <div className="min-h-screen p-[var(--px)] sm:p-[var(--md-px)] flex flex-col justify-between">
            {/* heading */}
            <div className="py-4 border-b">
                <div className="text-5xl font-bold uppercase">Contact Me!</div>
            </div>

            {/* contact detail */}
            <div className="space-y-3 cursor-pointer">
                <h1 className="text-lg">Get in touch by email:</h1>
                <EmailButton email={MY_DATA.contact.emails[0]} />
                <EmailButton email={MY_DATA.contact.emails[1]} />
            </div>

            <div className="space-y-3">
                <p className="text-">Or you can find me on:</p>
                <div className="font-bold flex flex-wrap gap-[3rem] sm:gap-[1rem]">
                    {
                        MY_DATA.contact.social.map((social, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    className="
                                            font-bold
                                            inline-block
                                            relative
                                            text-lg
                                            before:content-['']
                                            before:py-1
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