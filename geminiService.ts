import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

// Initialize Gemini API Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Translates text or extracts text from an image and translates it.
 * Acts as a strict translation engine.
 */
export const translateContent = async (
  text: string,
  imageBase64: string | null,
  targetLanguage: Language
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Strict, robotic instruction for direct translation utility
    let promptText = `TASK: Translate content to ${targetLanguage}.
    MODE: Strict Direct Translation.
    
    INPUT DATA:
    `;

    const parts: any[] = [];

    if (imageBase64) {
      const base64Data = imageBase64.split(',')[1];
      parts.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Data
        }
      });
      promptText += "[IMAGE CONTENT CONTAINING TEXT]";
    } else {
      promptText += `"${text}"`;
    }

    promptText += `
    
    OUTPUT REQUIREMENTS:
    1. Return ONLY the translated string.
    2. NO explanations. NO conversational filler. NO markdown.
    3. If image text is detected, translate it directly.
    4. If input is empty/invalid, return "NO_DATA".
    `;

    parts.push({ text: promptText });

    const response = await ai.models.generateContent({
      model: model,
      contents: { parts: parts },
      config: {
        temperature: 0.0, // Zero temperature for maximum determinism (robotic behavior)
        topK: 1,
        topP: 0.1,
      }
    });

    const result = response.text?.trim();
    if (!result || result === "NO_DATA") {
      return "لم يتم العثور على نص للترجمة.";
    }
    return result;

  } catch (error) {
    console.error("Translation engine error:", error);
    throw new Error("حدث خطأ في خدمة الترجمة. تحقق من الاتصال.");
  }
};