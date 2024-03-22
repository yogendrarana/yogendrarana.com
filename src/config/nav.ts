import { MY_DATA } from "@/data/my-data";

interface INavMenu {
    label: string;
    href: string;
}

export const nav_menu = {
    mainMenu: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About",
            href: "#about",
        },
        {
            label: "Contact",
            href: "#contact",
        },
    ],

    moreMenu: [
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "Resume",
            href: MY_DATA.cvUrl,
        },
    ],
}