module.exports = {
  title: "Oraichain Whitepaper",
  tagline: "Oracle Artificial Intelligence for Blockchain",
  url: "https://orai.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "oraichain",
  projectName: "docs-site",
  themeConfig: {
    navbar: {
      title: "Oraichain",
      logo: {
        alt: "Oraichain Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          to: "docs/whitepaper/introduction/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // {to: 'blog', label: 'Blog', position: 'left'}
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Oraichain Website",
              href: "https://orai.io",
            },
            {
              label: "Yield Farming",
              href: "https://yai.finance",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/oraichain_official",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/oraichain",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/oraichain",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://orai.io">Oraichain Pte. Ltd.</a>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "Introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
