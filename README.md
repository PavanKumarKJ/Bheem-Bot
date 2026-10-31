# Bheem

Privacy-first AI interview platform for structured candidate evaluation.

## Overview

Bheem combines voice, chat, and video interview workflows with structured
questions, AI-assisted evaluation, and privacy-focused data minimization.
For a longer project and architecture explanation, see
[complete_project.md](./complete_project.md).

## Development

Requirements: Node.js and npm.

```sh
npm ci
npm run dev
```

Configure the required Supabase and AI-provider environment variables in a
local `.env` file before using features that depend on those services. Never
commit credentials.

Run the web test suite with:

```sh
npm run test:web
```

## Contributor

- [PavanKumarKJ](https://github.com/PavanKumarKJ)
