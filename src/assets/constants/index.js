import { meta, shopify, starbucks, tesla } from "../images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../icons";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },

  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: sass,
    name: "Three.JS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    company_name: "Software Developer (L2)",
    title: "Invia",
    icon: starbucks,
    iconBg: "#0000FF",
    date: "June 2024 - Present",
    points: [
      "Developing and maintaining mobile applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Ensured responsive design and smooth performance on both Android and iOS.",
      "Participated in code reviews and contributed to improving code quality.",
    ],
  },
  {
    company_name: "React Native Developer",
    title: "OTS Solutions",
    icon: tesla,
    iconBg: "#000",
    date: "December 2022 - May 2024",
    points: [
      "Designing, developing, and maintaining cross-platform mobile applications using React Native, along with associated tools and libraries like Redux, React Navigation, and Firebase.",
      "Collaborating with cross-functional teams including UI/UX designers, product managers, and backend developers to build scalable and user-centric mobile experiences.",
      "Implementing responsive UI designs and ensuring compatibility across both Android and iOS platforms, while optimizing performance and memory usage.",
      "Participating in code reviews, debugging, and performance tuning, while following best practices in code quality, version control (Git), and agile methodologies.",
    ],
  },
  {
    company_name: "React Native Developer",
    title: "Webmobril",
    icon: shopify,
    iconBg: "#6EC1E4",
    date: "April 2022 - November 2023",
    points: [
      "Developing and maintaining Mobile Application in React Native",
      "Collaborating with cross-functional teams including Backend Developer, Designers, and other developers to create high-quality products.",
      "Used Redux, Firebase, Third Party Libraries, RestAPIs and other tools",
    ],
  },
  {
    company_name: "React Native Developer",
    title: "Future World Digital",
    icon: meta,
    iconBg: "#fff",
    date: "Feb 2021 - Feb 2022",
    points: [
      "Developed cross-platform mobile apps using React Native, Redux, and React Navigation.",
      "Integrated backend services using REST APIs, Firebase, and Axios for real-time data handling.",
      "Ensured smooth UI/UX with responsive designs, animations, and third-party libraries like Lottie and Reanimated.",
      "Managed app state efficiently with Redux Toolkit, and maintained clean, scalable code with TypeScript and ESLint.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "AIS e-Biz KYC",
    description:
      "Get a complete overview of your AIS Business KYC (Know Your Customer) account, including active, recent, and historical verifications. Biometric verification Liveness and Face Match technology is used to eliminate fake identities and deepfakes. ID verification, Currently supports Thai ID Card, Thai Passport and International Passport. Additional ID documents will be supported in the near future.",
    link: "https://play.google.com/store/apps/details?id=th.co.mimotech.android.ebizkyc",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "SeaPeople: Boat, Fish, Sail",
    description:
      "SeaPeople makes GPS boat tracking social. We house your entire marine journey in one spot – whether you're sailing, boating, or on a yacht, and you get to share it with your social network. Enhance your real-world moments & social connections while growing your network of friends around the world. All water connects; we are all sea people.",
    link: "https://play.google.com/store/apps/details?id=com.seapeopleapp.seapeople",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Optus My Fleet Manager",
    description:
      "Get a full overview for all of your Optus Enterprise mobile services. Keep Eye on your Usages, what you are being charged for, control your services.",
    link: "https://play.google.com/store/apps/details?id=au.com.optus.mfm",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "GlamCode- Luxury Salon at Homegl",
    description:
      "Glamcode is India's fastest-growing at-home salon, parlor at home, and beauty booking app. Thousands of users trust Glamcode. With our highest-rated salon booking app, we create beautiful experiences in 6+ cities across India. We are presently serving in Lucknow, Noida, Greater Noida, Gurugram / Gurgaon, Delhi, and Ghaziabad. We are committed to delivering luxury salon services at your doorstep at affordable prices.",
    link: "https://play.google.com/store/apps/details?id=com.glamcode.app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Ittzy",
    description:
      "Ittzy - Stay Informed, Stay Connected Discover what's happening in your city, explore local trends, and share your stories. Local Marketplace: Ittzy also serves as a marketplace for promoting local businesses. Post offers or browse deals in your city across various categories based on your location.",
    link: "https://play.google.com/store/apps/details?id=com.ittzyapp.app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Three.JS Portfolio",
    description:
      "An interactive 3D portfolio using Three.js and React to showcase my skills and projects in a visually engaging way. The site features smooth animations, 3D models, and a responsive design for a modern user experience.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
