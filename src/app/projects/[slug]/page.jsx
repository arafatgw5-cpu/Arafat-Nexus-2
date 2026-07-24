import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { 
  ArrowUpRight, Github, ArrowLeft, CheckCircle2, 
  Lightbulb, Rocket, ChevronLeft, ChevronRight, Layout, Server, 
  Clock, CheckSquare, Globe
} from "lucide-react";

import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <article className="min-h-screen bg-[var(--color-bg)] pb-24 pt-20">
      <Container>
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] transition-transform group-hover:-translate-x-1">
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to Projects
          </Link>
        </div>

        <section className="relative mb-20 overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)]/50 shadow-2xl backdrop-blur-xl">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[var(--color-primary)]/20 blur-[128px]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-[128px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative z-10 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <Badge className="mb-6 w-fit border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 py-1.5 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20">
                {project.category}
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[var(--color-text)] md:text-5xl xl:text-6xl">
                {project.title}
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-[var(--color-muted)]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href={project.liveUrl} target="_blank" className="group relative">
                  <div className="relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--color-text)] px-8 py-3.5 font-semibold text-[var(--color-bg)] transition-transform hover:scale-105 active:scale-95">
                    <span className="relative z-10">Live Demo</span>
                    <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:rotate-45" />
                  </div>
                </Link>
                
                <Link href={project.githubUrl} target="_blank" className="group relative">
                  <div className="flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-3.5 font-semibold text-[var(--color-text)] transition-all hover:border-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]">
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative min-h-[350px] sm:min-h-[420px] lg:min-h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/80 via-transparent lg:bg-gradient-to-r lg:from-[var(--color-surface)]/60 lg:to-transparent lg:z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
          <div className="space-y-16">
            <section>
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-[var(--color-text)]">
                <Layout className="h-8 w-8 text-[var(--color-primary)]" />
                Project Overview
              </h2>
              <div className="prose prose-lg prose-invert max-w-none text-[var(--color-muted)]">
                <p className="leading-8">{project.overview}</p>
              </div>
            </section>

            <section>
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-[var(--color-text)]">
                <CheckSquare className="h-8 w-8 text-[var(--color-primary)]" />
                Key Features
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature, i) => (
                  <Card key={i} className="border-[var(--color-border)] bg-[var(--color-surface)]/30 backdrop-blur-sm transition-colors hover:border-[var(--color-primary)]/50">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="rounded-full bg-[var(--color-primary)]/10 p-2 text-[var(--color-primary)]">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="font-medium text-[var(--color-text)]">{feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-[var(--color-text)]">
                <Lightbulb className="h-8 w-8 text-[var(--color-primary)]" />
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, i) => (
                  <Card key={i} className="overflow-hidden border-[var(--color-border)] bg-transparent">
                    <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)]/50 px-6 py-4">
                      <h3 className="font-semibold text-[var(--color-text)]">{challenge.title}</h3>
                    </div>
                    <div className="grid gap-px bg-[var(--color-border)] sm:grid-cols-2">
                      <div className="bg-[var(--color-surface)]/20 p-6">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-rose-400">The Problem</p>
                        <p className="text-[var(--color-muted)]">{challenge.problem}</p>
                      </div>
                      <div className="bg-[var(--color-surface)]/20 p-6">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">The Solution</p>
                        <p className="text-[var(--color-muted)]">{challenge.solution}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {project.gallery && project.gallery.length > 0 && (
              <section>
                <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-[var(--color-text)]">
                  <Globe className="h-8 w-8 text-[var(--color-primary)]" />
                  Gallery
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="group relative aspect-video overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                      <Image 
                        src={img} 
                        alt={`Gallery Image ${i + 1}`} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-[var(--color-text)]">
                <Rocket className="h-8 w-8 text-[var(--color-primary)]" />
                Future Roadmap
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.future.map((item, i) => (
                  <Badge key={i} variant="outline" className="border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text)] shadow-sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8 lg:sticky lg:top-24 lg:h-fit">
            <Card className="border-[var(--color-border)] bg-[var(--color-surface)]/30 backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold text-[var(--color-text)]">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-[var(--color-text)]/5 px-3 py-1.5 text-sm font-medium text-[var(--color-text)] ring-1 ring-[var(--color-border)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] hover:ring-[var(--color-primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-[var(--color-border)] bg-[var(--color-surface)]/30 backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold text-[var(--color-text)]">Project Info</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-[var(--color-border)] pb-2 text-sm">
                    <span className="text-[var(--color-muted)]">Role</span>
                    <span className="font-medium text-[var(--color-text)]">{project.info.role}</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--color-border)] pb-2 text-sm">
                    <span className="text-[var(--color-muted)]">Team Size</span>
                    <span className="font-medium text-[var(--color-text)]">{project.info.team}</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--color-border)] pb-2 text-sm">
                    <span className="text-[var(--color-muted)]">Platform</span>
                    <span className="font-medium text-[var(--color-text)]">{project.info.platform}</span>
                  </li>
                  <li className="flex justify-between pb-2 text-sm">
                    <span className="text-[var(--color-muted)]">Database</span>
                    <span className="font-medium text-[var(--color-text)]">{project.info.database}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-[var(--color-border)] bg-[var(--color-surface)]/30 p-4 text-center">
                <Clock className="mx-auto mb-2 h-6 w-6 text-[var(--color-primary)]" />
                <p className="text-2xl font-bold text-[var(--color-text)]">{project.stats.time}</p>
                <p className="text-xs text-[var(--color-muted)]">Development Time</p>
              </Card>
              <Card className="border-[var(--color-border)] bg-[var(--color-surface)]/30 p-4 text-center">
                <Server className="mx-auto mb-2 h-6 w-6 text-[var(--color-primary)]" />
                <p className="text-2xl font-bold text-[var(--color-text)]">{project.stats.performance}</p>
                <p className="text-xs text-[var(--color-muted)]">Performance Score</p>
              </Card>
            </div>
          </div>
        </div>

        <Separator className="my-20 bg-[var(--color-border)]" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`} className="group flex w-full flex-col sm:w-1/2">
              <span className="mb-2 text-sm font-medium text-[var(--color-muted)]">Previous Project</span>
              <div className="flex items-center gap-3 text-xl font-bold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
                {prevProject.title}
              </div>
            </Link>
          ) : (
            <div className="w-full sm:w-1/2" />
          )}

          {nextProject && (
            <Link href={`/projects/${nextProject.slug}`} className="group flex w-full flex-col text-right sm:w-1/2">
              <span className="mb-2 text-sm font-medium text-[var(--color-muted)]">Next Project</span>
              <div className="flex items-center justify-end gap-3 text-xl font-bold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                {nextProject.title}
                <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          )}
        </div>
      </Container>
    </article>
  );
}