import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const socialData = [
  {
    title: "Youtube",
    icon: Youtube,
    link: "https://www.youtube.com/@gwarafat4276",
  },
  {
    title: "Github",
    icon: Github,
    link: "https://github.com/arafatgw5-cpu",
  },
  {
    title: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/easin-arafat-gw5",
  },
  {
    title: "Facebook",
    icon: Facebook,
    link: "https://www.facebook.com/easin.arafat.792602",
  },
  {
    title: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/moham_mad_arafat_",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialData.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
            className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-lightSky/30 bg-white/5 text-lightSky/80 transition-all duration-300 hover:-translate-y-1 hover:border-lightSky hover:bg-lightSky/10 hover:text-lightSky hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
          >
            <span className="absolute inset-0 scale-0 rounded-full bg-lightSky/10 transition-transform duration-300 group-hover:scale-100" />

            <Icon className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;

