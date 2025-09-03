import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
const server = new McpServer({
    name: "mcp-open-library",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
server.tool("search_books", "Search books using the Open Library API", {
    q: z.string().describe("The search query for books"),
}, async (args) => {
    console.error("Search Books tool received args:", args);
    const { q } = args;
    const data = await fetch(`http://openlibrary.org/search.json?q=${encodeURIComponent(q)}`);
    const json = await data.json();
    let books = [];
    if (!json || !json.docs || !Array.isArray(json.docs) || json.docs.length === 0) {
        throw new Error("Invalid response from Open Library API");
    }
    books = json.docs.map((doc) => ({
        id: doc?.lending_edition_s,
        title: doc?.title,
        authors: doc?.author_name?.join(", ") || [],
        first_publish_year: doc?.first_publish_year,
    }));
    return {
        content: [
            {
                type: "text",
                text: JSON.stringify(books),
            },
        ],
    };
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Search Books MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
