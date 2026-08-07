import type { MarketplaceItemDetail, MarketplaceListResponse } from './types'

const MOCK_AUTHOR = {
  id: `1d177a58-d262-4cf2-a8ca-ac8ca0341377`,
  login: `yanglbme`,
  name: `Libin YANG`,
  avatar: ``,
}

const MOCK_THEMES: MarketplaceItemDetail[] = [
  {
    id: `db457eb7-1ee6-4cf1-8741-fe6ff27d012b`,
    type: `theme`,
    slug: `autumn-warm`,
    name: `秋日暖光`,
    description: `温暖治愈的橙色调文艺排版，适合情感故事与生活随笔。建议主色 #d97758。`,
    version: `1.0.1`,
    coverUrl: null,
    primaryColor: `#d97758`,
    status: `approved`,
    downloadCount: 93,
    createdAt: 1784194627227,
    updatedAt: 1784199582309,
    publishedAt: 1784194627227,
    author: MOCK_AUTHOR,
    payload: `/**
 * Autumn Warm — literary orange glow.
 * Use var(--md-primary-color); suggested accent #d97758.
 */

h1 {
  display: table;
  padding: 0.2em 0;
  margin: 2em auto 1.2em;
  color: var(--md-primary-color);
  background: transparent;
  border-bottom: 1px dashed color-mix(in srgb, var(--md-primary-color) 45%, transparent);
  font-size: calc(var(--md-font-size) * 1.35);
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.04em;
}

h2 {
  display: table;
  padding: 0.15em 0;
  margin: 2.5em auto 1.2em;
  color: var(--md-primary-color);
  background: transparent;
  border-bottom: 2px solid var(--md-primary-color);
  border-radius: 0;
  font-size: calc(var(--md-font-size) * 1.2);
  font-weight: 700;
  text-align: center;
  box-shadow: none;
}

h3 {
  padding: 0.15em 0 0.15em 12px;
  margin: 2em 8px 0.75em 0;
  color: var(--md-primary-color);
  border-left: 4px solid var(--md-primary-color);
  border-bottom: none;
  background: transparent;
  font-size: calc(var(--md-font-size) * 1.1);
  line-height: 1.4;
}

h4, h5, h6 { color: var(--md-primary-color); }

p { letter-spacing: 0.05em; line-height: 1.75; }

blockquote {
  font-style: normal;
  padding: 1em 1.2em;
  border-left: 5px solid var(--md-primary-color);
  border-radius: 10px;
  background: color-mix(in srgb, var(--md-primary-color) 8%, transparent);
  box-shadow: inset 0 0 18px color-mix(in srgb, var(--md-primary-color) 12%, transparent);
}

blockquote > p { letter-spacing: 0.04em; }

strong { color: color-mix(in srgb, var(--md-primary-color) 85%, #000 15%); }

.codespan {
  border-radius: 6px;
  background: color-mix(in srgb, var(--md-primary-color) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 18%, transparent);
}

pre.code__pre, .hljs.code__pre {
  border-radius: 12px;
  box-shadow: 0 8px 24px color-mix(in srgb, var(--md-primary-color) 10%, transparent);
}

img {
  border-radius: 14px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.06), 0 0 12px color-mix(in srgb, var(--md-primary-color) 18%, transparent);
}

ul { list-style: none; padding-left: 1.2em; }
li { margin: 0.45em 8px; }

hr {
  height: 1px; border: none; margin: 2.2em 0;
  background: color-mix(in srgb, hsl(var(--foreground)) 12%, transparent);
}

table { border-collapse: collapse; width: 100%; margin: 1em 8px; border: 1px solid #e8ddd6; }
th { color: #fff; background-color: var(--md-primary-color); font-weight: bold; border: 1px solid #e8ddd6; padding: 0.45em 0.75em; }
td { color: hsl(var(--foreground)); border: 1px solid #e8ddd6; padding: 0.45em 0.75em; }`,
    sampleMarkdown: null,
  },
  {
    id: `de9126f9-4825-4e88-8e7e-017de7ed959a`,
    type: `theme`,
    slug: `spring-fresh`,
    name: `春日清新`,
    description: `清新自然的绿色调轻盈排版，适合旅行日记与自然主题。建议主色 #6b9b7a。`,
    version: `1.0.1`,
    coverUrl: null,
    primaryColor: `#6b9b7a`,
    status: `approved`,
    downloadCount: 80,
    createdAt: 1784194627227,
    updatedAt: 1784199582309,
    publishedAt: 1784194627227,
    author: MOCK_AUTHOR,
    payload: `/**
 * Spring Fresh — natural green, light & lively.
 * Use var(--md-primary-color); suggested accent #6b9b7a.
 */

h1 {
  display: table;
  padding: 0.25em 0.4em;
  margin: 2em auto 1.15em;
  color: var(--md-primary-color);
  background: transparent;
  border-bottom: 1px dashed color-mix(in srgb, var(--md-primary-color) 35%, transparent);
  font-size: calc(var(--md-font-size) * 1.32);
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.03em;
}

h2 {
  display: table;
  padding: 0.25em 0.85em;
  margin: 2.3em auto 1.15em;
  color: #fff;
  background: var(--md-primary-color);
  border-bottom: none;
  border-radius: 999px;
  font-size: calc(var(--md-font-size) * 1.15);
  font-weight: 700;
  text-align: center;
  box-shadow: 0 4px 14px color-mix(in srgb, var(--md-primary-color) 28%, transparent);
}

h3 {
  padding: 0.25em 0.75em 0.25em 12px;
  margin: 1.9em 8px 0.7em 0;
  color: color-mix(in srgb, var(--md-primary-color) 75%, #000 25%);
  border-left: 4px solid var(--md-primary-color);
  border-radius: 0 10px 10px 0;
  background: color-mix(in srgb, var(--md-primary-color) 9%, transparent);
  font-size: calc(var(--md-font-size) * 1.08);
  line-height: 1.5;
}

h4, h5, h6 { color: var(--md-primary-color); }

p { letter-spacing: 0.04em; line-height: 1.78; }

blockquote {
  font-style: italic;
  padding: 1em 1.2em;
  border-left: 5px solid var(--md-primary-color);
  border-radius: 12px;
  background: color-mix(in srgb, var(--md-primary-color) 8%, transparent);
  box-shadow: inset 0 0 16px color-mix(in srgb, var(--md-primary-color) 10%, transparent);
}

strong { color: color-mix(in srgb, var(--md-primary-color) 78%, #000 22%); }

.codespan {
  border-radius: 8px;
  background: color-mix(in srgb, var(--md-primary-color) 9%, transparent);
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 18%, transparent);
}

pre.code__pre, .hljs.code__pre {
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 12%, transparent);
  box-shadow: 0 6px 16px rgba(0,0,0,0.04);
}

img {
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 12%, transparent);
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}

ul { list-style: none; padding-left: 1.3em; }
li { margin: 0.45em 8px; }

hr {
  height: 1px; border: none; margin: 2.1em 0;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--md-primary-color) 40%, transparent), transparent);
}

table { border-collapse: collapse; width: 100%; margin: 1em 8px; border: 1px solid #dde8dd; }
th { color: #fff; background-color: var(--md-primary-color); font-weight: bold; border: 1px solid #dde8dd; padding: 0.45em 0.75em; }
td { color: hsl(var(--foreground)); border: 1px solid #dde8dd; padding: 0.45em 0.75em; }`,
    sampleMarkdown: null,
  },
  {
    id: `1befc83e-eb62-48a8-b5c0-61f8093a3eae`,
    type: `theme`,
    slug: `ocean-calm`,
    name: `深海静谧`,
    description: `深邃冷静的蓝色调专业排版，适合技术文章与商业分析。建议主色 #4a7c9b。`,
    version: `1.0.1`,
    coverUrl: null,
    primaryColor: `#4a7c9b`,
    status: `approved`,
    downloadCount: 102,
    createdAt: 1784194627227,
    updatedAt: 1784199582309,
    publishedAt: 1784194627227,
    author: MOCK_AUTHOR,
    payload: `/**
 * Ocean Calm — cool blue, rational & professional.
 * Use var(--md-primary-color); suggested accent #4a7c9b.
 */

h1 {
  display: table;
  padding: 0.15em 0;
  margin: 2em auto 1.1em;
  color: var(--md-primary-color);
  background: transparent;
  border-bottom: 1px dashed color-mix(in srgb, var(--md-primary-color) 40%, transparent);
  font-size: calc(var(--md-font-size) * 1.3);
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.02em;
}

h2 {
  display: table;
  padding: 0.1em 0;
  margin: 2.4em auto 1.1em;
  color: color-mix(in srgb, var(--md-primary-color) 75%, #000 25%);
  background: transparent;
  border-bottom: 2px solid var(--md-primary-color);
  border-radius: 0;
  font-size: calc(var(--md-font-size) * 1.18);
  font-weight: 700;
  text-align: center;
  box-shadow: none;
}

h3 {
  padding: 0.2em 0 0.2em 12px;
  margin: 1.8em 8px 0.7em 0;
  color: color-mix(in srgb, var(--md-primary-color) 80%, #000 20%);
  border-left: 3px solid var(--md-primary-color);
  background: color-mix(in srgb, var(--md-primary-color) 6%, transparent);
  border-radius: 0 6px 6px 0;
  font-size: calc(var(--md-font-size) * 1.08);
  line-height: 1.45;
}

h4, h5, h6 { color: var(--md-primary-color); }

p { letter-spacing: 0.03em; line-height: 1.8; }

blockquote {
  font-style: normal;
  padding: 1em 1.15em;
  border-left: 5px solid var(--md-primary-color);
  border-radius: 8px;
  background: color-mix(in srgb, var(--md-primary-color) 7%, transparent);
  box-shadow: inset 0 0 14px color-mix(in srgb, var(--md-primary-color) 8%, transparent);
}

strong { color: color-mix(in srgb, var(--md-primary-color) 80%, #000 20%); }

.codespan {
  border-radius: 5px;
  background: color-mix(in srgb, var(--md-primary-color) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 16%, transparent);
}

pre.code__pre, .hljs.code__pre {
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 12%, transparent);
}

img {
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent);
  box-shadow: 0 6px 18px rgba(0,0,0,0.05);
}

ul { list-style: disc; padding-left: 1.4em; }
li { margin: 0.4em 8px; }

hr {
  height: 1px; border: none; margin: 2em 0;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--md-primary-color) 35%, transparent), transparent);
}

table { border-collapse: collapse; width: 100%; margin: 1em 8px; border: 1px solid #d5dde5; }
th { color: #fff; background-color: var(--md-primary-color); font-weight: bold; border: 1px solid #d5dde5; padding: 0.45em 0.75em; }
td { color: hsl(var(--foreground)); border: 1px solid #d5dde5; padding: 0.45em 0.75em; }`,
    sampleMarkdown: null,
  },
  {
    id: `28b4dc95-2145-4923-bc8c-568dce083403`,
    type: `theme`,
    slug: `mint-soda`,
    name: `薄荷气泡`,
    description: `虚线、胶囊与薄荷绿，夏天的透气感。建议主色 #2fbf9b。`,
    version: `1.0.1`,
    coverUrl: null,
    primaryColor: `#2fbf9b`,
    status: `approved`,
    downloadCount: 110,
    createdAt: 1784281027227,
    updatedAt: 1784285982309,
    publishedAt: 1784281027227,
    author: MOCK_AUTHOR,
    payload: `/**
* Mint Soda — mint bubbles and summer breeze.
* Dashed underlines, rounded capsules & mint green.
* Use var(--md-primary-color); suggested accent #2fbf9b.
*/

.container {
  font-family: 'Yuanti SC', 'YouYuan', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif !important;
}

h1 {
  display: block;
  padding: 0;
  margin: 1.2em 8px 0.6em;
  color: color-mix(in srgb, var(--md-primary-color) 55%, #000 45%);
  background: transparent;
  border-bottom: none;
  font-size: calc(var(--md-font-size) * 1.5);
  font-weight: 700;
  text-align: center;
  line-height: 1.6;
}

h2 {
  display: block;
  padding: 0 0 0.5em;
  margin: 2.2em 8px 1.1em;
  color: color-mix(in srgb, var(--md-primary-color) 55%, #000 45%);
  background: transparent;
  border-bottom: 2px dotted color-mix(in srgb, var(--md-primary-color) 45%, #fff 55%);
  border-radius: 0;
  font-size: calc(var(--md-font-size) * 1.15);
  font-weight: 700;
  text-align: left;
  box-shadow: none;
}

h3 {
  padding: 0.2em 0 0.2em 12px;
  margin: 1.8em 8px 0.7em 0;
  color: color-mix(in srgb, var(--md-primary-color) 60%, #000 40%);
  border-left: 4px solid var(--md-primary-color);
  border-radius: 0 10px 10px 0;
  background: color-mix(in srgb, var(--md-primary-color) 6%, transparent);
  font-size: calc(var(--md-font-size) * 1.08);
  line-height: 1.5;
}

h4, h5, h6 { color: var(--md-primary-color); }

p { letter-spacing: 0.04em; line-height: 1.8; }

blockquote {
  font-style: normal;
  padding: 1em 1.2em;
  border-left: none;
  border-radius: 18px;
  background: color-mix(in srgb, var(--md-primary-color) 12%, transparent);
  color: color-mix(in srgb, var(--md-primary-color) 45%, #000 55%);
  font-size: 0.95em;
  line-height: 1.8;
}

blockquote > p { letter-spacing: 0.04em; }

strong { color: color-mix(in srgb, var(--md-primary-color) 55%, #000 45%); }

em { font-style: normal; color: color-mix(in srgb, var(--md-primary-color) 65%, #fff 35%); }

s { color: color-mix(in srgb, var(--md-primary-color) 45%, #fff 55%); }

mark {
  background-color: color-mix(in srgb, var(--md-primary-color) 25%, transparent);
  color: color-mix(in srgb, var(--md-primary-color) 55%, #000 45%);
  padding: 0 4px;
  border-radius: 6px;
}

a {
  color: var(--md-primary-color);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid color-mix(in srgb, var(--md-primary-color) 45%, #fff 55%);
}

img {
  display: block;
  max-width: 100%;
  margin: 1.4em auto;
  border-radius: 4px;
  box-shadow: 0 8px 20px color-mix(in srgb, var(--md-primary-color) 15%, transparent);
}

ul { list-style: disc; }
li { margin: 0.45em 8px; }

hr {
  width: 56px;
  height: 3px;
  border: none;
  border-radius: 2px;
  margin: 2.6em auto;
  background: linear-gradient(90deg, var(--md-primary-color), color-mix(in srgb, var(--md-primary-color) 45%, #fff 55%));
  -webkit-transform: none;
  transform: none;
}

.codespan {
  border-radius: 6px;
  background: color-mix(in srgb, var(--md-primary-color) 12%, transparent);
  color: color-mix(in srgb, var(--md-primary-color) 55%, #000 45%);
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 15%, transparent);
}

pre.code__pre, .hljs.code__pre {
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 12%, transparent);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
}

table { border-collapse: collapse; width: 100%; margin: 1em 8px; border: 1px solid color-mix(in srgb, var(--md-primary-color) 28%, #fff 72%); }
th {
  color: color-mix(in srgb, var(--md-primary-color) 55%, #000 45%);
  background-color: color-mix(in srgb, var(--md-primary-color) 12%, transparent);
  font-weight: bold;
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 28%, #fff 72%);
  padding: 0.45em 0.75em;
  text-align: left;
}
td { color: hsl(var(--foreground)); border: 1px solid color-mix(in srgb, var(--md-primary-color) 28%, #fff 72%); padding: 0.45em 0.75em; }`,
    sampleMarkdown: null,
  },
]

export function getMockThemes(): MarketplaceListResponse {
  return {
    items: MOCK_THEMES.map(({ payload, sampleMarkdown, ...rest }) => rest as any),
    total: MOCK_THEMES.length,
    page: 1,
    pageSize: 20,
  }
}

export function getMockThemeById(id: string): MarketplaceItemDetail | null {
  return MOCK_THEMES.find(t => t.id === id) ?? null
}
