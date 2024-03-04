import { MY_DATA } from "@/data/my_data";

const useNavMenu = () => {
    const navMenu = [
        // {
        //     label: "Home",
        //     href: "/",
        // },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "Contact",
            href: "/contact",
        },
        {
            label: "Resume",
            href: MY_DATA.cvUrl,
        },
    ]
    return navMenu;
}

export default useNavMenu;