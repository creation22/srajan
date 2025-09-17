import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Srajan Gupta",
  initials: "Sg",
  url: "https://ibb.co/jkTDD1p4",
  location: "Prayagraj, UP",
  locationLink: "https://www.google.com/maps/place/prayagraj",
  description:
    "I love creating impactful software and helping people along the way. Very active on Twitter.",
  summary: `At the end of 2024, I shifted my focus from a traditional software engineering path to go full-time into building and experimenting with my own web projects and SaaS ideas. In the past, I learned full-stack development with React, Node.js, and MongoDB, built multiple projects ranging from Chrome extensions to web apps, and participated in hackathons and coding challenges to sharpen my problem-solving skills. I also enjoy being part of online tech communities like Twitter and buildspace, where I share progress, learn, and connect with other builders.`,
  avatarUrl: "/me.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Sass",
    "Redux",
    "Zustand",
    "Context API",
    "Node.js",
    "Express.js",
    "FastAPI",
    "REST API",
    "GraphQL",
    "JWT",
    "OAuth",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "TypeORM",
    "Mongoose",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "C++",
    "C"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "creation2224@gmail.com",
    tel: "9170772737",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/creation22",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ssrajangupta22/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_Creation22",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@srajangupta3409",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:creation2224@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "United College of Engineering and Reseach",
      href: "https://www.united.ac.in/ucer/",
      degree: "Bachelor of Technology",
      logoUrl: "/college.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Bakshi Memorial Public School",
      href: "https://bmps.org.in/",
      degree: "Higher Secondary",
      logoUrl: "/scool.png",
      start: "2020",
      end: "2022",
    }
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "WorkPing",
      href: "https://workping.vercel.app",
      dates: "September 2024",
      active: true,
      description:
        "WorkPing is a Chrome extension that helps you stay focused by sending smart reminders and notifying your loved ones when you’re working.",
      technologies: [
        "React",
        "Javascript",
        "Mongoose",
        "TailwindCSS",
        "Nodejs",
        "MongoDb" ,
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://workping.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "DreamHer",
      href: "https://dreamher.vercel.app",
      dates: "  March 2025",
      active: true,
      description:
        "DreamHer is an AI-powered image generation project where users answer 10 fun, personalized questions and instantly get a clean, visually stunning image of their dream girl—bringing imagination to life through technology.",
      technologies: [
        "React",
        "Javascript",
        "Pollination Ai" , 
    
        "TailwindCSS",
      
        "Shadcn UI",
      
      ],
      links: [
        {
          type: "Website",
          href: "https://dreamher.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "TimeCapsuleMail",
      href: "https://timecapsulemail.space",
      dates: " June 2025",
      active: true,
      description:
        "TimeCapsuleMail is a unique mailing service that lets users write messages today and schedule them to be delivered in the future, creating digital time capsules for memories, reminders, or heartfelt notes that arrive exactly when they matter most.",
      technologies: [
        "React",
        "Javascript",
        "Resend",
        "Gmail" ,
        "Aceternity Ui" , 
    
        "TailwindCSS",
      
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "SaySorry",
      href: "https://saysorry.vercel.app",
      dates: " March 2025",
      active: true,
      description:
        "SaySorry is an AI-powered apology generator that helps users turn their thoughts into heartfelt apology letters making it easier to express regret, rebuild trust, and strengthen relationships with just a few clicks.",
      technologies: [
        "React js",
        "Javascript",
        
        "Pollination Ai",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Vercel" 
      ],
      links: [
        {
          type: "Website",
          href: "https://saysorry.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    
    
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
