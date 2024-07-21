import {
  ConsultlyLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "李辉 Eric",
  initials: "LH",
  location: "Beijing, China",
  locationLink: "https://www.google.com/maps/place/Beijing",
  about:
    "正在成为一名全栈工程师的 Java 开发工程师。",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide.",
  avatarUrl: "https://avatars.githubusercontent.com/u/36818242?v=4",
  personalWebsiteUrl: "https://lihui.net",
  contact: {
    email: "me@lihui.net",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/lhui",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lhui/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/tcpgnl",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "中国石油大学（北京）",
      degree: "计算机科学与技术",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Thoughtworks",
      link: "https://www.thoughtworks.com/",
      badges: ["Remote"],
      title: "软件开发工程师",
      logo: ConsultlyLogo,
      start: "2021",
      end: null,
      description:
        "在 Thoughtworks 主要做后端软件开发，使用 Java 和 Spring Boot。",
    }
  ],
  skills: [
    "Java",
    "Spring Boot",
  ],
  projects: [
    {
      title: "Thoughtworks code review tools",
      techStack: [
        "Java"
      ],
      description:
        "更新 Thoughtworks 的代码审查工具， 为软件的代码审查提供支持。",
      logo: ParabolLogo,
      link: {
        href: "https://plugins.jetbrains.com/plugin/17968-thoughtworks-code-review-tools",
      },
    },
  ],
} as const;
