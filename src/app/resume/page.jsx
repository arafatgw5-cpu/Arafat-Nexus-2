"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  GraduationCap,
  Briefcase,
  Code2,
  User,
  Rocket,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Container from "@/components/Container";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];

const tabContent = {
  experience: {
    title: "Project Experience",
    subtitle:
      "I am building real-world projects with Next.js, authentication, database integration, and modern UI.",
    items: [
      {
        role: "Frontend / Full Stack Developer",
        company: "SkillSphere – Online Learning Platform",
        period: "2026",
        description:
          "Built a modern online learning platform where users can explore courses, view course details, login/register, and access protected profile pages. Focused on clean UI, responsive design, authentication, and dynamic routing.",
        highlights: [
          "Next.js",
          "Better Auth",
          "MongoDB",
          "Tailwind CSS",
          "Responsive UI",
        ],
      },
      {
        role: "Next.js Developer",
        company: "Dragon News Clone",
        period: "2026",
        description:
          "Developed a news portal using category-based dynamic routing, API data fetching, protected authentication flow, and responsive card layouts. Improved practical understanding of App Router, server/client components, and deployment.",
        highlights: [
          "App Router",
          "API Fetching",
          "Dynamic Route",
          "Google Auth",
          "Vercel",
        ],
      },
      {
        role: "Portfolio Developer",
        company: "Personal Portfolio Website",
        period: "Ongoing",
        description:
          "Designing a personal developer portfolio with modern animations, clean sections, project showcases, and unique branding to present skills professionally.",
        highlights: [
          "Framer Motion",
          "shadcn/ui",
          "Lucide Icons",
          "Modern UI",
          "Clean Code",
        ],
      },
    ],
  },

  education: {
    title: "Learning Journey",
    subtitle:
      "My education is focused on web development, problem solving, and building job-ready projects.",
    items: [
      {
        degree: "Frontend & Full Stack Web Development",
        institution: "Programming Hero / Practical Learning",
        period: "2025 - Present",
        description:
          "Learning JavaScript, React, Next.js, authentication, backend basics, MongoDB, deployment, and real-world assignment-based project development.",
        achievements: [
          "React Projects",
          "Next.js Projects",
          "Authentication",
          "MongoDB",
          "Deployment",
        ],
      },
      {
        degree: "Self-Learning & Practice",
        institution: "YouTube, Documentation & Real Projects",
        period: "Ongoing",
        description:
          "Regularly practicing project building, debugging, GitHub workflow, UI design, responsive layouts, and modern web development tools.",
        achievements: [
          "Daily Practice",
          "Git & GitHub",
          "Error Solving",
          "Clean UI",
          "Portfolio Building",
        ],
      },
    ],
  },

  skills: {
    title: "Technical Skills",
    subtitle:
      "Tools and technologies I use to build modern, responsive, and user-friendly web applications.",
    categories: [
      {
        name: "Frontend Development",
        description:
          "I create responsive and clean user interfaces using React, Next.js, Tailwind CSS, DaisyUI, and shadcn/ui. I focus on layout, animation, reusable components, and user experience.",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "DaisyUI",
          "shadcn/ui",
          "Framer Motion",
        ],
      },
      {
        name: "Backend & Authentication",
        description:
          "I am learning backend integration with MongoDB and authentication systems using Better Auth. I can connect projects with database, protect routes, and handle login/logout flow.",
        skills: [
          "Node.js Basics",
          "MongoDB",
          "Better Auth",
          "API Routes",
          "Protected Routes",
          "Environment Variables",
        ],
      },
      {
        name: "Tools & Deployment",
        description:
          "I use modern developer tools for project management, version control, debugging, and deployment. I regularly work with GitHub, Vercel, VS Code, and npm.",
        skills: [
          "Git",
          "GitHub",
          "Vercel",
          "VS Code",
          "npm",
          "Chrome DevTools",
          "Responsive Testing",
        ],
      },
    ],
  },

  about: {
    title: "About Me",
    bio: "Hi, I’m Easin Arafat — an aspiring Frontend / Full Stack Web Developer from Bangladesh. I love building clean, modern, and responsive websites using React and Next.js. I am currently focused on improving my real-world project skills, authentication flow, MongoDB integration, and professional portfolio design.",
    points: [
      "I enjoy solving errors and learning by building practical projects.",
      "I focus on clean UI, responsive design, and reusable components.",
      "My goal is to become a job-ready web developer with strong project experience.",
      "I am improving every day through assignments, practice, and real deployment.",
    ],
    interests: [
      "Web Development",
      "Modern UI Design",
      "Next.js Projects",
      "Problem Solving",
      "Portfolio Building",
    ],
    languages: ["Bangla", "English"],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ResumePage() {
  return (
    <section className="relative overflow-hidden py-12 text-white">
      {/* Unique Background Glow */}
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-lightSky/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-hoverColor/20 blur-[120px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          className="relative z-10 w-full"
        >
          {/* Section Header */}
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lightSky/30 bg-white/10 px-4 py-2 text-sm text-lightSky backdrop-blur">
              <Sparkles className="h-4 w-4" />
              My Resume
            </div>

            <h2 className="text-3xl font-bold md:text-5xl">
              My Journey as a{" "}
              <span className="text-lightSky">Web Developer</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              A quick overview of my projects, learning journey, technical
              skills, and personal development path.
            </p>
          </div>

          <Tabs
            defaultValue="experience"
            className="grid w-full gap-8 lg:grid-cols-[280px_1fr]"
          >
            {/* Left Tab Menu */}
            <TabsList className="grid h-fit grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur md:grid-cols-4 lg:grid-cols-1">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="group flex items-center justify-start gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70 transition-all duration-300 hover:border-lightSky/40 hover:bg-lightSky/10 hover:text-white data-[state=active]:border-lightSky/50 data-[state=active]:bg-lightSky/20 data-[state=active]:text-lightSky"
                >
                  <item.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>{item.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Right Content */}
            <div className="min-h-[430px] rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur md:p-8">
              {/* Experience */}
              <TabsContent value="experience" className="mt-0">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-7">
                    <h2 className="text-2xl font-bold text-lightSky md:text-3xl">
                      {tabContent.experience.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-white/60">
                      {tabContent.experience.subtitle}
                    </p>
                  </div>

                  <div className="space-y-5">
                    {tabContent.experience.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.12 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lightSky/40 hover:bg-lightSky/5"
                      >
                        <div className="absolute right-4 top-4 opacity-10 transition-all duration-300 group-hover:opacity-20">
                          <Rocket className="h-12 w-12 text-lightSky" />
                        </div>

                        <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {item.role}
                            </h3>
                            <p className="mt-1 text-sm text-lightSky">
                              {item.company}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                            <Calendar className="h-4 w-4" />
                            {item.period}
                          </div>
                        </div>

                        <p className="mb-4 text-sm leading-7 text-white/60">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, i) => (
                            <Badge
                              key={i}
                              className="border border-lightSky/20 bg-lightSky/10 text-lightSky hover:bg-lightSky/20"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Education */}
              <TabsContent value="education" className="mt-0">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-7">
                    <h2 className="text-2xl font-bold text-lightSky md:text-3xl">
                      {tabContent.education.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-white/60">
                      {tabContent.education.subtitle}
                    </p>
                  </div>

                  <div className="space-y-5">
                    {tabContent.education.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.12 }}
                        className="rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lightSky/40 hover:bg-lightSky/5"
                      >
                        <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {item.degree}
                            </h3>
                            <p className="mt-1 text-sm text-lightSky">
                              {item.institution}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                            <Calendar className="h-4 w-4" />
                            {item.period}
                          </div>
                        </div>

                        <p className="mb-4 text-sm leading-7 text-white/60">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, i) => (
                            <Badge
                              key={i}
                              className="border border-lightSky/20 bg-lightSky/10 text-lightSky hover:bg-lightSky/20"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skills" className="mt-0">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-7">
                    <h2 className="text-2xl font-bold text-lightSky md:text-3xl">
                      {tabContent.skills.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-white/60">
                      {tabContent.skills.subtitle}
                    </p>
                  </div>

                  <div className="grid gap-5">
                    {tabContent.skills.categories.map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.12 }}
                        className="rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lightSky/40 hover:bg-lightSky/5"
                      >
                        <h3 className="mb-3 text-lg font-semibold text-white">
                          {category.name}
                        </h3>

                        <p className="mb-5 text-sm leading-7 text-white/60">
                          {category.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              className="border border-white/10 bg-white/10 text-white/80 hover:border-lightSky/30 hover:bg-lightSky/10 hover:text-lightSky"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* About */}
              <TabsContent value="about" className="mt-0">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-7">
                    <h2 className="text-2xl font-bold text-lightSky md:text-3xl">
                      {tabContent.about.title}
                    </h2>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="mb-6 text-sm leading-8 text-white/70 md:text-base">
                      {tabContent.about.bio}
                    </p>

                    <div className="mb-7 grid gap-3">
                      {tabContent.about.points.map((point, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-lightSky" />
                          <p className="text-sm leading-6 text-white/70">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="mb-3 text-lg font-semibold text-white">
                          Interests
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {tabContent.about.interests.map((interest, i) => (
                            <Badge
                              key={i}
                              className="border border-lightSky/20 bg-lightSky/10 text-lightSky hover:bg-lightSky/20"
                            >
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-3 text-lg font-semibold text-white">
                          Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {tabContent.about.languages.map((language, i) => (
                            <Badge
                              key={i}
                              className="border border-white/10 bg-white/10 text-white/80"
                            >
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  );
}