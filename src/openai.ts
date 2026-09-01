type OpenAIClient = {
  responses: {
    create(input: { model: string; input: string }): Promise<unknown>;
  };
};

export async function summarize(client: OpenAIClient, input: string): Promise<unknown> {
  return client.responses.create({ model: "gpt-5.5", input });
}
