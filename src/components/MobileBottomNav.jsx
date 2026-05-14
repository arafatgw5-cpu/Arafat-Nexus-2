"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const IconHome = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3V10.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const IconServices = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path
      d="M8 8h8M8 12h8M8 16h5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="3"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const IconProjects = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="3"
      y="6"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M3 11h18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconResume = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path
      d="M7 3h7l4 4v14H7V3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M14 3v5h4M9 13h6M9 17h4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const mobileNavData = [
  {
    title: "Home",
    link: "/",
    icon: <IconHome />,
  },
  {
    title: "Services",
    link: "/services",
    icon: <IconServices />,
  },
  {
    title: "Projects",
    link: "/projects",
    icon: <IconProjects />,
  },
  {
    title: "Resume",
    link: "/resume",
    icon: <IconResume />,
  },
];

const MobileBottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[82%] max-w-[260px] -translate-x-1/2 md:hidden">
      <div className="flex h-[38px] items-center justify-between rounded-full bg-[#d9d9d9] px-[6px] shadow-2xl backdrop-blur-md">
        {mobileNavData.map((item) => {
          const isActive = pathname === item.link;

          return (
            <Link
              key={item.title}
              href={item.link}
              aria-label={item.title}
              className={`flex h-[28px] w-[28px] items-center justify-center rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-black text-white"
                  : "text-[#555] hover:bg-black hover:text-white"
              }`}
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;