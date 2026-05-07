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
    title: "SkillSphere",
    category: "Full Stack",
    description:
      "A modern online learning platform where users can explore courses, view course details, login/register, and access protected profile pages with a clean responsive design.",
    stack: ["Next.js", "Better Auth", "MongoDB", "Tailwind CSS"],
    image: "/projectOne.png",
    liveUrl: "https://skill-sphere-b13-8-94z6.vercel.app",
    githubUrl: "https://github.com/arafatgw5-cpu/SkillSphere-B13_8",
  },
  {
    id: "02",
    title: "Dragon News",
    category: "Frontend",
    description:
      "A responsive news portal built with Next.js App Router, category-based dynamic routes, API data fetching, authentication UI, and modern card layouts.",
    stack: ["Next.js", "API Fetching", "Dynamic Route", "Tailwind CSS"],
    image: "/projectTwo.png",
    liveUrl: "https://dragon-news-blush.vercel.app",
    githubUrl: "https://github.com/arafatgw5-cpu/Dragon-News",
  },
  {
    id: "03",
    title: "Portfolio Website",
    category: "Frontend",
    description:
      "A modern personal portfolio website with animated sections, project showcase, clean UI design, responsive layout, and professional developer branding.",
    stack: ["Next.js", "Framer Motion", "shadcn/ui", "Lucide React"],
    image: "/projectThree.png",
    liveUrl: "https://your-portfolio-live-link.vercel.app",
    githubUrl: "https://github.com/arafatgw5-cpu",
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

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

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
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-lightSky/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-hoverColor/20 blur-[120px]" />

      <Container>
        <div className="relative z-10">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <p className="mb-3 inline-flex rounded-full border border-lightSky/30 bg-white/5 px-4 py-2 text-sm text-lightSky backdrop-blur">
              My Recent Works
            </p>

            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Featured <span className="text-lightSky">Projects</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
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
                  <Card className="overflow-hidden rounded-3xl border border-lightSky/20 bg-white/[0.04] shadow-2xl backdrop-blur">
                    <CardContent className="p-4 md:p-8">
                      <div className="grid items-center gap-8 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1">
                          <div className="space-y-5">
                            <h2 className="text-6xl font-extrabold leading-none text-transparent text-outline md:text-8xl">
                              {project.id}
                            </h2>

                            <div>
                              <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-lightSky">
                                {project.category} Project
                              </p>

                              <h3 className="text-2xl font-bold text-white transition-colors duration-300 hover:text-lightSky md:text-4xl">
                                {project.title}
                              </h3>
                            </div>

                            <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
                              {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-2">
                              {project.stack.map((item) => (
                                <li
                                  key={item}
                                  className="rounded-full border border-lightSky/20 bg-lightSky/10 px-3 py-1 text-xs text-lightSky md:text-sm"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>

                            <Separator className="bg-white/10" />

                            <div className="flex items-center gap-4">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Link
                                      href={project.liveUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-11 w-11 rounded-full border-lightSky/20 bg-lightSky/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-lightSky hover:bg-lightSky/10 hover:text-lightSky"
                                      >
                                        <ArrowUpRight className="h-5 w-5" />
                                        <span className="sr-only">
                                          View Live Project
                                        </span>
                                      </Button>
                                    </Link>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>View Live Project</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Link
                                      href={project.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-11 w-11 rounded-full border-lightSky/20 bg-lightSky/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-lightSky hover:bg-lightSky/10 hover:text-lightSky"
                                      >
                                        <Github className="h-5 w-5" />
                                        <span className="sr-only">
                                          View GitHub Repository
                                        </span>
                                      </Button>
                                    </Link>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>View GitHub Repository</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </div>
                        </div>

                        {/* Right Image */}
                        <div className="order-1 lg:order-2">
                          <div className="group relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-black/30 md:h-[420px]">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              priority={project.id === "01"}
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                            <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/80 backdrop-blur">
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
              <CarouselPrevious className="static h-11 w-11 translate-x-0 translate-y-0 rounded-full border border-lightSky/20 bg-transparent text-white hover:border-lightSky hover:bg-lightSky/10 hover:text-lightSky" />

              <CarouselNext className="static h-11 w-11 translate-x-0 translate-y-0 rounded-full border border-lightSky/20 bg-transparent text-white hover:border-lightSky hover:bg-lightSky/10 hover:text-lightSky" />
            </div>
          </Carousel>

          {/* Mobile Arrows */}
          <div className="mt-6 flex justify-center gap-3 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="h-11 w-11 rounded-full border border-lightSky/20 bg-transparent text-white hover:border-lightSky hover:bg-lightSky/10 hover:text-lightSky"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous slide</span>
            </Button>

            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                    ? "w-8 bg-lightSky"
                    : "w-2.5 bg-white/30"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="h-11 w-11 rounded-full border border-lightSky/20 bg-transparent text-white hover:border-lightSky hover:bg-lightSky/10 hover:text-lightSky"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}