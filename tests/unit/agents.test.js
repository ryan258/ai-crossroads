// File: tests/unit/agents.test.js

const ConceptGenerator = require('../../src/backend/agents/ConceptGenerator');
const ResearchAggregator = require('../../src/backend/agents/ResearchAggregator');
const NarrativeDesigner = require('../../src/backend/agents/NarrativeDesigner');
const VisualConceptArtist = require('../../src/backend/agents/VisualConceptArtist');
const FocusGroupSimulator = require('../../src/backend/agents/FocusGroupSimulator');
const ProjectManager = require('../../src/backend/agents/ProjectManager');
const Producer = require('../../src/backend/agents/Producer');

// Mock the OllamaIntegration
jest.mock('../../src/backend/ai/OllamaIntegration', () => {
  return jest.fn().mockImplementation(() => {
    return { generateResponse: jest.fn() };
  });
});

describe('ConceptGenerator', () => {
  let conceptGenerator;

  beforeEach(() => {
    conceptGenerator = new ConceptGenerator();
    conceptGenerator.aiModel.generateResponse.mockResolvedValue('Mocked concept response');
  });

  test('generates a concept', async () => {
    const result = await conceptGenerator.process('AI ethics');
    expect(result).toBe('Mocked concept response');
    expect(conceptGenerator.aiModel.generateResponse).toHaveBeenCalled();
  });
});

describe('ResearchAggregator', () => {
  let researchAggregator;

  beforeEach(() => {
    researchAggregator = new ResearchAggregator();
    researchAggregator.aiModel.generateResponse.mockResolvedValue('Mocked research response');
  });

  test('aggregates research', async () => {
    const result = await researchAggregator.process('AI concept');
    expect(result).toHaveProperty('summary');
    expect(result).toHaveProperty('perspectives');
    expect(result).toHaveProperty('keyPoints');
    expect(researchAggregator.aiModel.generateResponse).toHaveBeenCalled();
  });
});

describe('NarrativeDesigner', () => {
  let narrativeDesigner;

  beforeEach(() => {
    narrativeDesigner = new NarrativeDesigner();
    narrativeDesigner.aiModel.generateResponse.mockResolvedValue('Hook\n\nMain point 1\n\nMain point 2\n\nConclusion');
  });

  test('designs a narrative', async () => {
    const input = { 
      concept: 'AI concept', 
      research: { summary: 'Research summary' } 
    };
    const result = await narrativeDesigner.process(input);
    expect(result).toHaveProperty('hook');
    expect(result).toHaveProperty('mainPoints');
    expect(result).toHaveProperty('conclusion');
    expect(narrativeDesigner.aiModel.generateResponse).toHaveBeenCalled();
  });
});

describe('VisualConceptArtist', () => {
  let visualConceptArtist;

  beforeEach(() => {
    visualConceptArtist = new VisualConceptArtist();
    visualConceptArtist.aiModel.generateResponse.mockResolvedValue('Style\n\nKey elements\n\nTransitions\n\nText and graphics');
  });

  test('creates a visual concept', async () => {
    const input = {
      hook: 'Hook',
      mainPoints: ['Point 1', 'Point 2'],
      conclusion: 'Conclusion'
    };
    const result = await visualConceptArtist.process(input);
    expect(result).toHaveProperty('overallStyle');
    expect(result).toHaveProperty('keyElements');
    expect(result).toHaveProperty('transitions');
    expect(result).toHaveProperty('textAndGraphics');
    expect(visualConceptArtist.aiModel.generateResponse).toHaveBeenCalled();
  });
});

describe('FocusGroupSimulator', () => {
  let focusGroupSimulator;

  beforeEach(() => {
    focusGroupSimulator = new FocusGroupSimulator();
    focusGroupSimulator.aiModel.generateResponse.mockResolvedValue('Bias feedback\n\nClarity feedback\n\nVisual feedback\n\nImpact feedback');
  });

  test('simulates a focus group', async () => {
    const input = {
      concept: 'Concept',
      research: { summary: 'Research summary' },
      narrative: { hook: 'Hook', mainPoints: ['Point 1'], conclusion: 'Conclusion' },
      visualConcept: { overallStyle: 'Style', keyElements: 'Elements' }
    };
    const result = await focusGroupSimulator.process(input);
    expect(result).toHaveProperty('biasAndLeadingContent');
    expect(result).toHaveProperty('narrativeClarity');
    expect(result).toHaveProperty('visualAppropriatenessÀ');
    expect(result).toHaveProperty('overallImpact');
    expect(focusGroupSimulator.aiModel.generateResponse).toHaveBeenCalled();
  });
});

describe('ProjectManager', () => {
  let projectManager;

  beforeEach(() => {
    projectManager = new ProjectManager();
    projectManager.aiModel.generateResponse.mockResolvedValue('Script\n\nVisual directions\n\nEthical considerations\n\nAdditional notes');
  });

  test('manages the project', async () => {
    const input = {
      concept: 'Concept',
      research: { summary: 'Research summary' },
      narrative: { hook: 'Hook', mainPoints: ['Point 1'], conclusion: 'Conclusion' },
      visualConcept: { overallStyle: 'Style', keyElements: 'Elements' },
      focusGroupFeedback: { biasAndLeadingContent: 'Feedback', narrativeClarity: 'Feedback', visualAppropriatenessÀ: 'Feedback', overallImpact: 'Feedback' }
    };
    const result = await projectManager.process(input);
    expect(result).toHaveProperty('script');
    expect(result).toHaveProperty('visualDirections');
    expect(result).toHaveProperty('ethicalConsiderations');
    expect(result).toHaveProperty('additionalNotes');
    expect(projectManager.aiModel.generateResponse).toHaveBeenCalled();
  });
});

describe('Producer', () => {
  let producer;

  beforeEach(() => {
    producer = new Producer();
    producer.aiModel.generateResponse.mockResolvedValue('Assessment\n\nAlignment\n\nSuitability\n\nTweaks\n\nApproved\n\nReasons');
  });

  test('reviews and approves content', async () => {
    const input = {
      script: 'Script',
      visualDirections: 'Directions',
      ethicalConsiderations: 'Considerations',
      additionalNotes: 'Notes'
    };
    const result = await producer.process(input);
    expect(result).toHaveProperty('overallAssessment');
    expect(result).toHaveProperty('alignmentCheck');
    expect(result).toHaveProperty('platformSuitability');
    expect(result).toHaveProperty('suggestedTweaks');
    expect(result).toHaveProperty('approvalDecision');
    expect(result).toHaveProperty('reasonsForDecision');
    expect(producer.aiModel.generateResponse).toHaveBeenCalled();
  });
});