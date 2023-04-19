// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Form',
  url: 'https://react-form.pages.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'open-tech-foundation', // Usually your GitHub org/user name.
  projectName: 'react-form', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/open-tech-foundation/react-form',
          sidebarCollapsed: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-DS7F7ZCPS5',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'React Form',
        items: [
          {
            href: 'https://github.com/open-tech-foundation/react-form',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            html: `⚡ by <a href="https://open-tech-foundation.pages.dev">Open Tech World</a>`,
          },
          {
            html: `📝 with <a href="https://docusaurus.io/">Docusaurus</a>`,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Contributors of <a href="https://github.com/open-tech-foundation/react-form">@opentf/react-form</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
