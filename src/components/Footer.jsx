import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Container from "@/components/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-primary)]/20 bg-[var(--color-bg)] py-12 text-[var(--color-text)]">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">
              Portfolio
            </h2>
            <p className="text-sm leading-relaxed opacity-80">
              Building modern, accessible, and user-centric digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-text)]">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {["Home", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="transition-colors hover:text-[var(--color-primary)]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-text)]">Contact</h3>
            <div className="flex items-center gap-2 text-sm opacity-80 transition-colors hover:text-[var(--color-primary)]">
              <Mail className="h-4 w-4" />
              <span>arafat@example.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-text)]">Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/arafatgw5-cpu" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/easin-arafat-gw5" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 transition-all hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/20"
                >
                  <social.icon className="h-5 w-5 text-[var(--color-primary)]" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[var(--color-primary)]/10 pt-8 text-center text-sm opacity-60">
          <p>© {currentYear} Easin Arafat. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;