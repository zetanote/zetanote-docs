import { defineConfig } from "vitepress";

// NOTE(legal-links)
const PRIVACY_POLICY_URL =
  "https://zetanote.notion.site/Zetanote-Privacy-Policy-9a073d220b3e47c188bf4dccb4a9009d";

// NOTE(legal-links)
const TERMS_OF_SERVICE_URL =
  "https://zetanote.notion.site/Zetanote-Terms-of-Service-0742dd24fbc446f2b58455c0f55ee1ff";

function sidebarGuide() {
  return [
    {
      text: "Introduction",
      base: "/guide/introduction/",
      collapsed: false,
      /* prettier-ignore */
      items: [
        { text: "What is Zetanote?", link: "what-is-zetanote" },
        { text: "Terminology", link: "terminology" },
      ],
    },
    {
      text: "Scripts",
      base: "/guide/scripts/",
      collapsed: false,
      /* prettier-ignore */
      items: [
        { text: "Overview", link: "overview" },
        { text: "Writing Scripts", link: "writing-scripts" },
        { text: "Running Scripts", link: "running-scripts" },
        { text: "Public vs. Private Scripts", link: "public-vs-private-scripts" },
      ],
    },
    {
      text: "Zeta API",
      base: "/guide/zeta-api/",
      collapsed: false,
      items: [
        { text: "Overview", link: "overview" },
        {
          text: "Main API",
          base: "/guide/zeta-api/main-api/",
          collapsed: true,
          /* prettier-ignore */
          items: [
            { text: "Overview", link: "overview" },
            { text: "Append to Note", link: "append-to-note" },
            { text: "Append", link: "append" },
            { text: "Create Note from Template", link: "create-note-from-template" },
            { text: "Create Note", link: "create-note" },
            { text: "Create Script from Template", link: "create-script-from-template" },
            { text: "Create Script", link: "create-script" },
            { text: "Delete Note", link: "delete-note" },
            { text: "Delete Script", link: "delete-script" },
            { text: "Insert", link: "insert" },
            { text: "Pin Node", link: "pin-node" },
            { text: "Pin Note", link: "pin-note" },
            { text: "Pin Script", link: "pin-script" },
            { text: "Pin", link: "pin" },
            { text: "Prepend to Note", link: "prepend-to-note" },
            { text: "Prepend", link: "prepend" },
            { text: "Tag Node", link: "tag-node" },
            { text: "Tag Note", link: "tag-note" },
            { text: "Tag Script", link: "tag-script" },
            { text: "Tag", link: "tag" },
            { text: "Unpin Node", link: "unpin-node" },
            { text: "Unpin Note", link: "unpin-note" },
            { text: "Unpin Script", link: "unpin-script" },
            { text: "Unpin", link: "unpin" },
            { text: "Update Node Tag", link: "update-node-tag" },
            { text: "Update Note Tag", link: "update-note-tag" },
            { text: "Update Note", link: "update-note" },
            { text: "Update Script Tag", link: "update-script-tag" },
            { text: "Update Script", link: "update-script" },
            { text: "Update Settings", link: "update-settings" },
            { text: "Update Tag", link: "update-tag" },
          ],
        },
        {
          text: "Context API",
          base: "/guide/zeta-api/context-api/",
          collapsed: true,
          /* prettier-ignore */
          items: [
            { text: "Overview", link: "overview" },
            { text: "Get Container", link: "get-container" },
            { text: "Get Node Stack", link: "get-node-stack" },
            { text: "Get Note", link: "get-note" },
            { text: "Get Settings", link: "get-settings" },
          ],
        },
        {
          text: "Element API",
          base: "/guide/zeta-api/element-api/",
          collapsed: true,
          /* prettier-ignore */
          items: [
            { text: "Overview", link: "overview" },
            { text: "Bullet", link: "bullet" },
            { text: "Button", link: "button" },
            { text: "Code Block", link: "code-block" },
            { text: "Heading", link: "heading" },
            { text: "Paragraph", link: "paragraph" },
            { text: "Quote", link: "quote" },
            { text: "Todo", link: "todo" },
          ],
        },
        {
          text: "HTTP API",
          base: "/guide/zeta-api/http-api/",
          collapsed: true,
          /* prettier-ignore */
          items: [
            { text: "Overview", link: "overview" },
            { text: "GET", link: "get" },
            { text: "POST", link: "post" },
          ],
        },
        {
          text: "Query API",
          base: "/guide/zeta-api/query-api/",
          collapsed: true,
          /* prettier-ignore */
          items: [
            { text: "Overview", link: "overview" },
            { text: "Get Node Tags", link: "get-node-tags" },
            { text: "Get Nodes by Tag", link: "get-nodes-by-tag" },
            { text: "Get Note ID by Title", link: "get-note-id-by-title" },
            { text: "Get Note Tags", link: "get-note-tags" },
            { text: "Get Note", link: "get-note" },
            { text: "Get Pinned Nodes", link: "get-pinned-nodes" },
            { text: "Get Script ID by Name", link: "get-script-id-by-name" },
            { text: "Get Script Tags", link: "get-script-tags" },
            { text: "Get Tags", link: "get-tags" },
          ],
        },
        {
          text: "UI API",
          base: "/guide/zeta-api/ui-api/",
          collapsed: true,
          /* prettier-ignore */
          items: [
            { text: "Overview", link: "overview" },
            { text: "Open Node Stack", link: "open-node-stack" },
            { text: "Open Node", link: "open-node" },
            { text: "Open Note", link: "open-note" },
            { text: "Open Script", link: "open-script" },
            { text: "Open URL", link: "open-url" },
            { text: "Set Output", link: "set-output" },
            { text: "Set Search Query", link: "set-search-query" },
          ],
        },
        {
          text: "Common Libraries",
          link: "common-libraries",
        },
        {
          text: "Constants",
          link: "constants",
        },
      ],
    },
    {
      text: "Features",
      base: "/guide/features/",
      collapsed: false,
      /* prettier-ignore */
      items: [
        { text: "Rich Text", link: "rich-text" },
        { text: "Search", link: "search" },
        { text: "Tag Tables", link: "tag-tables" },
      ],
    },
    {
      text: "Advanced",
      base: "/guide/advanced/",
      collapsed: false,
      items: [
        {
          text: "Beta API",
          base: "/guide/advanced/beta-api/",
          collapsed: true,
          /* prettier-ignore */
          items: [
            { text: "Overview", link: "overview" },
            { text: "Get Starter Pack", link: "get-starter-pack" },
          ],
        },
      ],
    },
  ];
}

