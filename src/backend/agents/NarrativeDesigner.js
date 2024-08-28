// File: src/backend/agents/NarrativeDesigner.js

const Agent = require('./Agent');

class NarrativeDesigner extends Agent {
  constructor() {
    super('NarrativeDesigner');
  }

  async _processLogic(input) {
    const concept = typeof input === 'string' ? input : input.concept || '';
    const researchSummary = input.research?.summary || 'No research summary available';

    const prompt = `Design a compelling short-form narrative based on the following concept and research:
    Concept: "${concept}"
    Research Summary: "${researchSummary}"
    
    The narrative should be engaging, thought-provoking, and suitable for a short video format (about 60 seconds).
    Include a hook, main points, and a conclusion that encourages further thought or discussion.`;

    const response = await this.generateResponse(prompt);

    // Structure the narrative
    const structuredNarrative = this._structureNarrative(response);

    return structuredNarrative;
  }

  _structureNarrative(response) {
    // In a more advanced implementation, we might use NLP to extract narrative elements
    // For now, we'll structure it manually
    const parts = response.split('\n\n');
    return {
      hook: parts[0] || '',
      mainPoints: parts.slice(1, -1) || [],
      conclusion: parts[parts.length - 1] || ''
    };
  }
}

module.exports = NarrativeDesigner;