import { Environment } from "../types/environment";
import { env } from "node:process";
import dotenv from "dotenv";
dotenv.config();

const ENV_KEYS = ["GOOGLE_GENERATIVE_AI_API_KEY", "DATABASE_URL"];

export function loadEnv() {
  for (const key of ENV_KEYS) {
    if (!env[key]) throw new Error(`Missing environment variable: ${key}`);
  }
}

const environment: Environment = {
  DATABASE_URL: env.DATABASE_URL!,
};

export default environment;
