import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '星空伟奕文档',
  tagline: '前端组件与后端API文档',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stra-air-ltd', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 请将此改为您的仓库。
          // 移除此项以移除“编辑此页面”链接。
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 请将此改为您的仓库。
          // 移除此项以移除“编辑此页面”链接。
          editUrl:
            'https://github.com/stra-air-ltd/docs',
          // 用于强制执行博客最佳实践的有用选项
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '星空伟奕文档',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },

        {
          to: 'https://www.starair.ltd/',
          label: '门户',
          position: 'left'
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '后端API',
              to: '/docs/api/welcome',
            },
            {
              label: '前端组件',
              to: '/docs/component/welcome',
            }
          ],
        },
        {
          title: '联系我们',
          items: [
            {
              label: '联系方式',
              href: 'https://www.starair.ltd/about',
            },
          ],
        },
        {
          title: '关于',
          items: [
            {
              label: '门户',
              to: 'https://www.starair.ltd/',
            },
            {
              label: '开源项目属名',
              href: 'https://www.starair.ltd/about-open-source-project',
            },
          ],
        },
      ],
      copyright: `Copyright © 星空伟奕（成都）科技有限责任公司 power by NERV`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
