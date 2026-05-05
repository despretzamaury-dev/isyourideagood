"use server";

export async function analyzeIdea(idea: string) {
  const prompt = `Tu es un conseiller en startup et un investisseur brutalement honnête et très analytique.
Ton objectif est d'évaluer l'idée de startup de l'utilisateur de manière objective. Ne te contente PAS d'être d'accord avec l'utilisateur. Challenge l'idée, trouve ses failles et fournis une évaluation réaliste.

Tu dois répondre UNIQUEMENT avec un objet JSON valide correspondant exactement à cette structure en FRANÇAIS :
{
  "score100": number, // Note globale de viabilité sur 100
  "score25": number, // Une note stricte sur une échelle de 25
  "flaws": [string], // Liste de 3 à 5 failles potentielles, risques et faiblesses
  "marketNeed": string, // Analyse honnête du vrai besoin du marché (ou de son absence)
  "competition": string, // Analyse de la concurrence existante ou potentielle
  "roadmap": [ // Une roadmap MVP pragmatique sur 2 semaines (14 éléments max)
    { "day": string, "task": string }
  ],
  "branding": [string] // 3 à 5 idées concrètes de branding (nom, ambiance, message clé)
}

Voici l'idée de l'utilisateur :
"${idea}"`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.my_api_key}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: "You are a pragmatic, brutally honest startup analyst. Always return valid JSON.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  
  if (!response.ok) {
    console.error("OpenAI Error:", data);
    throw new Error(data.error?.message || "Failed to analyze idea. Make sure your API key is valid.");
  }

  try {
    return JSON.parse(data.choices[0].message.content);
  } catch (err) {
    console.error("Failed to parse JSON:", data.choices[0].message.content);
    throw new Error("Invalid response format from AI.");
  }
}
