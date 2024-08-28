// File: src/backend/AgentChain.js

const ConceptGenerator = require('./agents/ConceptGenerator');
const ResearchAggregator = require('./agents/ResearchAggregator');
const NarrativeDesigner = require('./agents/NarrativeDesigner');
const VisualConceptArtist = require('./agents/VisualConceptArtist');
const FocusGroupSimulator = require('./agents/FocusGroupSimulator');
const ProjectManager = require('./agents/ProjectManager');
const Producer = require('./agents/Producer');
const Logger = require('./utils/Logger');
const PerformanceTracker = require('./utils/PerformanceTracker');

class AgentChain {
  constructor() {
    this.agents = [
      new ConceptGenerator(),
      new ResearchAggregator(),
      new NarrativeDesigner(),
      new VisualConceptArtist(),
      new FocusGroupSimulator(),
      new ProjectManager(),
      new Producer()
    ];
    this.logger = new Logger();
    this.performanceTracker = new PerformanceTracker();
  }

  async process(input) {
    this.logger.log('AgentChain', 'process', `Starting agent chain processing for input: ${input}`);
    this.performanceTracker.startTimer('fullChainProcessing');

    let currentInput = input;
    const allOutputs = [];

    for (const agent of this.agents) {
      this.performanceTracker.startTimer(`${agent.name}Processing`);
      try {
        const output = await agent.process(currentInput);
        allOutputs.push({ agent: agent.name, output });
        currentInput = output; // The output of one agent becomes the input for the next
        this.performanceTracker.endTimer(`${agent.name}Processing`);
      } catch (error) {
        this.logger.log('AgentChain', 'error', `Error in ${agent.name}: ${error.message}`);
        throw error;
      }
    }

    this.performanceTracker.endTimer('fullChainProcessing');
    const metrics = this.performanceTracker.getMetrics();
    this.logger.log('AgentChain', 'metrics', JSON.stringify(metrics));

    return allOutputs;
  }
}

module.exports = AgentChain;