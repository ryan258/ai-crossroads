// File: src/backend/agents/Agent.js

const OllamaIntegration = require('../ai/OllamaIntegration');
const Logger = require('../utils/Logger');

class Agent {
  constructor(name) {
    this.name = name;
    this.aiModel = new OllamaIntegration();
    this.logger = new Logger();
  }

  async process(input) {
    this.logger.log(this.name, 'process', `Starting processing for input: ${input}`);
    try {
      const result = await this._processLogic(input);
      this.logger.log(this.name, 'process', `Finished processing. Result: ${result}`);
      return result;
    } catch (error) {
      this.logger.log(this.name, 'error', `Error during processing: ${error.message}`);
      throw error;
    }
  }

  async _processLogic(input) {
    // This method should be overridden by subclasses
    throw new Error('_processLogic must be implemented by subclasses');
  }

  async generateResponse(prompt) {
    return await this.aiModel.generateResponse(prompt);
  }
}

module.exports = Agent;