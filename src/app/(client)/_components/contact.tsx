import { MY_DATA } from "@/data/my-data";

// import components
import EmailButton from "@/components/util/email-button";
import AnimatedLink from "@/components/util/animated-link";

const Contact = () => {

    return (
        <div className="py-6 sm:py-10 md:py-20 rounded-lg flex flex-col gap-8">
            {/* heading */}
            <div className="border-b border-gray-300">
                <div className="font-bold uppercase">
                    <p className="text-[30px]">Contact Me!</p>
                </div>
            </div>



            {/* contact detail */}
            <div className="space-y-2">
                <h1 className="text-lg">Mail me:</h1>
                <EmailButton email={MY_DATA.contact.emails[1]} />
            </div>

            <div className="space-y-2">
                <p className="text-lg">Find me on:</p>
                <div className="font-bold flex flex-col md:flex-row gap-2 md:gap-10 flex-wrap">
                    {
                        MY_DATA.contact.social.map((social, index) => {
                            return (
                                <div key={index} className="flex gap-2 items-center">
                                    <i className={social.logo.src} />
                                    <AnimatedLink
                                        label={social.name}
                                        url={social.url}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact;