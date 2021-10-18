// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Method Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'methodfi', // Usually your GitHub org/user name.
  projectName: 'octo', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'X1Z85QJPUV',
        apiKey: 'bf7211c161e8205da2f933a02534105a',
        indexName: 'docusaurus-2',
        contextualSearch: true,
      },
      hideableSidebar: true,
      colorMode: {
        disableSwitch: true,
        defaultMode: 'dark',
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Method Logo',
          src: 'https://static.methodfi.com/assets/method-logo.png',
          srcDark: 'https://static.methodfi.com/assets/method-logo-white.png',
        },
        items: [
          { label: 'Home', position: 'left', href: '/', activeBaseRegex: `/` },
          { label: 'Guides', position: 'left', to: 'docs/guides/index', activeBaseRegex: `/guides/` },
          { label: 'API Reference', position: 'left', to: 'docs/api/index', activeBaseRegex: `/api/` },
          { label: 'SDKs', position: 'left', to: 'docs/api/index', activeBaseRegex: `/sdks/` },
          { label: 'Blog', position: 'left', to: 'blog', activeBaseRegex: `/blog` },
          { label: 'Changelog', position: 'left', to: 'docs/changelog', activeBaseRegex: `/changelog` },
          { label: 'GitHub', position: 'right', href: 'https://github.com/facebook/docusaurus' },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/guides',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
