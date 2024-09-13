import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
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
        text: "CS Basics",
        collapsed: false,
        link: "/src/cs/intro",
        items: [
          {
            text: "General Concepts",
            collapsed: false,
            items: [
              { text: "Operating Systems", link: "/src/cs/general/os" },
              {
                text: "Compilers and Interpreters",
                link: "/src/cs/general/compilers",
              },
              { text: "Memory", link: "/src/cs/general/memories" },
              { text: "Memory Management", link: "/src/cs/general/mem_mgmt" },
              { text: "Database Systems", link: "/src/cs/general/database" },
              {
                text: "high performance compting",
                link: "/src/cs/general/hpc",
              },
              {
                text: "System Programming",
                link: "/src/cs/general/sys_prog",
              },
            ],
          },
          {
            text: "Distributed Systems",
            collapsed: false,
            items: [
              {
                text: "Distributed Systems",
                link: "/src/cs/dist_sys/systems",
              },
              {
                text: "Distributed Computing",
                link: "/src/cs/dist_sys/computing",
              },
              {
                text: "Distributed Networks",
                link: "/src/cs/dist_sys/networking",
              },
            ],
          },
          {
            text: "Data Structure and ALgorithms ",
            collapsed: false,
            items: [
              {
                text: "Data Structures",
                link: "/src/cs/dsa/ds",
              },
              {
                text: "Algorithms",
                link: "/src/cs/dsa/algorithms",
              },
            ],
          },
          {
            text: "Design Patterns",
            collapsed: false,
            link: "/src/cs/dp/intro",

            items: [
              {
                text: "Creational",
                collapsed: false,
                items: [
                  {
                    text: "Singleton",
                    link: "/src/cs/dp/creational/singleton",
                  },
                  {
                    text: "Prototype",
                    link: "/src/cs/dp/creational/prototype",
                  },
                  {
                    text: "Builder",
                    link: "/src/cs/dp/creational/builder",
                  },
                  {
                    text: "Factory",
                    link: "/src/cs/dp/creational/factory",
                  },
                ],
              },
              {
                text: "Structural",
                collapsed: false,
                items: [
                  {
                    text: "Facade",
                    link: "/src/cs/dp/structural/facade",
                  },
                  {
                    text: "Proxy",
                    link: "/src/cs/dp/structural/proxy",
                  },
                ],
              },
              {
                text: "Behavioral",
                collapsed: false,
                items: [
                  {
                    text: "Iterator",
                    link: "/src/cs/dp/behavioral/iterator",
                  },
                  {
                    text: "observer",
                    link: "/src/cs/dp/behavioral/observer",
                  },
                  {
                    text: "mediator",
                    link: "/src/cs/dp/behavioral/mediator",
                  },
                  {
                    text: "state",
                    link: "/src/cs/dp/behavioral/state",
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        text: "Rust Techniques",
        link: "/src/rust/intro",
        items: [
          {
            text: "Rust Techniques",
            link: "/src/rust/async",
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
