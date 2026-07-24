"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

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
import { projects } from "@/lib/projects";

export default function ProjectSlider() {
  const [api, setApi] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const prefersReducedMotion = useReducedMotion();

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

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      }}
      className="relative overflow-hidden py-14 md:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-[var(--color-primary)]/20 blur-[130px]" />
        <div className="absolute bottom-0 -right-20 h-80 w-80 rounded-full bg-[var(--color-primary)]/20 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-border) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 40%, #000 35%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 40%, #000 35%, transparent 100%)",
          }}
        />
      </div>

      <Container>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 text-center md:mb-16"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-text)]/5 px-4 py-2 text-sm font-medium text-[var(--color-primary)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-primary)]" />
              My Recent Works
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-5xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/60 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
              Here are some of my real-world projects where I practiced frontend
              design, authentication, API fetching, database integration, and
              deployment.
            </p>
          </motion.div>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.id}>
                  <Card className="overflow-hidden rounded-[24px] border border-[var(--color-primary)]/15 bg-[var(--color-surface)]/80 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                    <CardContent className="p-5 md:p-8 lg:p-10">
                      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="order-2 lg:order-1">
                          <div className="space-y-5">
                            <div className="flex items-center gap-4">
                              <span className="bg-gradient-to-b from-[var(--color-text)]/25 to-transparent bg-clip-text text-6xl font-extrabold leading-none text-transparent md:text-8xl">
                                {project.id}
                              </span>
                              <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-border)] to-transparent" />
                            </div>

                            <div>
                              <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-primary)] md:text-sm">
                                {project.category} Project
                              </p>

                              <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-primary)] md:text-4xl">
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
                                  className="rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-3 py-1 text-xs text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)]/20 md:text-sm"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>

                            <Separator className="bg-[var(--color-border)]" />

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex items-center gap-4">
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View live project: ${project.title}`}
                                      >
                                        <Button
                                          variant="outline"
                                          size="icon"
                                          className="group h-11 w-11 rounded-full border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 text-[var(--color-text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
                                        >
                                          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                                          <span className="sr-only">View Live Project</span>
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
                                        aria-label={`View GitHub repository: ${project.title}`}
                                      >
                                        <Button
                                          variant="outline"
                                          size="icon"
                                          className="group h-11 w-11 rounded-full border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 text-[var(--color-text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
                                        >
                                          <Github className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                                          <span className="sr-only">View GitHub Repository</span>
                                        </Button>
                                      </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>View GitHub Repository</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>

                              <Link href={`/projects/${project.slug}`} className="group relative sm:ml-auto">
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_var(--color-primary)]/30 transition-all hover:shadow-[0_0_30px_var(--color-primary)]/50"
                                >
                                  <span className="relative z-10">View Details</span>
                                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                                </motion.div>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="order-1 lg:order-2">
                          <motion.div
                            initial={
                              prefersReducedMotion
                                ? false
                                : { opacity: 0, scale: 0.94, y: 20 }
                            }
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                              duration: 0.7,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative"
                          >
                            <div
                              aria-hidden="true"
                              className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-tr from-[var(--color-primary)]/25 via-transparent to-[var(--color-primary)]/10 opacity-60 blur-2xl"
                            />

                            <Link href={`/projects/${project.slug}`}>
                              <div className="group relative aspect-[16/11] cursor-pointer overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]">
                                <Image
                                  src={project.image}
                                  alt={`${project.title} — ${project.category} project preview`}
                                  fill
                                  priority={index === 0}
                                  loading={index === 0 ? "eager" : "lazy"}
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                  className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 via-[var(--color-bg)]/5 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                                <div
                                  aria-hidden="true"
                                  className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-all duration-1000 ease-out group-hover:translate-x-full group-hover:opacity-100"
                                  style={{
                                    background:
                                      "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.14) 50%, transparent 65%)",
                                  }}
                                />
                                <div className="absolute left-4 top-4 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/50 px-4 py-2 text-xs font-medium text-[var(--color-text)] backdrop-blur-md">
                                  {project.category}
                                </div>
                                <div
                                  aria-hidden="true"
                                  className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/10"
                                />
                              </div>
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 hidden justify-end gap-3 md:flex">
              <CarouselPrevious className="static h-11 w-11 translate-x-0 translate-y-0 rounded-full border border-[var(--color-primary)]/20 bg-transparent text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]" />
              <CarouselNext className="static h-11 w-11 translate-x-0 translate-y-0 rounded-full border border-[var(--color-primary)]/20 bg-transparent text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]" />
            </div>
          </Carousel>

          <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="h-11 w-11 rounded-full border border-[var(--color-primary)]/20 bg-transparent text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentIndex === index}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-[var(--color-primary)]"
                      : "w-2.5 bg-[var(--color-text)]/30 hover:bg-[var(--color-text)]/50"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              aria-label="Next slide"
              className="h-11 w-11 rounded-full border border-[var(--color-primary)]/20 bg-transparent text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}