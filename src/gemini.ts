declare const process: { env: Record<string, string | undefined> };

type GeminiClient = {
  models: {
    generateContent(input: { model: string; contents: string }): Promise<unknown>;
  };
};

export async function answer(client: GeminiClient, contents: string): Promise<unknown> {
  return client.models.generateContent({
    model: process.env.GEMINI_MODEL ?? "gemini-2.5-flash",
    contents,
  });
}
