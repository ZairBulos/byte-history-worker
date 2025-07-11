# Byte History Worker

Generates a daily programming or technology milestone using AI and stores it in a PostgreSQL database.

Intended to be executed automatically every day via GitHub Actions.

## Features

- 🧠 Uses Google's Gemini API to generate daily milestones.
- 📅 Automatically runs daily at 00:00 (Argentina time).
- 🛢️ Saves the generated milestone in a PostgreSQL database.

## Requirements

- Node.js 20+
- PostgreSQL
- Google Generative AI API Key (Gemini)

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run built script

```bash
npm run start
```

## GitHub Actions

The worker runs daily via GitHub Actions using a scheduled workflow.

### Schedule

- **Time**: Every day at 00:00 Argentina time (UTC-3)

### Required Secrets

Configure these in your GitHub repository under:

**Settings** -> **Secrets and variables** -> **Actions** -> **Secrets**

| Name                         | Description                  |
| ---------------------------- | ---------------------------- |
| DATABASE_URL                 | PostgreSQL connection string |
| GOOGLE_GENERATIVE_AI_API_KEY | Google Gemini API key        |

## License

This project is licensed under the [MIT License](./LICENSE).
