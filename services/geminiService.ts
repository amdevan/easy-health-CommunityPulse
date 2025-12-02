import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateHealthResponse = async (
  userMessage: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Format history for the API
    const systemPrompt = `You are "CommunityPulse AI", a helpful public health assistant. 
    Your goal is to assist users in finding health camps, becoming a volunteer, and providing general public health advice.
    Be concise, empathetic, and professional. 
    If the user asks for medical diagnosis, kindly refuse and advise them to visit a doctor or one of our camps.
    
    Context about the platform:
    - We offer free Health Camps (Dental, General, Eye Care).
    - We partner with Municipalities for large scale outreach.
    - **NEW:** We are actively recruiting volunteers (Doctors, Nurses, Logistics Support). Users can sign up on the "Volunteer" page.
    `;

    // Construct a prompt with history
    const conversation = history.map(h => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.text}`).join('\n');
    const fullPrompt = `${systemPrompt}\n\nPrevious conversation:\n${conversation}\n\nUser: ${userMessage}\nAssistant:`;

    const response = await ai.models.generateContent({
      model,
      contents: fullPrompt,
    });

    return response.text || "I apologize, I'm having trouble connecting to the health database right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I encountered an error while processing your request. Please try again later.";
  }
};