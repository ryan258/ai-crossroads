// File: /path/to/your/project/ai-crossroads-agent-chain.mjs

import dotenv from 'dotenv';
import axios from 'axios';
import { createRequire } from 'module';
import fs from 'fs/promises';
import path from 'path';

const require = createRequire(import.meta.url);

dotenv.config();

const API_URL = process.env.API_URL;
const MODEL_NAME = process.env.MODEL_NAME;
const LOG_FILE = 'crossroads.log';

let chalk;

// Function to clean the log message
function cleanLogMessage(message) {
  // Remove ANSI escape sequences
  message = message.replace(/\x1B\[[0-9;]*[JKmsu]/g, '');
  
  // Remove other unwanted characters (like [39m, [34m, etc.)
  message = message.replace(/\[\d+m/g, '');
  
  // Trim any extra whitespace
  message = message.trim();
  
  return message;
}

// Custom console logger that writes clean Markdown to both console and file
const logger = {
  log: async (...args) => {
    const cleanMessage = cleanLogMessage(args.join(' '));
    console.log(cleanMessage);
    await appendToLog(cleanMessage);
  },
  error: async (...args) => {
    const cleanMessage = cleanLogMessage(args.join(' '));
    console.error(cleanMessage);
    await appendToLog(cleanMessage);
  }
};

async function appendToLog(message) {
  try {
    await fs.appendFile(LOG_FILE, message + '\n\n');
  } catch (error) {
    console.error('Error writing to log file:', error);
  }
}

class Agent {
  constructor(name, task, color) {
    this.name = name;
    this.task = task;
    this.color = color;
  }

  async execute(input) {
    await logger.log(`${this.name} is executing: ${this.task}`);
    
    try {
      const response = await axios.post(API_URL, {
        model: MODEL_NAME,
        prompt: `You are ${this.name}. Your task is to ${this.task}. 
                 Input: ${input}
                 Please provide your output:`,
        stream: false
      });

      const result = response.data.response;
      await logger.log(`${this.name} output: ${result}`);
      return result;
    } catch (error) {
      await logger.error(`Error in ${this.name}: ${error.message}`);
      throw error;
    }
  }
}

class AgentChain {
  constructor() {
    this.agents = [];
  }

  addAgent(agent) {
    this.agents.push(agent);
  }

  async execute(input) {
    let currentInput = input;
    for (const agent of this.agents) {
      currentInput = await agent.execute(currentInput);
    }
    return currentInput;
  }
}

// Create specific agents for AI Crossroads tasks
const conceptDevelopmentAgent = new Agent("Concept Developer", "Brainstorm AI-related scenarios and ethical dilemmas", "blue");
const researchAgent = new Agent("Researcher", "Explore multiple perspectives on the topic", "green");
const scriptingAgent = new Agent("Scriptwriter", "Develop concise, impactful scripts for each short", "yellow");
const visualDesignAgent = new Agent("Visual Designer", "Create simple yet effective visuals", "magenta");
const productionAgent = new Agent("Producer", "Combine visuals, animation, and audio", "cyan");
const postProductionAgent = new Agent("Post-Production Editor", "Add final touches and ensure optimal pacing", "white");

// Create the agent chain
const aiCrossroadsChain = new AgentChain();

// Add agents to the chain
aiCrossroadsChain.addAgent(conceptDevelopmentAgent);
aiCrossroadsChain.addAgent(researchAgent);
aiCrossroadsChain.addAgent(scriptingAgent);
aiCrossroadsChain.addAgent(visualDesignAgent);
aiCrossroadsChain.addAgent(productionAgent);
aiCrossroadsChain.addAgent(postProductionAgent);

// Function to start the content creation process
async function createAICrossroadsContent(topic) {
  await logger.log("Starting AI Crossroads content creation process...");
  try {
    const result = await aiCrossroadsChain.execute(topic);
    await logger.log("Content creation process completed:");
    await logger.log(result);
  } catch (error) {
    await logger.error(`Error in content creation process: ${error.message}`);
  }
}

// Function to log color artifacts
async function logColorArtifacts() {
  await logger.log("# Color Artifacts");
  await logger.log("- **Blue**: Concept Developer");
  await logger.log("- **Green**: Researcher");
  await logger.log("- **Yellow**: Scriptwriter");
  await logger.log("- **Magenta**: Visual Designer");
  await logger.log("- **Cyan**: Producer");
  await logger.log("- **White**: Post-Production Editor");
}

// Main execution
(async () => {
  // Dynamically import chalk
  chalk = (await import('chalk')).default;

  // Clear the log file before starting
  try {
    await fs.writeFile(LOG_FILE, '');
  } catch (error) {
    console.error('Error clearing log file:', error);
  }

  // Example usage
  await createAICrossroadsContent("The impact of AI-powered prediction on free will and destiny");

  // Log color artifacts
  await logColorArtifacts();
})();