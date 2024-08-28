// File: src/backend/agents/Producer.js

const Agent = require('./Agent');

class Producer extends Agent {
  constructor() {
    super('Producer');
  }

  async _processLogic(finalDraft) {
    const prompt = `As a producer, review and approve the following final draft for a short-form AI ethics video:
    Script: "${finalDraft.script}"
    Visual Directions: "${finalDraft.visualDirections}"
    Ethical Considerations: "${finalDraft.ethicalConsiderations}"
    Additional Notes: "${finalDraft.additionalNotes}"
    
    Provide a final review that:
    1. Assesses the overall quality and impact of the content
    2. Ensures alignment with the original concept and ethical considerations
    3. Verifies the suitability for the target platform (YouTube Shorts)
    4. Suggests any final tweaks or improvements
    5. Gives a final approval decision (Approved / Needs Revision / Rejected)
    
    If approval is not given, provide clear reasons and suggestions for improvement.`;

    const response = await this.generateResponse(prompt);

    // Structure the review and approval
    const structuredReview = this._structureReview(response);

    return structuredReview;
  }

  _structureReview(response) {
    // In a more advanced implementation, we might use NLP to extract and structure the review
    // For now, we'll structure it manually
    const parts = response.split('\n\n');
    return {
      overallAssessment: parts[0] || '',
      alignmentCheck: parts[1] || '',
      platformSuitability: parts[2] || '',
      suggestedTweaks: parts[3] || '',
      approvalDecision: parts[4] || '',
      reasonsForDecision: parts[5] || ''
    };
  }
}

module.exports = Producer;