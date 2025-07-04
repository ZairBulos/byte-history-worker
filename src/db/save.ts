import { pool } from "./client";

export async function saveMilestone(
  text: string,
  model: string
): Promise<void> {
  const client = await pool.connect();

  try {
    await client.query(
      "INSERT INTO tech_milestones (milestone, ai_model) VALUES ($1, $2)",
      [text, model]
    );
  } finally {
    client.release();
  }
}
