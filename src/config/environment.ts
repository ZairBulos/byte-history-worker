import { Environment } from "../types/environment";
import { env } from "node:process";
import dotenv from "dotenv";
dotenv.config();

export function loadEnv() {
  const ENV_KEYS = ["NODE_ENV", "GOOGLE_GENERATIVE_AI_API_KEY", "DATABASE_URL"];
  for (const key of ENV_KEYS) {
    if (!env[key]) throw new Error(`Missing environment variable: ${key}`);
  }
}

const isDev = env.NODE_ENV === "development";

const environment: Environment = {
  DATABASE_URL: isDev
    ? "postgresql://postgres:postgres@localhost:5432/postgres"
    : env.DATABASE_URL!,
};

export default environment;
