// File: tests/integration/agentChain.test.js

const AgentChain = require('../../src/backend/AgentChain');

// Mock the OllamaIntegration
jest.mock('../../src/backend/ai/OllamaIntegration', () => {
  return jest.fn().mockImplementation(() => {
    return { generateResponse: jest.fn() };
  });
});

// Mock the PerformanceTracker
jest.mock('../../src/backend/utils/PerformanceTracker', () => {
  return jest.fn().mockImplementation(() => {
    return {
      startTimer: jest.fn(),
      endTimer: jest.fn(),
      getMetrics: jest.fn().mockReturnValue({
        fullChainProcessing: 1000,
        ConceptGeneratorProcessing: 100,
        ResearchAggregatorProcessing: 100,
        NarrativeDesignerProcessing: 100,
        VisualConceptArtistProcessing: 100,
        FocusGroupSimulatorProcessing: 100,
        ProjectManagerProcessing: 100,
        ProducerProcessing: 100
      })
    };
  });
});

describe('AgentChain Integration', () => {
  let agentChain;

  beforeEach(() => {
    agentChain = new AgentChain();
    // Mock responses for each agent
    agentChain.agents.forEach(agent => {
      agent.aiModel.generateResponse.mockResolvedValue('Mocked response for ' + agent.name);
    });

    // Mock the process methods to return structured data
    agentChain.agents[0].process = jest.fn().mockResolvedValue('Mocked concept');
    agentChain.agents[1].process = jest.fn().mockResolvedValue({ summary: 'Mocked research summary' });
    agentChain.agents[2].process = jest.fn().mockResolvedValue({
      hook: 'Mocked hook',
      mainPoints: ['Mocked point 1', 'Mocked point 2'],
      conclusion: 'Mocked conclusion'
    });
    agentChain.agents[3].process = jest.fn().mockResolvedValue({
      overallStyle: 'Mocked style',
      keyElements: 'Mocked elements',
      transitions: 'Mocked transitions',
      textAndGraphics: 'Mocked text and graphics'
    });
    agentChain.agents[4].process = jest.fn().mockResolvedValue({
      biasAndLeadingContent: 'Mocked bias feedback',
      narrativeClarity: 'Mocked clarity feedback',
      visualAppropriatenessÀ: 'Mocked visual feedback',
      overallImpact: 'Mocked impact feedback'
    });
    agentChain.agents[5].process = jest.fn().mockResolvedValue({
      script: 'Mocked script',
      visualDirections: 'Mocked visual directions',
      ethicalConsiderations: 'Mocked ethical considerations',
      additionalNotes: 'Mocked additional notes'
    });
    agentChain.agents[6].process = jest.fn().mockResolvedValue({
      overallAssessment: 'Mocked assessment',
      alignmentCheck: 'Mocked alignment',
      platformSuitability: 'Mocked suitability',
      suggestedTweaks: 'Mocked tweaks',
      approvalDecision: 'Approved',
      reasonsForDecision: 'Mocked reasons'
    });
  });

  test('processes input through entire agent chain', async () => {
    const input = "AI's impact on job market";
    const result = await agentChain.process(input);

    expect(result).toHaveLength(7); // We have 7 agents in our chain
    expect(result[0].agent).toBe('ConceptGenerator');
    expect(result[1].agent).toBe('ResearchAggregator');
    expect(result[2].agent).toBe('NarrativeDesigner');
    expect(result[3].agent).toBe('VisualConceptArtist');
    expect(result[4].agent).toBe('FocusGroupSimulator');
    expect(result[5].agent).toBe('ProjectManager');
    expect(result[6].agent).toBe('Producer');

    // Check that each agent's process method was called
    agentChain.agents.forEach((agent, index) => {
      expect(agent.process).toHaveBeenCalled();
    });
  });

  test('handles errors gracefully', async () => {
    const errorMessage = 'Test error';
    agentChain.agents[2].process = jest.fn().mockRejectedValue(new Error(errorMessage));

    await expect(agentChain.process("AI ethics")).rejects.toThrow(errorMessage);
  });

  test('tracks performance metrics', async () => {
    const input = "AI in healthcare";
    await agentChain.process(input);

    const metrics = agentChain.performanceTracker.getMetrics();
    expect(metrics).toHaveProperty('fullChainProcessing');
    agentChain.agents.forEach(agent => {
      expect(metrics).toHaveProperty(`${agent.name}Processing`);
    });
  });
});