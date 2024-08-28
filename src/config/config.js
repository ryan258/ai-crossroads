// File: src/config/config.js

require('dotenv').config(); // Assuming you'll use dotenv for environment variables

const config = {
  // Server configuration
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
  },

  // Database configuration (if needed in the future)
  database: {
    // url: process.env.DATABASE_URL,
    // TODO: Add other database-related configurations
  },

  // AI model configuration
  aiModel: {
    type: 'ollama',
    model: 'llama3.1:latest',
    // TODO: Add any other AI model-specific configurations
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    // TODO: Add any other logging-related configurations
  },

  // Performance tracking configuration
  performanceTracking: {
    enabled: process.env.ENABLE_PERFORMANCE_TRACKING === 'true' || false,
    // TODO: Add any other performance tracking-related configurations
  },

  // Agent-specific configurations
  agents: {
    // TODO: Add any agent-specific configurations
    // Example:
    // conceptGenerator: {
    //   maxTokens: 100,
    // },
  },

  // TODO: Add any other project-wide configurations as needed
};

module.exports = config;