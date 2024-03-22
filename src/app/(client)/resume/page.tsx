import { Metadata } from "next";

// import data
import { MY_DATA } from "@/data/my-data";

// import icons
import { GlobeIcon, MailIcon, PhoneIcon, MapPin } from "lucide-react";

// import components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {Section} from "@/components/ui/section";
import { CommandMenu } from "./components/command-menu";
import { ProjectCard } from "./components/project-card";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: `${MY_DATA.name} | ${MY_DATA.about}`,
  description: MY_DATA.professionalSummary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">

      {/* header section */}
      <section className="mx-auto w-full max-w-2xl space-y-10 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{MY_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {MY_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={MY_DATA.locationLink}
                target="_blank"
              >
                <MapPin className="size-3" />
                {MY_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {
                MY_DATA.personalWebsiteUrl ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={MY_DATA.personalWebsiteUrl} target="_blank">
                      <GlobeIcon className="size-4" />
                    </a>
                  </Button>
                ) : null
              }
              {
                MY_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${MY_DATA.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null
              }

              {
                MY_DATA.contact.tel ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${MY_DATA.contact.tel}`}>
                      <PhoneIcon className="size-4" />
                    </a>
                  </Button>
                ) : null
              }

              {
                MY_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a target="_blank" href={social.url}>
                      {/* <social.icon className="size-4" /> */}
                    </a>
                  </Button>
                ))
              }
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={MY_DATA.name} src={MY_DATA.avatarUrl} />
            <AvatarFallback>{MY_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>


        {/* about section */}
        <Section>
          <h2 className="text-2xl font-bold border-b border-gray-200">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {MY_DATA.generalSummary}
          </p>
        </Section>


        {/* skills section */}
        <Section>
          <h2 className="text-2xl font-bold border-b border-gray-200">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {MY_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>


        {/* education section */}
        <Section>
          <h2 className="text-2xl font-bold border-b border-gray-200">Education</h2>
          {MY_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>


        {/* work experience section */}
        <Section>
          <h2 className="text-2xl font-bold border-b border-gray-200">Work Experience</h2>
          {MY_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link} target="_blank">
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.role}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>


        {/* projects section */}
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-2xl font-bold border-b border-gray-200">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {MY_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>


      {/* command section */}
      <CommandMenu
        links={[
          {
            url: MY_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...MY_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}