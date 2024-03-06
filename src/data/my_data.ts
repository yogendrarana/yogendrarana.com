export const MY_DATA = {
    name: "Yogendra Rana",
    initials: "YR",
    location: "Pokhara, Nepal",
    locationLink: "https://www.google.com/maps/place/pokhara",
    about: "Full Stack Developer",
    professionalSummary: "Full stack web developer with over a year of experience building user interfaces and RESTful APIs. Proficient in JavaScript/TS and its frameworks like React, Next, Node, Express, and Nest. Also familiar with Go and its backend framework, Gin.",
    generalSummary: "Hello! I'm Yogendra Rana from Pokhara, Nepal. I am a full-stack developer specializing in JavaScript/TypeScript. I completed my Bachelors of Science in Computer Science and Information Technology from Prithvi Narayan Campus, Pokhara (Tribhuvan University) in 2023. <br /> Let's collaborate and bring your ideas to life!",
    avatarUrl: " https://github.com/yogendrarana.png",
    personalWebsiteUrl: "https://www.yogendrarana.com.np/",
    cvUrl: "https://cv-yogendra-rana.vercel.app/",
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
            logo: "",
            link: {
                label: "www.iphonefixbyxpf.com",
                href: "https://www.iphonefixbyxpf.com/",
            },
        },
        {
            title: "Artsy Web Gallery",
            techStack: ["React.js", "Redux Toolkit", "Express.js", "MongoDB", "Stripe", "Khalti"],
            description: "A web platform for artists to showcase their work and connect with art lovers.",
            logo: "",
            link: {
                label: "artsy-art-gallery.vercel.app",
                href: "https://artsy-art-gallery.vercel.app/",
            },
        },
        {
            title: "Swift Chat",
            techStack: ["Next.js", "Zustand", "Pusher", "Auth.js", "Framer Motion"],
            description: "A minimal web chat application.",
            logo: "",
            link: {
                label: "swift-web-chat.vercel.app",
                href: "https://swift-web-chat.vercel.app/",
            },
        },
        {
            title: "Ecommerce Website",
            techStack: ["React.js", "Zustand", "Framer Motion"],
            description: "An ecommerce website with all the necessary ui's like auth form, filter, slider, cart, payment form etc.",
            logo: "",
            link: {
                label: "react-web-ecommerce.vercel.app",
                href: "https://react-web-ecommerce.vercel.app/",
            },
        },
    ],
    faq: [
        {
            "question": "What is my tech stack?",
            "answer": "My tech stack includes React and Next.js for making the website look nice, and Node.js and Express.js for doing the heavy lifting behind the scenes. I also handle data using MongoDB, MySQL, and PostgreSQL. In my own projects, I like to play around with Go and Gin."
        },
        {
            "question": "When did I start coding?",
            "answer": "I started coding during the lockdown in 2020. I started with HTML and CSS, then moved on to JavaScript. I learned React and Node.js in 2021. I'm currently learning Go. I also want to learn blockchain technology in the future."
        },
        {
            "question": "How did I learn to code?",
            "answer": "I learned to code by watching videos from YouTube channels like Web Dev Simplified, The Net Ninja, Dave Gray, Coding Addict and 6 Pack Programmer to name few. But honestly, the best way to learn is by reading the official documentation."
        },
        {
            "question": "Who do I look up to in the tech industry?",
            "answer": "I look up to folks who share their knowledge online. Some of the people I admire are The Primeagen, Theo Browne(T3.gg), Harkirat Singh, Fireship, and the folks at Vercel who are actively sharing content on twitter."
        }
    ]
} as const;