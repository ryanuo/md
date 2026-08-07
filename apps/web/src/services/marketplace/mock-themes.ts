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
  {
    id: `fbf7c7ed-092d-479e-ae70-53d566657ec3`,
    type: `theme`,
    slug: `swiss-index`,
    name: `瑞士索引`,
    description: `黑白网格、信号红与巨型编号，把教程和观点组织成清晰索引。建议主色 #e00019。`,
    version: `1.0.1`,
    coverUrl: null,
    primaryColor: `#e00019`,
    status: `approved`,
    downloadCount: 95,
    createdAt: 1784367427227,
    updatedAt: 1784372782309,
    publishedAt: 1784367427227,
    author: MOCK_AUTHOR,
    payload: `/**
* Swiss Index — black & white grid, signal red, giant numerals.
* Use var(--md-primary-color); suggested accent #e00019.
*/

.container {
  counter-reset: swiss-h2;
  letter-spacing: 0;
  color: #111111;
}

h1 {
  display: block;
  padding: 0 0 0.42em;
  margin: 0.8em 8px 0.55em;
  color: #050505;
  background: transparent;
  border-bottom: 2px solid #0a0a0a;
  border-radius: 0;
  font-size: calc(var(--md-font-size) * 2.3);
  font-weight: 900;
  text-align: left;
  line-height: 1.08;
  letter-spacing: -0.045em;
  box-shadow: none;
}

h1::before {
  content: 'SWISS INDEX / 01';
  display: block;
  color: var(--md-primary-color);
  font-family: Menlo, Consolas, monospace;
  font-size: 0.25em;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.1em;
  margin-bottom: 1.4em;
}

h2 {
  display: flex;
  align-items: flex-start;
  gap: 0.72em;
  padding: 0.65em 0 0;
  margin: 2.15em 8px 0.85em;
  color: #0a0a0a;
  background: transparent;
  border-top: 1px solid #111111;
  border-bottom: none;
  border-radius: 0;
  font-size: calc(var(--md-font-size) * 1.38);
  font-weight: 800;
  text-align: left;
  line-height: 1.2;
  letter-spacing: -0.02em;
  box-shadow: none;
}

h2::before {
  content: counter(swiss-h2);
  counter-increment: swiss-h2;
  flex: 0 0 auto;
  color: #050505;
  font-size: 2.35em;
  font-weight: 900;
  line-height: 0.78;
  letter-spacing: -0.08em;
}

h3 {
  padding: 0 0 0 0.72em;
  margin: 1.7em 8px 0.65em;
  color: #111111;
  border-left: 5px solid var(--md-primary-color);
  border-radius: 0;
  background: transparent;
  font-size: calc(var(--md-font-size) * 1.08);
  font-weight: 800;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

h4 {
  margin: 1.45em 8px 0.55em;
  color: var(--md-primary-color);
  font-size: calc(var(--md-font-size) * 0.96);
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

h5 {
  margin: 1.35em 8px 0.5em;
  color: #111111;
  font-size: calc(var(--md-font-size) * 0.9);
  font-weight: 700;
  line-height: 1.45;
  letter-spacing: 0.03em;
}

h6 {
  margin: 1.25em 8px 0.45em;
  color: #686868;
  font-size: calc(var(--md-font-size) * 0.78);
  font-weight: 700;
  line-height: 1.45;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

p { margin: 0 8px 1.18em; line-height: 1.82; text-align: left; letter-spacing: 0; }

blockquote {
  font-style: normal;
  padding: 0.2em 0 0.2em 1em;
  margin: 1.65em 8px;
  border-left: 3px solid var(--md-primary-color);
  border-radius: 0;
  background: transparent;
  color: #333333;
  font-size: 0.94em;
  line-height: 1.75;
}

blockquote > p { margin: 0; letter-spacing: 0; }

ul { list-style-type: square; padding-left: 1.45em; margin: 0.85em 8px 1.35em; }
ol { list-style-type: decimal-leading-zero; padding-left: 1.75em; margin: 0.85em 8px 1.35em; }
li { margin: 0.48em 0; padding-left: 0.25em; }

a {
  color: #111111;
  text-decoration: none;
  border-bottom: 2px solid var(--md-primary-color);
  padding-bottom: 1px;
}

strong {
  color: #050505;
  font-weight: 800;
  text-decoration: underline;
  text-decoration-color: var(--md-primary-color);
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
}

em { font-style: italic; color: #333333; }
s { color: #8c8c8c; text-decoration-color: var(--md-primary-color); }

mark {
  background-color: var(--md-primary-color);
  color: #ffffff;
  padding: 1px 4px;
  border-radius: 0;
}

img {
  display: block;
  max-width: 100%;
  margin: 1.35em auto;
  border-radius: 0;
  box-shadow: none;
}

hr {
  border: none;
  border-top: 2px solid #111111;
  margin: 2.2em 8px;
  height: auto;
  -webkit-transform: none;
  transform: none;
}

.codespan {
  font-family: Menlo, Consolas, 'Courier New', monospace;
  font-size: 0.82em;
  background-color: #eeeeee;
  color: #111111;
  padding: 2px 5px;
  border-radius: 0;
  border-bottom: 2px solid var(--md-primary-color);
}

pre.code__pre, .hljs.code__pre {
  background-color: #f1f1f1;
  border: 1px solid #d8d8d8;
  border-radius: 0;
  margin: 1.45em 8px;
  overflow: hidden;
  box-shadow: none;
}

pre.code__pre > code, .hljs.code__pre > code { color: #1b1b1b; }

table {
  border-collapse: collapse;
  width: 100%;
  min-width: 520px;
  margin: 1.45em 8px;
  font-size: 0.82em;
  line-height: 1.45;
  border-top: 2px solid #111111;
  border-bottom: 1px solid #111111;
}

th {
  border: none;
  border-bottom: 1px solid #111111;
  padding: 9px 8px 7px;
  background-color: transparent;
  color: #111111;
  font-weight: 800;
  text-align: left;
}

td {
  border: none;
  border-bottom: 1px solid #d8d8d8;
  padding: 8px;
  color: #222222;
}`,
    sampleMarkdown: null,
  },
  {
    id: `596a3720-8168-40cc-9dea-558ad598e685`,
    type: `theme`,
    slug: `cyan-scape`,
    name: `青绿山水`,
    description: `青绿渐变的山脊标题块，当代古典的矿物色。建议主色 #2f6f6a。`,
    version: `1.0.1`,
    coverUrl: null,
    primaryColor: `#2f6f6a`,
    status: `approved`,
    downloadCount: 92,
    createdAt: 1784368427227,
    updatedAt: 1784373782309,
    publishedAt: 1784368427227,
    author: MOCK_AUTHOR,
    payload: `/**
* Cyan Scape — mineral teal, ridge-gradient headings.
* Use var(--md-primary-color); suggested accent #2f6f6a.
*/

.container {
  letter-spacing: 0;
}

h1 {
  display: block;
  padding: 0;
  margin: 1em 8px 0.5em;
  color: var(--md-primary-color);
  background: transparent;
  border-bottom: none;
  border-radius: 0;
  font-size: calc(var(--md-font-size) * 1.55);
  font-weight: 700;
  text-align: center;
  line-height: 1.7;
  letter-spacing: 0.12em;
  box-shadow: none;
}

h1::before {
  content: '千里江山';
  display: block;
  font-size: 0.42em;
  font-weight: 400;
  color: #7fb5a2;
  letter-spacing: 0.45em;
  margin-bottom: 2.2em;
  text-align: center;
}

h2 {
  display: inline-block;
  padding: 0.45em 1.15em;
  margin: 2.4em 8px 1.3em;
  color: #ffffff;
  background-color: var(--md-primary-color);
  background-image: linear-gradient(120deg, var(--md-primary-color), #5fa092);
  border: none;
  border-radius: 4px 18px 4px 18px;
  font-size: calc(var(--md-font-size) * 1.1);
  font-weight: 700;
  text-align: left;
  line-height: 1.6;
  letter-spacing: 0.08em;
  box-shadow: none;
}

blockquote {
  font-style: normal;
  padding: 0.9em 1.2em;
  margin: 1.8em 8px;
  border-left: 3px solid #7fb5a2;
  border-radius: 0 12px 12px 0;
  background-color: #eef4f1;
  color: #5a7269;
  font-size: 0.94em;
  line-height: 2;
}

blockquote > p { margin: 0; }

strong { font-weight: 700; color: var(--md-primary-color); }
em { font-style: italic; color: #5a7269; }
s { color: #7a948b; }

mark {
  background-color: #d4e7df;
  color: var(--md-primary-color);
  padding: 0 2px;
}

a {
  color: var(--md-primary-color);
  text-decoration: none;
  border-bottom: 1px solid #7fb5a2;
}

img {
  display: block;
  max-width: 100%;
  margin: 1.4em auto;
  border-radius: 4px 18px 4px 18px;
  box-shadow: none;
}

hr {
  border: none;
  width: 60px;
  height: 3px;
  border-radius: 2px;
  margin: 2.6em auto;
  background-color: #5fa092;
  background-image: linear-gradient(90deg, var(--md-primary-color), #7fb5a2);
  -webkit-transform: none;
  transform: none;
}

.codespan {
  font-family: Menlo, Consolas, 'Courier New', monospace;
  font-size: 0.86em;
  background-color: #eef4f1;
  color: var(--md-primary-color);
  padding: 2px 6px;
  border-radius: 4px;
  border: none;
}

th {
  border: 1px solid #cfe0d8;
  padding: 8px 12px;
  background-color: var(--md-primary-color);
  color: #ffffff;
  font-weight: 700;
  text-align: left;
}

td {
  border: 1px solid #cfe0d8;
  padding: 8px 12px;
  color: #222222;
}`,
    sampleMarkdown: null,
  },
  {
    id: `5eb84663-3a24-4003-be24-fa1aab976014`,
    type: `theme`,
    slug: `mori-journal`,
    name: `森系手帐`,
    description: `和纸胶带标题与拍立得照片框，慢生活手帐。建议主色 #3a6b4f。`,
    version: `1.0.1`,
    coverUrl: null,
    primaryColor: `#3a6b4f`,
    status: `approved`,
    downloadCount: 90,
    createdAt: 1784369427227,
    updatedAt: 1784374782309,
    publishedAt: 1784369427227,
    author: MOCK_AUTHOR,
    payload: `/**
* Mori Journal — washi-tape headings and polaroid frames.
* Use var(--md-primary-color); suggested accent #3a6b4f.
*/

.container {
  line-height: 1.9;
  letter-spacing: 0.02em;
  color: #45503f;
  background-color: #f7f5ef;
  padding: 20px 18px 32px;
}

h1 {
  display: block;
  padding: 0;
  margin: 1.2em 8px 0.5em;
  color: var(--md-primary-color);
  background: transparent;
  border-bottom: none;
  border-radius: 0;
  font-size: calc(var(--md-font-size) * 1.45);
  font-weight: 600;
  text-align: center;
  line-height: 1.7;
  letter-spacing: 0;
  box-shadow: none;
}

h2 {
  display: inline-block;
  padding: 0.3em 0.9em;
  margin: 2.2em 8px 1.2em;
  color: var(--md-primary-color);
  background-color: color-mix(in srgb, var(--md-primary-color) 16%, transparent);
  border: none;
  border-radius: 3px;
  font-size: calc(var(--md-font-size) * 1.1);
  font-weight: 600;
  text-align: left;
  line-height: 1.6;
  letter-spacing: 0;
  box-shadow: none;
}

blockquote {
  font-style: normal;
  padding: 0.9em 1.1em;
  margin: 1.8em 8px;
  border-left: 3px solid #8db39a;
  border-radius: 0 8px 8px 0;
  background-color: color-mix(in srgb, var(--md-primary-color) 8%, #ffffff);
  color: #6b7f6d;
  font-size: 0.94em;
  line-height: 1.9;
}

blockquote > p { margin: 0; }

strong { font-weight: 700; color: var(--md-primary-color); }
em { font-style: normal; color: #93a08d; }
s { color: #a3a58d; }

mark {
  background-color: color-mix(in srgb, var(--md-primary-color) 16%, #ffffff);
  color: var(--md-primary-color);
  padding: 0 3px;
  border-radius: 3px;
}

a {
  color: var(--md-primary-color);
  text-decoration: none;
  border-bottom: 1px dashed #8db39a;
}

img {
  display: block;
  max-width: 100%;
  box-sizing: border-box;
  padding: 10px 10px 30px;
  margin: 1.6em auto;
  background-color: #ffffff;
  border: 1px solid #e3dccb;
  border-radius: 0;
  box-shadow: 0 6px 16px rgba(90, 80, 60, 0.12);
}

hr {
  border: none;
  margin: 2.4em 8px;
  height: auto;
  -webkit-transform: none;
  transform: none;
  text-align: center;
}

hr::after {
  content: '❀';
  display: block;
  color: #8db39a;
  font-size: 1em;
  line-height: 1;
}

.codespan {
  font-family: Menlo, Consolas, 'Courier New', monospace;
  font-size: 0.86em;
  background-color: color-mix(in srgb, var(--md-primary-color) 8%, #ffffff);
  color: var(--md-primary-color);
  padding: 2px 6px;
  border-radius: 4px;
  border: none;
}

th {
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 25%, #ffffff);
  padding: 8px 12px;
  background-color: color-mix(in srgb, var(--md-primary-color) 16%, #ffffff);
  color: var(--md-primary-color);
  font-weight: 700;
  text-align: left;
}

td {
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 25%, #ffffff);
  padding: 8px 12px;
  color: #45503f;
}`,
    sampleMarkdown: null,
  },
  {
    id: `95b66bb1-c19f-47c4-9796-97d04794894c`,
    type: `theme`,
    slug: `lemon-sea`,
    name: `柠檬海盐`,
    description: `柠檬荧光笔扫过的标题与强调，海风般明亮。建议主色 #f5c518。`,
    version: `1.0.1`,
    coverUrl: null,
    primaryColor: `#f5c518`,
    status: `approved`,
    downloadCount: 93,
    createdAt: 1784370427227,
    updatedAt: 1784375782309,
    publishedAt: 1784370427227,
    author: MOCK_AUTHOR,
    payload: `/**
* Lemon Sea — highlighter sweeps and sea-breeze brightness.
* Use var(--md-primary-color); suggested accent #f5c518.
*/

h1 {
  display: block;
  padding: 0;
  margin: 1.2em 8px 0.6em;
  color: #2f3e46;
  background: transparent;
  border-bottom: none;
  border-radius: 0;
  font-size: calc(var(--md-font-size) * 1.5);
  font-weight: 800;
  text-align: center;
  line-height: 1.6;
  letter-spacing: 0;
  box-shadow: none;
}

h2 {
  display: inline-block;
  padding: 0 4px;
  margin: 2.2em 8px 1.2em;
  color: #2f3e46;
  background-image: linear-gradient(transparent 55%, #ffe27a 55%);
  border: none;
  border-radius: 0;
  font-size: calc(var(--md-font-size) * 1.15);
  font-weight: 800;
  text-align: left;
  line-height: 1.8;
  letter-spacing: 0;
  box-shadow: none;
}

blockquote {
  font-style: normal;
  padding: 1em 1.2em;
  margin: 1.8em 8px;
  border: 2px dashed var(--md-primary-color);
  border-radius: 14px;
  background-color: #f2f7f9;
  color: #6b7f8c;
  font-size: 0.94em;
  line-height: 1.9;
}

blockquote > p { margin: 0; }

strong {
  font-weight: 700;
  color: #2f3e46;
  background-image: linear-gradient(transparent 60%, #fff3b0 60%);
  padding: 0 2px;
}

em { font-style: italic; color: #6b7f8c; }
s { color: #8fa1ab; }

mark {
  background-color: #ffe27a;
  color: #2f3e46;
  padding: 0 2px;
}

a {
  color: #6b7f8c;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid var(--md-primary-color);
}

img {
  display: block;
  max-width: 100%;
  margin: 1.3em auto;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(107, 127, 140, 0.18);
}

hr {
  border: none;
  margin: 2.4em 8px;
  height: auto;
  -webkit-transform: none;
  transform: none;
  text-align: center;
}

hr::after {
  content: '● ● ●';
  display: block;
  color: var(--md-primary-color);
  letter-spacing: 0.5em;
  font-size: 0.75em;
  line-height: 1;
}

.codespan {
  font-family: Menlo, Consolas, 'Courier New', monospace;
  font-size: 0.86em;
  background-color: #f2f7f9;
  color: #2f3e46;
  padding: 2px 6px;
  border-radius: 5px;
  border: none;
}

th {
  border: 1px solid #eed88f;
  padding: 8px 12px;
  background-color: var(--md-primary-color);
  color: #2f3e46;
  font-weight: 700;
  text-align: left;
}

td {
  border: 1px solid #e3e9ed;
  padding: 8px 12px;
  color: #2f3e46;
}`,
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
