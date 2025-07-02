import type { Environment } from "../types/environment";
import dotenv from "dotenv";
dotenv.config();

const ENV_KEYS = ["NODE_ENV"];

for (const key of ENV_KEYS) {
  if (!process.env[key])
    throw new Error(`Missing environment variable: ${key}`);
}

const environment: Environment = {
  NODE_ENV: process.env.NODE_ENV!,
};

export default environment;
