// File: src/backend/utils/PerformanceTracker.js

class PerformanceTracker {
    constructor() {
      this.metrics = {};
      this.startTimes = {};
    }
  
    startTimer(operationName) {
      this.startTimes[operationName] = process.hrtime();
    }
  
    endTimer(operationName) {
      const endTime = process.hrtime(this.startTimes[operationName]);
      const duration = endTime[0] * 1000 + endTime[1] / 1000000; // Convert to milliseconds
      this.metrics[operationName] = duration;
    }
  
    recordTokenUsage(agentName, tokenCount) {
      this.metrics[`${agentName}TokenUsage`] = tokenCount;
    }
  
    getMetrics() {
      return { ...this.metrics };
    }
  
    resetMetrics() {
      this.metrics = {};
      this.startTimes = {};
    }
  }
  
  module.exports = PerformanceTracker;