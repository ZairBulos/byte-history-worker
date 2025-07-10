import { generateTechMilestone } from "./ai/generate";
import { getFormattedDate } from "./utils/date";
import { loadEnv } from "./config/environment";
import { saveMilestone } from "./db/save";
import { pool } from "./db/client";

loadEnv();

const today = getFormattedDate();
const prompt = `Genera una efeméride corta y relevante en español sobre programación o tecnología para la fecha ${today}. El formato debe ser: "El [FECHA COMPLETA], [ACONTECIMIENTO RELEVANTE]. [BREVE DESCRIPCIÓN DEL IMPACTO O CONTEXTO]."`;

(async () => {
  try {
    const { text, model } = await generateTechMilestone(prompt);
    console.log("Tech milestone generated\n", text);

    await saveMilestone(text, model);
    console.log("Tech milestone saved successfully");
  } catch (err) {
    console.error("Failed to generate tech milestone", err);
    process.exit(1);
  } finally {
    await pool.end();
  }
})();
