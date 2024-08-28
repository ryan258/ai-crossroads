// File: src/frontend/components/ResultDisplay.js

import React from 'react';
import AgentOutput from './AgentOutput';

const ResultDisplay = ({ results }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Results</h2>
      {results.map((result, index) => (
        <AgentOutput key={index} agentName={result.agentName} output={result.output} />
      ))}
    </div>
  );
};

export default ResultDisplay;