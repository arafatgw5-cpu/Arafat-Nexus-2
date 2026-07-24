"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
// import Photo from "@/components/Photo";
// import Photo from "@/components/EnhancedPhoto";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import ContactPage from "./contact/page";
import ServicesPage from "./services/page";
import ProjectSlider from "./projects/page";
import AnimatedSection from "@/components/AnimatedSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/Educationsection";

// Parent container - stagger controls kokhon children animate hobe
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Child items - fade + slide up
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div>
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start"
        >
          {/* Titles Section */}
          <motion.div variants={itemVariants}>
            <h3
              style={{ color: "var(--color-text-sec)" }}
              className="font-semibold tracking-wider mb-1"
            >
              Frontend & Full Stack Developer
            </h3>
            <h2
              style={{ color: "var(--color-text)" }}
              className="text-3xl md:text-5xl mb-2"
            >
              Hello I&apos;m
            </h2>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              style={{ color: "var(--color-primary)" }}
              className="text-5xl md:text-7xl font-bold tracking-normal transition-colors duration-300"
            >
              Easin Arafat
            </motion.h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full h-[170px] md:h-[140px] relative"
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescription />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              className="bg-transparent rounded-full border border-[var(--color-primary)] text-[var(--color-primary)]
                         hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] hover:shadow-[var(--color-glow)]
                         transition-all duration-300"
              asChild
            >
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2"
              >
                Download CV <Download className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <SocialLinks />
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <Statistics />
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <Photo />
        </motion.div>
      </Container>

      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection>
        <EducationSection />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
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