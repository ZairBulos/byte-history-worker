import { pool } from "./client";

export async function saveMilestone(
  text: string,
  model: string
): Promise<void> {
  await pool.query(
    "INSERT INTO tech_milestones (milestone, ai_model) VALUES ($1, $2)",
    [text, model]
  );
}
