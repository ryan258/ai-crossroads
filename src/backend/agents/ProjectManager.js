// File: src/backend/agents/ProjectManager.js

const Agent = require('./Agent');

class ProjectManager extends Agent {
  constructor() {
    super('ProjectManager');
  }

  async _processLogic(input) {
    const { concept, research, narrative, visualConcept, focusGroupFeedback } = input;
    const prompt = `As a project manager, create a final draft for a short-form AI ethics video based on the following inputs:
    Concept: "${concept}"
    Research Summary: "${research.summary}"
    Narrative:
      Hook: "${narrative.hook}"
      Main Points: "${narrative.mainPoints.join(', ')}"
      Conclusion: "${narrative.conclusion}"
    Visual Concept:
      Style: "${visualConcept.overallStyle}"
      Key Elements: "${visualConcept.keyElements}"
    Focus Group Feedback:
      Bias and Leading Content: "${focusGroupFeedback.biasAndLeadingContent}"
      Narrative Clarity: "${focusGroupFeedback.narrativeClarity}"
      Visual Appropriateness: "${focusGroupFeedback.visualAppropriatenessÀ}"
      Overall Impact: "${focusGroupFeedback.overallImpact}"
    
    Create a final draft that:
    1. Incorporates the strengths identified in the focus group feedback
    2. Addresses any concerns or criticisms from the feedback
    3. Ensures a coherent and engaging narrative
    4. Aligns visual elements with the content effectively
    5. Maintains ethical considerations and minimizes bias
    
    Provide a detailed outline of the video content, including script and visual directions.`;

    const response = await this.generateResponse(prompt);

    // Structure the final draft
    const structuredFinalDraft = this._structureFinalDraft(response);

    return structuredFinalDraft;
  }

  _structureFinalDraft(response) {
    // In a more advanced implementation, we might use NLP to extract and structure the final draft
    // For now, we'll structure it manually
    const parts = response.split('\n\n');
    return {
      script: parts[0] || '',
      visualDirections: parts[1] || '',
      ethicalConsiderations: parts[2] || '',
      additionalNotes: parts[3] || ''
    };
  }
}

module.exports = ProjectManager;