import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'AlphaApollo',
  tagline: 'RL training framework for LLMs with tooling and agent systems',
  favicon: 'img/TMLR.ico',

  future: {
    v4: true, 
  },

  url: 'https://alphaapollo.org',
  baseUrl: '/',

  organizationName: 'tmlr-group', 
  projectName: 'AlphaApollo', 

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Enable versioning
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Latest',
              path: '',
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tmlr-group/AlphaApollo',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AlphaApollo',
      logo: {
        alt: 'AlphaApollo Logo',
        src: 'img/TMLR.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Features',
          position: 'left',
          items: [
            { to: '/multi-turn-agentic-reasoning', label: 'Agentic Reasoning' },
            { to: '/multi-turn-agentic-learning', label: 'Agentic Learning' },
            { to: '/multi-round-agentic-evolution', label: 'Agentic Evolution' },
          ],
        },
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { href: 'https://github.com/tmlr-group/AlphaApollo', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} AlphaApollo. Built with Docusaurus. All rights reserved. For technical issues, please submit an issue on <a href="https://github.com/tmlr-group/AlphaApollo/issues" target="_blank" rel="noopener noreferrer">GitHub</a>. </br>For questions and discussions, please contact Prof. Bo Han (<a href="mailto:bhanml@comp.hkbu.edu.hk">bhanml@comp.hkbu.edu.hk</a>) or Zhanke Zhou (<a href="mailto:cszkzhou@comp.hkbu.edu.hk">cszkzhou@comp.hkbu.edu.hk</a>).`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'yaml', 'toml', 'json', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
