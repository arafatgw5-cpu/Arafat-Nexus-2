export const projects = [
  {
    id: "01",
    slug: "scic-ai-resume-builder",
    title: "SCIC AI Resume Builder",
    category: "Full Stack",
    description:
      "An AI-powered Resume Builder that enables users to create, edit, preview, and download professional resumes. Includes secure authentication, resume management dashboard, AI-assisted content generation, and responsive modern UI.",
    stack: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Better Auth", "Tailwind CSS", "AI Integration"],
    image: "/scic.png",
    gallery: ["/scic.png"],
    liveUrl: "https://scic-ass-frontend.vercel.app/",
    githubUrl: "https://github.com/arafatgw5-cpu/Scic-assignment-Frontend",
    overview: "SCIC AI Resume Builder was engineered to solve the complex process of formatting and writing professional resumes. By leveraging AI, it helps users generate impactful bullet points tailored to specific job descriptions, streamlining the job application process.",
    features: [
      "AI Content Generation via OpenAI",
      "Real-time Preview & PDF Export",
      "Secure Role-based Authentication",
      "Dynamic Resume Management Dashboard",
      "Customizable Premium Templates"
    ],
    challenges: [
      {
        title: "Complex State Management",
        problem: "Managing deeply nested resume data (experience, education, skills) while ensuring real-time UI updates without performance degradation.",
        solution: "Implemented efficient state management, allowing isolated re-renders and smooth typing experiences."
      },
      {
        title: "AI Integration Latency",
        problem: "Users experienced delays while waiting for the AI to generate resume content.",
        solution: "Utilized Next.js Edge Functions and streaming responses to display text progressively as it generates."
      }
    ],
    future: ["LinkedIn Profile Import", "Cover Letter Generator", "More Premium Templates", "Dark Mode Support"],
    stats: { time: "4 Weeks", pages: "15+", components: "40+", performance: "98/100" },
    info: { role: "Lead Full Stack Developer", team: "Solo", platform: "Web Application", database: "MongoDB" }
  },
  {
    id: "02",
    slug: "orrderlo",
    title: "Orrderlo",
    category: "Full Stack",
    description:
      "A modern restaurant management platform with role-based authentication (Customer, Waiter, Manager), table reservation, food ordering, order tracking, dashboard management, and responsive premium UI built with Next.js and Express.js.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB", "JWT", "TanStack Query"],
    image: "/orrderlo.png",
    gallery: ["/orrderlo.png"],
    liveUrl: "https://task-989.vercel.app",
    githubUrl: "https://github.com/arafatgw5-cpu/Orrderlo-FFF",
    overview: "Orrderlo modernizes restaurant operations by bridging the gap between customers, waitstaff, and management. It provides a synchronized ecosystem where orders flow seamlessly from table to kitchen, tracked via real-time dashboards.",
    features: [
      "Multi-tier Role-Based Access Control",
      "Real-time Order Tracking",
      "Table Reservation System",
      "Comprehensive Manager Dashboard",
      "Inventory & Menu Management"
    ],
    challenges: [
      {
        title: "Real-time Synchronization",
        problem: "Ensuring waiters and kitchen staff see order updates instantly without manual page refreshes.",
        solution: "Integrated TanStack Query with optimistic updates and WebSocket connections for instant state synchronization."
      }
    ],
    future: ["POS Hardware Integration", "Automated Inventory Alerts", "Mobile App for Waiters", "Advanced Analytics Reports"],
    stats: { time: "6 Weeks", pages: "20+", components: "55+", performance: "95/100" },
    info: { role: "Full Stack Developer", team: "Solo", platform: "B2B SaaS", database: "MongoDB" }
  },
  {
    id: "03",
    slug: "ticket-bari",
    title: "Ticket Bari",
    category: "Full Stack",
    description:
      "A modern online ticket booking platform with role-based dashboards (User, Vendor, Admin), secure Stripe payment integration, and real-time ticket management.",
    stack: ["Next.js", "Stripe", "TanStack Query", "Node.js", "MongoDB"],
    image: "/ticketbari.png",
    gallery: ["/ticketbari.png"],
    liveUrl: "https://a-fff.vercel.app",
    githubUrl: "https://github.com/arafatgw5-cpu/Ticket-Booking-Platform-FFF",
    overview: "Ticket Bari is designed to handle high-concurrency ticket sales for events. It offers a secure, scalable platform where vendors can manage events and users can purchase tickets seamlessly with automated digital delivery.",
    features: [
      "Secure Stripe Payment Processing",
      "Vendor Event Management Dashboard",
      "Automated QR Code Ticket Generation",
      "Admin Analytics & Revenue Tracking",
      "Real-time Seat Availability"
    ],
    challenges: [
      {
        title: "Payment Webhooks Reliability",
        problem: "Ensuring tickets are only generated after successful Stripe payment confirmation, even during network drops.",
        solution: "Implemented robust Stripe Webhooks with a dead-letter queue system to ensure 100% transaction consistency."
      }
    ],
    future: ["Seat Selection Map", "Mobile Ticket Wallet Integration", "Secondary Resale Market", "Promoter Affiliate Links"],
    stats: { time: "5 Weeks", pages: "18+", components: "35+", performance: "99/100" },
    info: { role: "Full Stack Developer", team: "Solo", platform: "E-Commerce", database: "MongoDB" }
  }
];