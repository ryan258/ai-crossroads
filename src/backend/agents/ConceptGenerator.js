// File: src/backend/agents/ConceptGenerator.js

const Agent = require('./Agent');

class ConceptGenerator extends Agent {
  constructor() {
    super('ConceptGenerator');
  }

  async _processLogic(input) {
    const prompt = `Generate an AI-related scenario or ethical dilemma based on the following input: "${input}". 
    The scenario should be thought-provoking and suitable for a short-form video content. 
    Include potential implications and stakeholders involved.`;

    const response = await this.generateResponse(prompt);

    // Extract the main concept from the response
    const concept = this._extractConcept(response);

    return concept;
  }

  _extractConcept(response) {
    // In a more advanced implementation, we might use NLP techniques here
    // For now, we'll assume the entire response is our concept
    return response.trim();
  }
}

module.exports = ConceptGenerator;