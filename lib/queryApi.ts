import openai from './chatgpt';

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.5, // Lower the temperature to make the output more focused and deterministic
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.5, // Increase the frequency_penalty to discourage repetitive or common phrases
      presence_penalty: 0.5, // Increase the presence_penalty to encourage the model to provide more relevant information
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );

  return res;
};

export default query;
