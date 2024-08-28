# AI Crossroads Agent Chain

## Project Overview

AI Crossroads is a Node.js-based project that simulates a content creation process for a YouTube Shorts series exploring ethical, social, and technological challenges in the age of AI. The project uses a chain of AI agents to generate thought-provoking content on various AI-related topics, focusing on speculative scenarios and potential future crossroads for humanity in relation to AI.

## Features

- Flexible, modular system of AI agents for content generation
- Command-line and web-based interfaces for user interaction
- Comprehensive logging of all agent interactions
- Performance tracking for system optimization
- Engaging and user-friendly interface with color-coded agent responses

## Technology Stack

- Backend: Node.js, Express.js
- Frontend: React.js, Tailwind CSS
- AI Model: Ollama with llama3.1:latest model

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (comes with Node.js)
- Git

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ai-crossroads.git
   cd ai-crossroads
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Tailwind CSS:
   ```
   ./install-tailwind.sh
   ```

4. Create a `.env` file in the root directory and add necessary environment variables:
   ```
   PORT=3000
   NODE_ENV=development
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. Build the Tailwind CSS file:
   ```
   npm run build:css
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
ai-crossroads/
├── src/
│   ├── backend/
│   │   ├── agents/
│   │   ├── ai/
│   │   ├── utils/
│   │   ├── AgentChain.js
│   │   └── server.js
│   ├── frontend/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.js
│   └── config/
│       └── config.js
├── tests/
├── logs/
├── package.json
├── tailwind.config.js
└── README.md
```

## Contributing

We welcome contributions to the AI Crossroads project! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [Anthropic](https://www.anthropic.com) for their work on advanced AI models
- The open-source community for providing excellent tools and libraries

## Contact

For any queries or suggestions, please open an issue on this GitHub repository.

---

Remember to update this README as your project evolves. Good luck with AI Crossroads!