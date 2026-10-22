// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { ImageMetadata } from "astro";
import hznScreenshot from "@assets/hzn-screenshot.png";
import sqlifyScreenshot from "@assets/sqlify-screenshot.png";
import nearSdkScreenshot from "@assets/near-sdk-js.png";
import zapierScreenshot from "@assets/zapier.webp";
import integromatScreenshot from "@assets/integromat.webp";

export interface Link {
  label: string;
  url: string;
}

export interface Site {
  name: string;
  title: string;
  description: string;
  ogImageAlt: string;
  jobTitle: string;
  employer: string;
  email: string;
  bookingUrl: string;
  companyUrl: string;
}

export interface Hero {
  headline: string;
  subhead: string;
  primary: Link;
  secondary: Link;
}

export interface Role {
  organisation: string;
  title?: string;
  period: string;
  summary: string;
  highlights: string[];
  links: Link[];
}

export interface Project {
  title: string;
  description: string;
  image?: { src: ImageMetadata; alt: string };
  url?: string;
  github?: string;
}

export type SocialName = "GitHub" | "LinkedIn" | "X" | "YouTube";

export interface Social {
  name: SocialName;
  url: string;
}

export const SITE: Site = {
  name: "Petar Vujović",
  title: "Petar Vujović — Rust & data infrastructure consulting",
  description:
    "Petar Vujović builds Rust infrastructure: execution clients, indexers and data pipelines. Founding engineer at Nitro Labs, previously Taiko and NEAR Protocol.",
  ogImageAlt: "The Astro logo above the words \u201cBuilt with Astro\u201d",
  jobTitle: "Founding Engineer",
  employer: "Nitro Labs",
  email: "[CONTACT EMAIL]",
  bookingUrl: "[BOOKING URL]",
  companyUrl: "https://trius.me",
};

// Kept for the RSS feed, which reads these two exports.
export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.description;

export const HERO: Hero = {
  headline: "[HERO HEADLINE — pending choice]",
  subhead:
    "Founding engineer at Nitro Labs, building Rust infrastructure for the Solana Virtual Machine. Before that: Reth execution-client work at Taiko, and smart contracts, SDKs, indexers and frontends across the NEAR ecosystem.",
  primary: { label: "Book an intro call", url: SITE.bookingUrl },
  secondary: { label: "How I work", url: "#how-i-work" },
};

export const HOW_I_WORK: string[] = [
  "Outside engagements run through TriUS with a small team of senior engineers. I own the architecture, the plan and the review; the team does most of the implementation.",
  "Nothing starts until the scope is written down: what we will build, the assumptions it depends on, and the acceptance criteria that tell us it is done.",
  "Deliverables are fixed-price, and longer engagements run on a written monthly plan, so at any point you can see exactly what you are paying for and what comes next.",
  "We use coding agents for scaffolding, test fixtures and migration work. Correctness and design decisions stay with a senior engineer.",
];

export const PUBLIC_WORK: Link[] = [
  { label: "Data Anchor", url: "https://github.com/nitro-svm/data-anchor" },
  { label: "sqlify", url: "https://github.com/petarvujovic98/sqlify" },
];

