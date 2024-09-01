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
      { text: "Introduction", link: "/src/intro" },
      {
        text: "General Concepts",
        collapsed: false,
        items: [
          { text: "Operating Systems", link: "/src/general/os" },
          {
            text: "Compilers and Interpreters",
            link: "/src/general/compilers",
          },
          { text: "Memory", link: "/src/general/memories" },
          { text: "Memory Management", link: "/src/general/mem_mgmt" },
          { text: "Database Systems", link: "/src/general/database" },
          {
            text: "high performance compting",
            link: "/src/general/hpc",
          },
          {
            text: "System Programming",
            link: "/src/general/sys_prog",
          },
        ],
      },
      {
        text: "Distributed Systems",
        collapsed: false,
        items: [
          {
            text: "Distributed Systems",
            link: "/src/dist_sys/systems",
          },
          {
            text: "Distributed Computing",
            link: "/src/dist_sys/computing",
          },
          {
            text: "Distributed Networks",
            link: "/src/dist_sys/networking",
          },
        ],
      },
      {
        text: "Data Structure and ALgorithms ",
        collapsed: false,
        items: [
          {
            text: "Data Structures",
            link: "/src/dsa/ds",
          },
          {
            text: "Algorithms",
            link: "/src/dsa/algorithms",
          },
        ],
      },
      {
        text: "Design Patterns",
        collapsed: false,
        link: "/src/dp/intro",

        items: [
          {
            text: "Creational",
            collapsed: false,
            items: [
              {
                text: "Singleton",
                link: "/src/dp/creational/singleton",
              },
              {
                text: "Prototype",
                link: "/src/dp/creational/prototype",
              },
              {
                text: "Builder",
                link: "/src/dp/creational/builder",
              },
              {
                text: "Factory",
                link: "/src/dp/creational/factory",
              },
            ],
            
          },
          {
            text: "Structural",
            collapsed: false,
            items: [
              {
                text: "Facade",
                link: "/src/dp/structural/facade",
              },
              {
                text: "Proxy",
                link: "/src/dp/structural/proxy",
              },
            ],
            
          },
          {
            text: "Behavioral",
            collapsed: false,
            items: [
              {
                text: "Iterator",
                link: "/src/dp/behavioral/iterator",
              },
              {
                text: "db",
                link: "/src/dp/behavioral/observer",
              },
            ],
            
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
