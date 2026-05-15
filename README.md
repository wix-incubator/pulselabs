# Pulse Labs

Pulse Labs is a SaaS product surface for metrics, member activity, workflow signals, automation queues, and dense product dashboards.

This website is powered by Wix Headless and built using [wix-headless.dev](https://www.wix-headless.dev).

## Links

- Live site: [https://pulse-labs-acc09c00-gonenj.wix-site-host.com](https://pulse-labs-acc09c00-gonenj.wix-site-host.com)
- Source: [https://github.com/wix-incubator/pulselabs](https://github.com/wix-incubator/pulselabs)
- Wix site ID: `08a20642-2eca-4f8a-b829-6f42e5690725`

## What It Showcases

- A custom Astro SaaS interface on a Wix Headless foundation.
- Member, data, and automation patterns presented as product UI.
- Dense operational layouts that do not look like a generic dashboard template.
- A Headless site foundation ready for Wix data/member/workflow integrations.
- Public `robots.txt` and `llms.txt` configured through Wix SEO txt APIs.
- Deployment with `wix release`.

## Wix Solutions Used

- Wix Headless Site for the managed site/runtime foundation.
- Wix Members/Data/automation patterns are represented in the product concept and UI.

## Wix SDKs And Packages

- `@wix/astro`
- `@wix/astro-pages`
- `@wix/sdk`

This repo currently demonstrates the SaaS-facing UX and Headless site foundation. It does not yet contain direct member or data SDK calls.

## Local Development

Create a local env file from `.env.example` or run the Wix CLI env setup for the connected site.

```bash
npm install
npm run dev
```

## Build And Release

```bash
npm run build
npm run release
```