export const ROLES: Role[] = [
  {
    organisation: "Nitro Labs",
    title: "Founding Engineer",
    period: "2024 – present",
    summary:
      "Nitro Labs builds infrastructure for the Solana Virtual Machine. I work across its Rust stack: SVM execution and rollup components, a data-availability layer on Solana with its indexer, and simulation and historical-data tooling used by DeFi teams.",
    highlights: [
      "Core contributor to Data Anchor, open-source Rust crates for storing verifiable data blobs on Solana's ledger.",
      "Extracted Data Anchor's batch client into Nitro Sender, a reusable crate for landing Solana transactions quickly.",
      "Zero-knowledge proving work for SVM execution.",
    ],
    links: [
      { label: "Data Anchor", url: "https://github.com/nitro-svm/data-anchor" },
      {
        label: "Nitro Sender",
        url: "https://github.com/nitro-svm/nitro-sender",
      },
    ],
  },
  {
    organisation: "Templar Protocol",
    title: "Engineer (contract)",
    period: "2025 – present",
    summary:
      "Templar is an overcollateralized lending protocol on NEAR. I built its off-chain Rust services and tooling and reviewed changes to the contracts.",
    highlights: [
      "Liquidation and yield-accumulation bots that discover deployments and markets from on-chain registries.",
      "The protocol's first fuzz targets, a market configuration CLI, and a nonce fix for high-concurrency transaction submission.",
    ],
    links: [
      {
        label: "Templar contracts",
        url: "https://github.com/Templar-Protocol/contracts",
      },
    ],
  },
  {
    organisation: "Taiko",
    period: "2024",
    summary:
      "Taiko is a based rollup on Ethereum. I worked on its Rust infrastructure, adapting Reth to support Taiko's L2 client and custom rollup block validation.",
    highlights: [
      "Ran the raiko repository, the layer that puts Taiko's zero-knowledge and TEE provers behind a single API.",
    ],
    links: [{ label: "raiko", url: "https://github.com/taikoxyz/raiko" }],
  },
  {
    organisation: "NEAR Protocol",
    period: "2022 – 2024",
    summary:
      "Smart contracts, SDKs, frontends and infrastructure across the NEAR ecosystem, plus a YouTube series documenting how I built NEAR's no-code integrations.",
    highlights: [
      "Lead developer of NEAR Horizon, built end to end: UI, API, smart contract, indexer, analytics and CRM sync.",
      "Contributed to near-sdk-js: a refactor adding generics, BigInt and Date serialization, middleware, and build and CLI tooling.",
      "Rewrote the backend of NEAR's certification tools in Rust with Axum.",
    ],
    links: [
      { label: "Horizon", url: "https://github.com/near-horizon/horizon" },
      { label: "near-sdk-js", url: "https://github.com/near/near-sdk-js" },
      {
        label: "Certification tools",
        url: "https://github.com/near/near-certification-tools",
      },
    ],
  },
  {
    organisation: "TriUS",
    title: "Co-founder & CEO",
    period: "2020 – present",
    summary:
      "My software company in Montenegro, and still the entity I contract through.",
    highlights: [
      "Main developer of RenyaHome, an e-commerce platform: Next.js storefront, Directus admin, Postgres with change-data-capture sync to Algolia, and AWS serverless infrastructure.",
      "Built a live-streaming and video-on-demand setup.",
    ],
    links: [{ label: "trius.me", url: "https://trius.me" }],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "NEAR Horizon",
    description:
      "A platform connecting NEAR projects with contributors and backers. I was the lead developer across the stack; the product has since been shut down.",
    image: {
      src: hznScreenshot,
      alt: "NEAR Horizon dashboard with project, request and backer navigation",
    },
    github: "https://github.com/near-horizon/horizon",
  },
  {
    title: "Data Anchor",
    description:
      "Rust crates and Solana programs for storing verifiable data blobs on Solana's ledger, with an indexer and CLI.",
    github: "https://github.com/nitro-svm/data-anchor",
  },
  {
    title: "near-sdk-js",
    description:
      "The JavaScript and TypeScript SDK for NEAR smart contracts, compiled to Wasm by its own CLI. I contributed the generics refactor, serialization, middleware and build tooling.",
    image: {
      src: nearSdkScreenshot,
      alt: "A counter smart contract written in TypeScript with near-sdk-js",
    },
    url: "https://near.github.io/near-sdk-js/",
    github: "https://github.com/near/near-sdk-js",
  },
  {
    title: "sqlify",
    description: "A Rust CLI that formats SQL queries, published on crates.io.",
    image: {
      src: sqlifyScreenshot,
      alt: "Terminal showing sqlify reformatting a one-line SQL query",
    },
    url: "https://crates.io/crates/sqlify",
    github: "https://github.com/petarvujovic98/sqlify",
  },
  {
    title: "Zapier – NEAR integration",
    description:
      "Connects NEAR accounts to Zapier. I documented the whole build in a YouTube series.",
    image: {
      src: zapierScreenshot,
      alt: "Zapier and NEAR logos, title card for day 1 of the video series",
    },
    url: "https://www.youtube.com/playlist?list=PL3ZFE2cBGD2MylJ-87DQPQJUjRSNiud5r",
    github: "https://github.com/petarvujovic98/near-zapier",
  },
  {
    title: "Make.com (Integromat) – NEAR integration",
    description:
      "Lets Make.com scenarios interact with NEAR like any other integration. Also documented as a YouTube series.",
    image: {
      src: integromatScreenshot,
      alt: "Integromat and NEAR logos, title card for day 2 of the video series",
    },
    url: "https://www.youtube.com/playlist?list=PL3ZFE2cBGD2MqnYWHC506HwoG3rdrTgoR",
    github: "https://github.com/petarvujovic98/near-integromat",
  },
];

export const AVAILABILITY =
  "Available for a small number of outside engagements in EVM/L2 infrastructure, data pipelines, and engineering audits. I don't take on work that overlaps my employer's products.";

export const SOCIALS: Social[] = [
  { name: "GitHub", url: "https://github.com/petarvujovic98" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/petarvujović" },
  { name: "X", url: "https://x.com/petarvujovic98" },
  { name: "YouTube", url: "https://youtube.com/@petarvujovic" },
];
