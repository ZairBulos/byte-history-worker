import { env } from "node:process";
import dotenv from "dotenv";
dotenv.config();

const ENV_KEYS = ["GOOGLE_GENERATIVE_AI_API_KEY"];

export function loadEnv() {
  for (const key of ENV_KEYS) {
    if (!env[key]) throw new Error(`Missing environment variable: ${key}`);
  }
}
