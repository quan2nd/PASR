/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Price Action at Support & Resistance',
  tagline: 'Hành động giá tại Hỗ trợ & Kháng cự',
  url: 'https://maxcda101.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'maxcda101', // Usually your GitHub org/user name.
  projectName: 'maxcda101.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PASR',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: '/img/logo.svg',
      // },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'PASR Cơ bản',
        },
        {to: '/blog', label: 'Strat Blog', position: 'left'},
        {
          href: 'https://github.com/maxcda101/PASR',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/554792309237663',
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
              href: 'https://github.com/maxcda101/pasr',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/maxcda101/PASR/edit/master/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/maxcda101/PASR/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