function sidebarRecipes() {
  return [
    {
      text: "Introduction",
      base: "/recipes/introduction/",
      collapsed: false,
      /* prettier-ignore */
      items: [
        { text: "Overview", link: "overview" },
      ],
    },
    {
      text: "OpenAI",
      base: "/recipes/open-ai/",
      collapsed: false,
      /* prettier-ignore */
      items: [
        { text: "Overview", link: "overview" },
        { text: "Prerequisites", link: "prerequisites" },
        { text: "Note Generation", link: "note-generation" },
        { text: "Note Translation", link: "note-translation" },
        { text: "Prompt Templates", link: "prompt-templates" },
        { text: "Question Answering", link: "question-answering" },
        { text: "Summarize Tag", link: "summarize-tag" },
      ],
    },
    {
      text: "Other APIs",
      base: "/recipes/other-apis/",
      collapsed: false,
      /* prettier-ignore */
      items: [
        { text: "Overview", link: "overview" },
        { text: "Free Public APIs", link: "free-public-apis" },
        { text: "Localhost APIs", link: "localhost-apis" },
      ],
    },
    {
      text: "Utilities",
      base: "/recipes/utilities/",
      collapsed: false,
      /* prettier-ignore */
      items: [
        { text: "Overview", link: "overview" },
        { text: "Bionic Reading", link: "bionic-reading" },
        { text: "Carry Over Todos", link: "carry-over-todos" },
        { text: "Next Task", link: "next-task" },
        { text: "Save Note Stacks", link: "save-note-stacks" },
        { text: "Search Note", link: "search-note" },
        { text: "Switch Projects", link: "switch-projects" },
      ],
    },
  ];
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zetanote Docs",
  description: "Public docs for Zetanote.",

  cleanUrls: true,

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/zetanote-favicon-docs.png' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-HXE6WBTWWP' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HXE6WBTWWP');`
    ]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/zetanote-logo-docs.png", width: 24, height: 24 },

    nav: [
      {
        text: "Guide",
        link: "/guide/introduction/what-is-zetanote",
        activeMatch: "/guide/",
      },
      {
        text: "Recipes",
        link: "/recipes/introduction/overview",
        activeMatch: "/recipes/",
      },
    ],

    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide() },
      "/recipes/": { base: "/recipes/", items: sidebarRecipes() },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/zetanote/zetanote-docs" },
    ],

    search: {
      provider: "algolia",
      options: {
        appId: "NVRGPJD6PA",
        apiKey: "c0f235e29804146b60ae54e6cd0863dc",
        indexName: "zetacom",
      },
    },

    footer: {
      message: [
        `<a href="${PRIVACY_POLICY_URL}" target="_blank" rel="noreferrer">Privacy</a>`,
        `<a href="${TERMS_OF_SERVICE_URL}" target="_blank" rel="noreferrer">Terms</a>`,
      ].join(" | "),

      copyright: "© 2024-present Zetanote LLC",
    },
  },
});
