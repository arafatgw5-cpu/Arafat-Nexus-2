"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { servicesData } from "@/constants";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <section 
      style={{ color: "var(--color-text)" }} 
      className="min-h-[80vh] flex flex-col justify-center py-5 md:py-10"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          <Title>Services I Provide</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
            {servicesData?.map((item) => (
              <div
                key={item?._id}
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
                className="flex flex-col p-6 border rounded-lg shadow-md group 
                           transition-all duration-300 gap-2
                           hover:border-[var(--color-primary)] hover:shadow-[var(--color-glow)]"
              >
                <div className="w-full flex items-center justify-between">
                  {/* Big Number/ID with Theme Hover effect */}
                  <p className="text-5xl font-extrabold text-outline text-transparent 
                                group-hover:text-[var(--color-primary)] transition-all duration-300">
                    {item?._id}
                  </p>
                  
                  {/* Arrow Link with Theme Color */}
                  <Link 
                    href={item?.href}
                    style={{ color: "var(--color-text-sec)" }}
                    className="hover:text-[var(--color-primary)] transition-colors duration-300"
                  >
                    <ArrowUp className="rotate-45" />
                  </Link>
                </div>

                {/* Title */}
                <h2 style={{ color: "var(--color-text)" }} className="font-semibold text-lg md:text-xl">
                  {item?.title}
                </h2>

                {/* Description */}
                <p style={{ color: "var(--color-text-sec)" }} className="text-sm md:text-base leading-relaxed">
                  {item?.description}
                </p>

                {/* Bottom Divider Line */}
                <div 
                  style={{ borderBottom: "1px solid var(--color-border)" }} 
                  className="w-full mt-2 opacity-60" 
                />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesPage;
