export const MY_DATA = {
    name: "Yogendra Rana",
    initials: "YR",
    location: "Pokhara, Nepal",
    locationLink: "https://www.google.com/maps/place/pokhara",
    about: "Full Stack Developer",
    generalSummary: "Web developer from Nepal.",
    professionalSummary: "I am a full stack web developer with over a year of experience building user interfaces and RESTful APIs. Proficient in JavaScript/TS and its frameworks like React, Next, Node, Express, and Nest. Also familiar with Go and its backend framework, Gin.",
    avatarUrl: " https://github.com/yogendrarana.png",
    personalWebsiteUrl: "https://www.yogendrarana.com.np/",
    cvUrl: "https://resume-yogendra-rana.vercel.app/",
    contact: {
        email: "yogendrarana4321@gmail.com",
        tel: "+977 9825159891",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/yogendrarana",
                logo: { type: "img", src: "fa-brands fa-github" },
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/yogendra-rana/",
                logo: { type: "icon", src: "fa-brands fa-linkedin-in" },
            },
            {
                name: "Twitter",
                url: "https://twitter.com/yoogendra_rana",
                logo: { type: "icon", src: "fa-brands fa-twitter" }
            },
        ],
    },
    education: [
        {
            school: "Prithvi Narayan Campus, Pokhara, Gandaki, Nepal",
            degree: "Bachelor's Degree in Computer Science and Information Technology",
            start: "2018",
            end: "2023",
        },
        {
            school: "SOS Hermann Gmeiner Gandaki, Nepal",
            degree: "10+2 Science",
            start: "2018",
            end: "2016",
        },
    ],
    work: [
        {
            company: "Rangin Technology",
            link: "https://www.rangin.com.np/",
            badges: ["Hybrid"],
            role: "Full Stack Developer",
            logo: "",
            start: "May, 2022",
            end: "present",
            description:
                "Worked as a fullstack developer to create user interfaces in React.js and Next.js and REST APIs in Node.js, Express.js, and Next.js. Technologies: JavaScript, TypeScript, React, Next.js, Node.js, Express.js, Nest.js, MongoDB, PostgreSQL, Docker, and Nginx.",
        },
        // {
        //     company: "Nipuna Prabidhik Sewa",
        //     link: "https://www.nipunasewa.com/",
        //     badges: ["On Site"],
        //     role: "React JS Developer",
        //     logo: "",
        //     start: "Jan, 2023",
        //     end: "July, 2023",
        //     description:
        //         "As a frontend developer, I built an admin panel for emart using React.js, Tailwind CSS, and Firebase. Technologies: React.js, Tailwind CSS, Firebase",
        // },
    ],
    skills: [
        "JavaScript",
        "TypeScript",
        "Go",
        "React",
        "Next",
        "Node",
        "Express",
        "Nest",
        "REST API",
        "GraphQL",
        "Socket.io",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "Nginx",
        "Ubuntu",
    ],
    projects: [
        {
            title: "Iphone Fix by XPF",
            techStack: ["HTML", "CSS", "JS"],
            description: "A website for a night club in Pokhara. Role: Frontend Development.",
            image: "",
            link: {
                label: "www.iphonefixbyxpf.com",
                href: "https://www.iphonefixbyxpf.com/",
            },
        },
        {
            title: "Artsy Web Gallery",
            techStack: ["React.js", "Redux Toolkit", "Express.js", "MongoDB", "Stripe", "Khalti"],
            description: "A web platform for artists to showcase their work and connect with art lovers.",
            image: "",
            link: {
                label: "artsy-art-gallery.vercel.app",
                href: "https://artsy-art-gallery.vercel.app/",
            },
        },
        {
            title: "Swift Chat",
            techStack: ["Next.js", "Zustand", "Pusher", "Auth.js", "Framer Motion"],
            description: "A minimal web chat application.",
            image: "",
            link: {
                label: "swift-web-chat.vercel.app",
                href: "https://swift-web-chat.vercel.app/",
            },
        },
        {
            title: "Ecommerce Website",
            techStack: ["React.js", "Zustand", "Framer Motion"],
            description: "An ecommerce website with all the necessary ui's like auth form, filter, slider, cart, payment form etc.",
            image: "",
            link: {
                label: "react-web-ecommerce.vercel.app",
                href: "https://react-web-ecommerce.vercel.app/",
            },
        },
    ],
    faq: [
        {
            "question": "What is your degree?",
            "answer": "I hold a Bachelor's Degree in Computer Science and Information Technology from Tribhuvan University, Nepal."
        },
        {
            "question": "What is your tech stack?",
            "answer": "My tech stack includes React, Next and Node. I use MongoDB, MySQL, and PostgreSQL. In my personal projects, I use Go and Gin for the backend."
        },
        {
            "question": "When did you start coding?",
            "answer": "I started coding during the lockdown in 2020. I started with HTML and CSS and JavaScript. Then I moved on to React and Node. I'm currently exploring Go."
        }
    ]
} as const;