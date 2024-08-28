// File: src/frontend/components/InputForm.js

import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add input validation if necessary
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your AI-related scenario or ethical dilemma..."
        className="w-full p-2 border rounded"
        rows="4"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default InputForm;