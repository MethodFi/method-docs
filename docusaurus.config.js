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
  favicon: 'https://static.methodfi.com/brand/favicon.png',
  organizationName: 'MethodFi',
  projectName: 'method-docs',
  scripts: [
    '/js/index.js',
    'https://tag.clearbitscripts.com/v1/pk_98f804caad882c280e5682dae1e0c92f/tags.js',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MethodFi/method-docs/tree/release',
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
        hideOnScroll: false,
        logo: {
          href: '/guides',
          alt: 'Method Logo',
          src: 'https://static.methodfi.com/assets/method-logo.png',
          srcDark: 'https://static.methodfi.com/brand/logo-horizontal-vibrantgreen-white.png',
        },
        items: [
          // { label: 'Home', position: 'left', to: '/', activeBaseRegex: `^/$` },
          { label: 'Guides', position: 'left', to: '/guides', activeBaseRegex: `/guides` },
          { label: 'API Reference', position: 'left', to: '/api', activeBaseRegex: `/api` },
          { label: 'Libraries', position: 'left', to: '/libraries', activeBaseRegex: `/libraries` },
          { label: 'Changelog', position: 'left', to: '/changelog', activeBaseRegex: `/changelog` },
          // { label: 'Blog', position: 'left', to: 'blog', activeBaseRegex: `/blog` },
          { label: 'Sign In', position: 'right', href: 'https://dashboard.methodfi.com' },
        ],
      },
      // footer: {
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         // { label: 'Home', to: '/' },
      //         // { label: 'Guides', to: '/guides' },
      //         { label: 'API Reference', to: '/api' },
      //         { label: 'Libraries', to: '/libraries' },
      //         { label: 'Changelog', to: '/changelog' },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Method Financial.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
