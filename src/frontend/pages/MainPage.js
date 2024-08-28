// File: src/frontend/pages/MainPage.js

import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import ResultDisplay from '../components/ResultDisplay';

const MainPage = () => {
  const [results, setResults] = useState([]);

  const handleSubmit = async (input) => {
    // TODO: Implement API call to backend
    // For now, we'll just add a dummy result
    setResults([
      ...results,
      { agentName: 'Dummy Agent', output: `Processed: ${input}` }
    ]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Crossroads Agent Chain</h1>
      <InputForm onSubmit={handleSubmit} />
      <ResultDisplay results={results} />
    </div>
  );
};

export default MainPage;