import { generateTechMilestone } from "./ai/generate";
import { getFormattedDate } from "./utils/date";
import { loadEnv } from "./config/environment";

loadEnv();

const today = getFormattedDate();
const prompt = `Genera una efeméride corta y relevante en español sobre programación o tecnología para la fecha ${today}. El formato debe ser: "El [FECHA COMPLETA], [ACONTECIMIENTO RELEVANTE]. [BREVE DESCRIPCIÓN DEL IMPACTO O CONTEXTO]."`;

(async () => {
  try {
    const { text, model } = await generateTechMilestone(prompt);
  } catch (err) {
    console.error("Failed to generate tech milestone", err);
    process.exit(1);
  }
})();
