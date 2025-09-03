# MCP Server Boilerplate: Search Books

This project is a boilerplate MCP (Model Context Protocol) server for searching books. It is built with TypeScript and Node.js.

## Prerequisites

- Node.js (v16 or above recommended)
- npm (comes with Node.js)

## Setup Instructions

1. **Clone the repository**

   ```zsh
   git clone <repository-url>
   cd mcp-server-boilerplate-search-books
   ```

2. **Install dependencies**

   ```zsh
   npm install
   ```

3. **Build the project**

   ```zsh
   npm run build
   ```
   - Compiles TypeScript files from `src/` to JavaScript in `build/`.

4. **Start the server**

   ```zsh
   npm start
   ```
   - Runs the compiled server from `build/index.js`.

5. **Development mode (auto-reload on changes)**

   ```zsh
   npm run dev
   ```
   - Uses `ts-node-dev` or similar to run the server directly from TypeScript source with hot-reloading.

   ## Debugging with MCP Inspector

   MCP Inspector is a tool for debugging and inspecting MCP servers.

   ### Steps to use MCP Inspector:

   1. **Install MCP Inspector extension in VS Code**
      - Search for `MCP Inspector` in the Extensions Marketplace and install it.

   2. **Start your MCP server locally**
      - Use `npm start` or `npm run dev` as described above.

   3. **Open MCP Inspector**
      - Open the command palette (`Cmd+Shift+P`), type `MCP Inspector: Open Inspector` and select it.

   4. **Connect to your MCP server**
      - Enter the local server address (e.g., `http://localhost:3000`) in the inspector UI.
      - You can now inspect requests, responses, and debug your MCP server interactively.

## Available Commands

| Command         | Usage                                      |
|----------------|---------------------------------------------|
| `npm install`  | Installs all dependencies                   |
| `npm run build`| Compiles TypeScript to JavaScript           |
| `npm start`    | Starts the server from compiled JS          |
| `npm run dev`  | Starts the server in development mode       |

## Configuration

- Main source code: `src/index.ts`
- Build output: `build/index.js`
- TypeScript config: `tsconfig.json`
- Package config: `package.json`

## Notes

- Ensure you have the required Node.js version installed.
- For custom configuration, edit the files in the `.vscode/` directory or `package.json` as needed.

## License

MIT
