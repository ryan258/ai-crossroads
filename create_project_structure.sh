#!/bin/bash

# Create root directory
mkdir -p ai-crossroads
cd ai-crossroads

# Create README and config files
touch README.md package.json .gitignore

# Create src directory and subdirectories
mkdir -p src/{backend/{agents,ai,utils},frontend/{components,pages,styles},config}

# Create backend files
touch src/backend/AgentChain.js src/backend/server.js
touch src/backend/agents/{ConceptGenerator,ResearchAggregator,NarrativeDesigner,VisualConceptArtist,FocusGroupSimulator,ProjectManager,Producer}.js
touch src/backend/ai/OllamaIntegration.js
touch src/backend/utils/{Logger,PerformanceTracker}.js

# Create frontend files
touch src/frontend/components/{AgentOutput,InputForm,ResultDisplay}.js
touch src/frontend/pages/MainPage.js
touch src/frontend/styles/tailwind.css
touch src/frontend/App.js

# Create config file
touch src/config/config.js

# Create test directories and files
mkdir -p tests/{unit,integration}
touch tests/unit/agents.test.js
touch tests/integration/agentChain.test.js

# Create logs directory
mkdir -p logs
touch logs/.gitkeep

echo "Project structure for AI Crossroads has been created."