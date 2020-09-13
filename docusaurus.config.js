module.exports = {
  title: 'Oraichain',
  tagline: 'Oracle Artificial Intelligence for Blockchain',
  url: 'https://orai.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'oraichain',
  projectName: 'docs-site',
  themeConfig: {
    navbar: {
      title: 'Oraichain',
      logo: {
        alt: 'Oraichain Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'}
      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/oraichain_official',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/oraichain',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/oraichain',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Oraichain.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'Introduction',
          sidebarPath: require.resolve('./sidebars.js'),
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
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
