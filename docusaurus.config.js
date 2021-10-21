// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Method Docs',
  tagline: 'Explore guides, examples, and libraries to integrate Method.',
  url: 'https://docs.methodfi.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'MethodFi',
  projectName: 'method-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MethodFi/method-docs',
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
      hideableSidebar: true,
      colorMode: {
        disableSwitch: true,
        defaultMode: 'dark',
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          href: '/api',
          alt: 'Method Logo',
          src: 'https://static.methodfi.com/assets/method-logo.png',
          srcDark: 'https://static.methodfi.com/assets/method-logo-white.png',
        },
        items: [
          // { label: 'Home', position: 'left', to: '/', activeBaseRegex: `^/$` },
          // { label: 'Guides', position: 'left', to: '/guides', activeBaseRegex: `/guides` },
          { label: 'API Reference', position: 'left', to: '/api', activeBaseRegex: `/api` },
          { label: 'Libraries', position: 'left', to: '/libraries', activeBaseRegex: `/libraries` },
          { label: 'Changelog', position: 'left', to: '/changelog', activeBaseRegex: `/changelog` },
          // { label: 'Blog', position: 'left', to: 'blog', activeBaseRegex: `/blog` },
          { label: 'Sign In', position: 'right', href: 'https://dashboard.methodfi.com' },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              // { label: 'Home', to: '/' },
              // { label: 'Guides', to: '/guides' },
              { label: 'API Reference', to: '/api' },
              { label: 'Libraries', to: '/libraries' },
              { label: 'Changelog', to: '/changelog' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Method Financial.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
