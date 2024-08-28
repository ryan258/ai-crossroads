// File: src/backend/agents/FocusGroupSimulator.js

const Agent = require('./Agent');

class FocusGroupSimulator extends Agent {
  constructor() {
    super('FocusGroupSimulator');
  }

  async _processLogic(input) {
    const { concept, research, narrative, visualConcept } = input;
    const prompt = `Act as a diverse focus group reviewing the following content for a short-form AI ethics video:
    Concept: "${concept}"
    Research Summary: "${research.summary}"
    Narrative:
      Hook: "${narrative.hook}"
      Main Points: "${narrative.mainPoints.join(', ')}"
      Conclusion: "${narrative.conclusion}"
    Visual Concept:
      Style: "${visualConcept.overallStyle}"
      Key Elements: "${visualConcept.keyElements}"
    
    Provide feedback on:
    1. Potential biases or leading content
    2. Clarity and engagement of the narrative
    3. Appropriateness of visual elements
    4. Overall impact and thought-provoking nature of the content
    
    Give both positive feedback and constructive criticism.`;

    const response = await this.generateResponse(prompt);

    // Structure the feedback
    const structuredFeedback = this._structureFeedback(response);

    return structuredFeedback;
  }

  _structureFeedback(response) {
    // In a more advanced implementation, we might use NLP to extract and categorize feedback
    // For now, we'll structure it manually
    const parts = response.split('\n\n');
    return {
      biasAndLeadingContent: parts[0] || '',
      narrativeClarity: parts[1] || '',
      visualAppropriatenessÀ: parts[2] || '',
      overallImpact: parts[3] || ''
    };
  }
}

module.exports = FocusGroupSimulator;