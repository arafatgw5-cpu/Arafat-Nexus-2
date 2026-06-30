<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";
=======
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
<<<<<<< HEAD
import ContactPage from "./contact/page";
import ServicesPage from "./services/page";
import ProjectSlider from "./projects/page";
import AnimatedSection from "@/components/AnimatedSection";
=======
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972

export default function Home() {
  return (
    <div>
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
<<<<<<< HEAD
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start"
        >
          {/* Titles Section */}
          <div>
            <h3 style={{ color: "var(--color-text-sec)" }} className="font-semibold tracking-wider mb-1">
              Frontend & Full Stack Developer
            </h3>
            <h2 style={{ color: "var(--color-text)" }} className="text-3xl md:text-5xl mb-2">
              Hello I&apos;m
            </h2>
            <h1 style={{ color: "var(--color-primary)" }} className="text-5xl md:text-7xl font-bold tracking-normal transition-colors duration-300">
              Easin Arafat
            </h1>
          </div>

=======
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold text-white/70 tracking-wider mb-1">
              Frontend & Full Stack Developer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2">Hello I&apos;m</h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">
              Easin Arafat
            </h1>
          </div>
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
          <div className="w-full h-[170px] md:h-[140px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescription />
            </div>
          </div>
<<<<<<< HEAD

          <Button
            className="bg-transparent rounded-full border border-[var(--color-primary)] text-[var(--color-primary)]
                       hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] hover:shadow-[var(--color-glow)]
                       transition-all duration-300"
            asChild
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2">
              Download CV <Download className="w-4 h-4" />
            </Link>
          </Button>

          <SocialLinks />
          <Statistics />
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Photo />
        </motion.div>
      </Container>

      <AnimatedSection>
        <ServicesPage />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ProjectSlider />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContactPage />
      </AnimatedSection>
    </div>
  );
}
=======
          <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect" asChild>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              Download cv <Download />
            </Link>
          </Button>
          <SocialLinks />
          <Statistics />
        </div>
        <Photo />
      </Container>
      
    </div>
  );
}
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
