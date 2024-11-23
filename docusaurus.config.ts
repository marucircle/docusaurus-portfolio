import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type { Options as DocsOptions } from '@docusaurus/plugin-content-docs'
import type * as Preset from '@docusaurus/preset-classic'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'まる家',
  tagline: 'まるのポートフォリオ兼個人サイト',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: process.env.DOMAIN,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'marucircle', // Usually your GitHub org/user name.
  projectName: 'docusaurus-portfolio', // Usually your repo name.
  
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  plugins: [
    [
      'content-docs',
      {
        id: 'artifact', //成果物載せるところのイメージ
        path: 'artifact',
        routeBasePath: 'artifact',
        sidebarPath: './sidebars.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    'docusaurus-plugin-sass',
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'output',
          routeBasePath: 'output',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'outputSidebar',
          position: 'left',
          label: 'Output',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/artifact/intro', label: 'Artifact', position: 'left' },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: 'Contents',
          items: [
            {
              label: 'Output',
              to: '/output/intro',
            },
            {
              label: 'Artifact',
              to: '/artifact/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'SNS',
          items: [
            {
              label: 'Qiita',
              href: 'https://qiita.com/marumaru0113',
            },
            {
              label: 'X',
              href: 'https://x.com/marucircle1133',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/marucircle',
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/marucircle/docusaurus-portfolio',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
