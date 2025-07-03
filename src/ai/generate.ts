import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function generateTechMilestone(
  prompt: string
): Promise<{ text: string; model: string }> {
  const model = "gemini-2.0-flash";
  const { text } = await generateText({
    model: google(model),
    prompt,
  });

  return { text, model };
}
