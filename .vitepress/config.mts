import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Computer Science Basics",
  description:
    "A basic explanation of the CS basics for those who haven't gone to college.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Feedback", link: "https://t.me/javad_yakuzaa" },
    ],
    sidebar: [
      {
        text: "General Concepts",
        collapsed: false,
        items: [
          { text: "Operating Systems", link: "/src/General/os" },
          {
            text: "Compilers and Interpreters",
            link: "/src/General/compilers_and_interpreters",
          },
          { text: "Memory", link: "/src/General/memories" },
          { text: "Memory Management", link: "/src/General/memory_management" },
          { text: "Database Systems", link: "/src/General/database_systems" },
          {
            text: "high performance compting",
            link: "/src/General/high_performance_computing",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Javadyakuza/ComputerScienceBasics",
      },
    ],
  },
});
