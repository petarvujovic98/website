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
  telegramHandle: string;
  telegramUrl: string;
  bookingUrl: string;
  companyUrl: string;
}

export interface Hero {
  headline: string;
  // A word in the headline rendered in the accent colour.
  accent: string;
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

export type SocialName = "GitHub" | "LinkedIn" | "X" | "Telegram" | "YouTube";

export interface Social {
  name: SocialName;
  url: string;
}

export const SITE: Site = {
  name: "Petar Vujović",
  title: "Petar Vujović — Rust infrastructure engineer",
  description:
    "Petar Vujović, Rust infrastructure engineer. Founding engineer at Nitro Labs, previously Taiko and NEAR Protocol: execution clients, indexers and data tooling.",
  ogImageAlt:
    "Petar Vujović: I build Rust infrastructure and the developer tools around it. Founding engineer at Nitro Labs, previously Taiko and NEAR Protocol.",
  jobTitle: "Founding Engineer & Tech Lead",
  employer: "Nitro Labs",
  email: "me@petarvujovic.com",
  telegramHandle: "@petarvujovic",
  telegramUrl: "https://t.me/petarvujovic",
  bookingUrl: "https://calendar.app.google/9Jj1fTWJrTMLvLF79",
  companyUrl: "https://trius.me",
};

// Kept for the RSS feed, which reads these two exports.
export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.description;

export const HERO: Hero = {
  headline:
    "I'm Petar. I build Rust infrastructure and the developer tools around it.",
  accent: "Petar",
  subhead:
    "Founding engineer and tech lead at Nitro Labs, building Termina, a platform for replaying and simulating Solana's history. Before that: Reth execution-client work at Taiko, and smart contracts, SDKs, indexers and frontends across the NEAR ecosystem.",
  primary: { label: "Get in touch", url: "#contact" },
  secondary: { label: "Experience", url: "#experience" },
};

export const ROLES: Role[] = [
  {
    organisation: "Nitro Labs",
    title: "Founding Engineer & Tech Lead",
    period: "2024 – present",
    summary:
      "Most Solana DeFi teams test changes in production, because historical chain state is hard to reproduce. At Nitro Labs I lead the engineering of Termina, which replays historical Solana slots so trading desks, market makers and protocol teams can measure a change against real mainnet traffic before shipping it.",
    highlights: [
      "Replay of historical slots that can pause inside a slot and simulate transactions against that state, with modified balances, parameters or program binaries.",
      "Rerouting of historical swaps through aggregators, showing which trades a venue would have won and at what price.",
      "Liquidity-depth and hypothetical-fill datasets for execution-quality analysis, plus a Rust client and CLI for driving it all.",
      "Earlier at Nitro: core contributor to Data Anchor, open-source Rust crates for verifiable data storage on Solana, and its spin-off transaction sender, Nitro Sender.",
    ],
    links: [
      { label: "Termina docs", url: "https://docs.termina.technology" },
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
      "Templar is an overcollateralized lending protocol on NEAR. I built off-chain Rust services and tooling for it and reviewed changes to the contracts.",
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
      "Restructured raiko, Taiko's multi-prover service: split out its core crate and built the versioned API that puts its zero-knowledge and TEE provers behind one interface.",
    ],
    links: [{ label: "raiko", url: "https://github.com/taikoxyz/raiko" }],
  },
  {
    organisation: "NEAR Protocol",
    period: "2022 – 2024",
    summary:
      "Smart contracts, SDKs, frontends and infrastructure across the NEAR ecosystem, plus the NEAR integrations for Zapier and Make.com that I built and documented in a YouTube series, a big part of why NEAR hired me.",
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
    title: "Founder & CEO",
    period: "2020 – present",
    summary:
      "My software company in Montenegro, and still the entity I contract through.",
    highlights: [
      "Lead developer of RenyaHome, an e-commerce platform built with one other engineer: Next.js storefront, Directus admin, Postgres, Algolia search, and AWS infrastructure.",
      "Co-built a live-streaming and video-on-demand setup for an event (2020).",
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
      alt: "Terminal showing sqlify reformatting a long SQL query into indented clauses",
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
      "A NEAR app for Integromat (now Make.com), built in 2022. The repo holds the write-up; the build is documented as a YouTube series.",
    image: {
      src: integromatScreenshot,
      alt: "Integromat and NEAR logos, title card for day 2 of the video series",
    },
    url: "https://www.youtube.com/playlist?list=PL3ZFE2cBGD2MqnYWHC506HwoG3rdrTgoR",
    github: "https://github.com/petarvujovic98/near-integromat",
  },
];

export const AVAILABILITY =
  "Email or Telegram is the best way to reach me. For project work, my company TriUS takes on a small number of engagements.";

export const SOCIALS: Social[] = [
  { name: "GitHub", url: "https://github.com/petarvujovic98" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/petarvujović" },
  { name: "X", url: "https://x.com/petarvujovic98" },
  { name: "Telegram", url: SITE.telegramUrl },
  { name: "YouTube", url: "https://youtube.com/@petarvujovic" },
];
