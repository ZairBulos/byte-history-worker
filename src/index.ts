import { generateTechMilestone } from "./ai/generate";
import { getFormattedDate } from "./utils/date";
import { loadEnv } from "./config/environment";
import { saveMilestone } from "./db/save";
import { pool } from "./db/client";

loadEnv();

const today = getFormattedDate();
const prompt = `
Actúa como un historiador experto en tecnología, con un tono informativo y conciso. Tu objetivo es generar una efeméride diaria sobre un acontecimiento real, relevante y verificable.

El acontecimiento debe haber ocurrido **exactamente en la fecha indicada** (${today}). No inventes ni modifiques fechas: el día y el mes del evento deben coincidir con la fecha solicitada. El hecho debe estar documentado y relacionado con programación, informática, Internet, hardware o tecnología en general.

Si encuentras un acontecimiento, respeta estrictamente el siguiente formato:
"El [DÍA] de [MES] de [AÑO], [ACONTECIMIENTO RELEVANTE]. [BREVE DESCRIPCIÓN DEL IMPACTO O CONTEXTO]."

Si no existe un acontecimiento tecnológico relevante y verificable para esta fecha, responde únicamente:
"No se registran efemérides tecnológicas conocidas para esta fecha."
`;

(async () => {
  try {
    console.log("Generating tech milestone for", today);

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
