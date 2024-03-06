import {
    DockerLogo,
    DrizzleLogo,
    ExpressLogo,
    GinLogo,
    GitHubLogo,
    GitLogo,
    GoLogo,
    JavaScriptLogo,
    MongoDBLogo,
    MySQLLogo,
    NestLogo,
    NextLogo,
    NginxLogo,
    NodeLogo,
    PostgreSLogo,
    PrismaLogo,
    ReactLogo,
    RedisLogo,
    TypeScriptLogo,
    UbuntuLogo
} from "@/images/index";

export const tech = {
    languages: [
        { name: "JavaScript", logo: JavaScriptLogo },
        { name: "TypeScript", logo: TypeScriptLogo },
        { name: "Go", logo: GoLogo },
    ],
    frameworks: [
        { name: "React", logo: ReactLogo },
        { name: "Next", logo: NextLogo },
        { name: "Node", logo: NodeLogo },
        { name: "Express", logo: ExpressLogo },
        { name: "Nest", logo: NestLogo },
        { name: "Gin", logo: GinLogo },
    ],
    databases: [
        { name: "PostgreSQL", icon: PostgreSLogo },
        { name: "MongoDB", icon: MongoDBLogo },
        { name: "MySQL", icon: MySQLLogo },
        { name: "Redis", icon: RedisLogo },
        { name: "Prisma", icon: PrismaLogo },
        { name: "Drizzle", icon: DrizzleLogo },
    ],
    tools: [
        { name: "Nginx", icon: NginxLogo },
        { name: "Docker", icon: DockerLogo },
        { name: "Linux", icon: UbuntuLogo },
        { name: "Git", icon: GitLogo },
    ],
}