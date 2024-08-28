// File: src/backend/server.js

const express = require('express');
const AgentChain = require('./AgentChain');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// TODO: Implement routes for interacting with the AgentChain

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});