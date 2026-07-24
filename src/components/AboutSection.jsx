"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";
import Title from "./Title";
import { User, Code2, GraduationCap, MapPin, Coffee } from "lucide-react";

const aboutData = [
  {
    icon: User,
    title: "Who am I?",
    description:
      "I'm a passionate web developer driven by curiosity and a love for creating interactive, accessible digital experiences. I find immense joy in turning complex logic into simple, intuitive, and beautiful interfaces.",
  },
  {
    icon: Code2,
    title: "What I do?",
    description:
      "I specialize in modern Full-stack development using React, Next.js, and Tailwind CSS. I enjoy bridging the gap between engineering and design, building everything from seamless front-end UIs to robust back-end systems.",
  },
  {
    icon: GraduationCap,
    title: "My Journey",
    description:
      "My programming journey began with a simple curiosity about how the web works. Over the past year of intense, hands-on learning, I've shipped multiple real-world projects and constantly challenge myself to master new tools.",
  },
  {
    icon: MapPin,
    title: "Location",
    description:
      "Proudly based in Bangladesh, yet globally connected. I'm readily available for remote work, freelance opportunities, and open-source collaborations with developers and teams worldwide.",
  },
  {
    icon: Coffee,
    title: "Beyond Coding",
    description:
      "Life isn't just about code! I love exploring new technologies, listening to great music while building side projects, and traveling to new places. Balancing screen time with family and real-world exploration keeps my problem-solving sharp.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutSection = () => {
  return (
    <section
      aria-label="About me"
      className="py-10 md:py-20"
      style={{ color: "var(--color-text)" }}
    >
      <Container>
        <Title>About Me</Title>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-8 items-start">
          {/* ---------- LEFT: Profile Image ---------- */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-center"
          >
            <div
              className="relative group w-full max-w-sm rounded-2xl overflow-hidden border shadow-lg
                          transition-shadow duration-300 hover:shadow-[var(--color-glow)]"
              style={{ borderColor: "var(--color-border)" }}
            >
              {/* Inner accent ring (fades in on hover) */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-2 ring-inset
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "var(--color-primary)" }}
              />

              {/* Top-left corner accent */}
              <span
                aria-hidden="true"
                className="absolute top-3 left-3 z-20 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg
                           opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: "var(--color-primary)" }}
              />
              {/* Bottom-right corner accent */}
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 z-20 w-8 h-8 border-b-2 border-r-2 rounded-br-lg
                           opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: "var(--color-primary)" }}
              />

              {/* Portrait image — keeps 2:3 aspect ratio, no crop */}
              <div className="relative aspect-[2/3] w-full">
                <Image
                  src="/about.jpeg"         /* <-- তোমার image path বসাও */
                  alt="Portrait of the developer"
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  priority
                  className="object-cover object-top
                             transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom gradient blends image into theme bg */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, var(--color-bg) 5%, transparent 90%)",
                }}
              />
            </div>

            {/* Caption under image */}
            <div className="mt-5 text-center">
              <p
                className="text-base md:text-lg font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                Frontend & Full-Stack Developer
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--color-text-sec)" }}
              >
                Available for freelance & remote work
              </p>
            </div>
          </motion.div>

          {/* ---------- RIGHT: About Cards ---------- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
          >
            {aboutData.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
                className="relative overflow-hidden flex flex-col gap-3 p-5 md:p-6 border rounded-xl shadow-md group
                           transition-[border-color,box-shadow] duration-300
                           hover:border-[var(--color-primary)] hover:shadow-[var(--color-glow)]"
              >
                {/* Top accent line */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left
                             transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "var(--color-primary)" }}
                />

                {/* Icon */}
                <div
                  aria-hidden="true"
                  className="flex-shrink-0 w-fit p-3 rounded-lg
                             transition-all duration-300
                             group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-bg)]
                             group-hover:scale-110 group-hover:-rotate-3"
                  style={{
                    background: "var(--color-bg)",
                    color: "var(--color-primary)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                    {title}
                  </h3>
                  <p
                    style={{ color: "var(--color-text-sec)" }}
                    className="text-sm md:text-[15px] leading-relaxed"
                  >
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;