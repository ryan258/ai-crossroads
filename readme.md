# AI Crossroads Agent Chain

## Project Overview

AI Crossroads is a Node.js-based project that simulates a content creation process for a YouTube Shorts series exploring ethical, social, and technological challenges in the age of AI. The project uses a chain of AI agents to generate thought-provoking content on various AI-related topics.

## Features

- Multi-agent system for content creation
- Integration with local Ollama API for AI-powered text generation
- Markdown-formatted logging to both console and file
- Color-coded output for easy differentiation between agents
- Error handling and clean output formatting

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (Node Package Manager)
- Ollama running locally with the specified model (default: llama2:latest)

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

3. Create a `.env` file in the project root and add the following:
   ```
   API_URL=http://localhost:11434/api/generate
   MODEL_NAME=llama2:latest
   ```
   Adjust the `API_URL` and `MODEL_NAME` as needed for your Ollama setup.

## Usage

Run the script using Node.js:

```
node ai-crossroads-agent-chain.mjs
```

This will start the content creation process for a default topic. The output will be displayed in the console and saved to `crossroads.log` in the project directory.

## Project Structure

- `ai-crossroads-agent-chain.mjs`: Main script containing the agent chain implementation
- `crossroads.log`: Log file generated during script execution
- `.env`: Environment variables (not tracked in git)
- `package.json`: Project metadata and dependencies

## Customization

To change the topic or modify the agent chain:

1. Open `ai-crossroads-agent-chain.mjs`
2. Locate the `createAICrossroadsContent` function call in the main execution block
3. Change the argument to your desired topic
4. Modify the `Agent` instances or add new ones to customize the content creation process

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Anthropic's Claude for assistance in project development
- Ollama for providing local AI model hosting