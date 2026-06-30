"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Container from "@/components/Container";

const projects = [
  {
    id: "01",
    title: "Ticket Bari",
    category: "Full Stack",
    description:
      "A modern online ticket booking platform with role-based dashboards (User, Vendor, Admin), secure Stripe payment integration, and real-time ticket management.",
    stack: ["Next.js", "Stripe", "TanStack Query", "Node.js", "MongoDB"],
    image: "/projectOne.png",
    liveUrl: "https://a-fff.vercel.app",
    githubUrl: "https://github.com/arafatgw5-cpu/Ticket-Booking-Platform-FFF",
  },
  {
    id: "02",
    title: "SkillSphere",
    category: "Full Stack",
    description:
      "A modern online learning platform where users can explore courses, view course details, login/register, and access protected profile pages with a clean responsive design.",
    stack: ["Next.js", "Better Auth", "MongoDB", "Tailwind CSS"],
    image: "/projectTwo.png",
    liveUrl: "https://skill-sphere-b13-8-94z6.vercel.app",
    githubUrl: "https://github.com/arafatgw5-cpu/SkillSphere-B13_8",
  },
  {
    id: "03",
    title: "Dragon News",
    category: "Frontend",
    description:
      "A responsive news portal built with Next.js App Router, category-based dynamic routes, API data fetching, authentication UI, and modern card layouts.",
    stack: ["Next.js", "API Fetching", "Dynamic Route", "Tailwind CSS"],
    image: "/projectThree.png",
    liveUrl: "https://dragon-news-blush.vercel.app",
    githubUrl: "https://github.com/arafatgw5-cpu/Dragon-News",
  },
];

export default function ProjectSlider() {
  const [api, setApi] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    handleSelect();
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      className="relative overflow-hidden py-10 md:py-16"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[var(--color-primary)]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--color-primary)]/20 blur-[120px]" />

      <Container>
        <div className="relative z-10">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <p className="mb-3 inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-text)]/5 px-4 py-2 text-sm text-[var(--color-primary)] backdrop-blur">
              My Recent Works
            </p>

            <h2 className="text-3xl font-bold text-[var(--color-text)] md:text-5xl">
              Featured <span className="text-[var(--color-primary)]">Projects</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
              Here are some of my real-world projects where I practiced
              frontend design, authentication, API fetching, database
              integration, and deployment.
            </p>
          </div>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <Card className="overflow-hidden rounded-3xl border border-[var(--color-primary)]/20 bg-[var(--color-surface)] shadow-2xl backdrop-blur">
                    <CardContent className="p-4 md:p-8">
                      <div className="grid items-center gap-8 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1">
                          <div className="space-y-5">
                            <h2 className="text-6xl font-extrabold leading-none text-transparent text-outline md:text-8xl">
                              {project.id}
                            </h2>

                            <div>
                              <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-primary)]">
                                {project.category} Project
                              </p>

                              <h3 className="text-2xl font-bold text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-primary)] md:text-4xl">
                                {project.title}
                              </h3>
                            </div>

                            <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
                              {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-2">
                              {project.stack.map((item) => (
                                <li
                                  key={item}
                                  className="rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-3 py-1 text-xs text-[var(--color-primary)] md:text-sm"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>

                            <Separator className="bg-[var(--color-border)]" />

                            <div className="flex items-center gap-4">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                      <Button variant="outline" size="icon" className="h-11 w-11 rounded-full border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 text-[var(--color-text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]">
                                        <ArrowUpRight className="h-5 w-5" />
                                      </Button>
                                    </Link>
                                  </TooltipTrigger>
                                  <TooltipContent>View Live Project</TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                      <Button variant="outline" size="icon" className="h-11 w-11 rounded-full border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 text-[var(--color-text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]">
                                        <Github className="h-5 w-5" />
                                      </Button>
                                    </Link>
                                  </TooltipTrigger>
                                  <TooltipContent>View GitHub Repository</TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </div>
                        </div>

                        {/* Right Image */}
                        <div className="order-1 lg:order-2">
                          <div className="group relative h-64 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] md:h-[420px]">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              priority={project.id === "01"}
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/60 via-transparent to-transparent" />
                            <div className="absolute left-4 top-4 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/40 px-4 py-2 text-xs text-[var(--color-text)] backdrop-blur">
                              {project.category}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Desktop Arrows */}
            <div className="mt-6 hidden justify-end gap-3 md:flex">
              <CarouselPrevious className="static h-11 w-11 translate-x-0 translate-y-0 rounded-full border border-[var(--color-primary)]/20 bg-transparent text-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]" />
              <CarouselNext className="static h-11 w-11 translate-x-0 translate-y-0 rounded-full border border-[var(--color-primary)]/20 bg-transparent text-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]" />
            </div>
          </Carousel>

          {/* Mobile Arrows */}
          <div className="mt-6 flex justify-center gap-3 md:hidden">
            <Button variant="outline" size="icon" onClick={scrollPrev} className="h-11 w-11 rounded-full border border-[var(--color-primary)]/20 bg-transparent text-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? "w-8 bg-[var(--color-primary)]" : "w-2.5 bg-[var(--color-text)]/30"}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={scrollNext} className="h-11 w-11 rounded-full border border-[var(--color-primary)]/20 bg-transparent text-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}