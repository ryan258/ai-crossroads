// File: src/frontend/components/AgentOutput.js

import React from 'react';

const AgentOutput = ({ agentName, output }) => {
  // TODO: Implement color coding based on agent type
  return (
    <div className="mb-4 p-4 border rounded">
      <h3 className="font-bold mb-2">{agentName}</h3>
      <pre className="whitespace-pre-wrap">{output}</pre>
    </div>
  );
};

export default AgentOutput;