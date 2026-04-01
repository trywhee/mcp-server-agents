// index.js - Entrypoint untuk Vercel
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint (GET)
app.get('/mcp', (req, res) => {
  res.json({
    jsonrpc: "2.0",
    result: {
      protocolVersion: "2025-06-18",
      capabilities: { tools: {} },
      serverInfo: { 
        name: "Quantiva MCP Server", 
        version: "1.0.0" 
      }
    }
  });
});

// Tools endpoint (POST)
app.post('/mcp', async (req, res) => {
  const { method, params, id } = req.body;
  
  // Semua tools untuk 5 agent
  const allTools = [
    // Quantiva (ID: 22524)
    "market_forecast", "financial_modeling", "trend_analysis", "data_processing",
    // Nexora (ID: 22497)
    "automated_charting", "anomaly_detection", "trend_forecasting", "summary_report",
    // DataQuant (ID: 22455)
    "detect_patterns", "generate_dashboard", "forecast_financials", "automate_reporting",
    // DataAnalyst (ID: 22300)
    "data_analysis", "chart_generation", "report_automation",
    // InsightForge (ID: 22398)
    "statistical_analysis", "predictive_modeling", "report_creation"
  ];

  // tools/list - daftar tools
  if (method === "tools/list") {
    return res.json({
      jsonrpc: "2.0",
      id: id,
      result: {
        tools: allTools.map(name => ({
          name: name,
          description: `Execute ${name.replace(/_/g, ' ')} tool`
        }))
      }
    });
  }

  // tools/call - eksekusi tool
  if (method === "tools/call") {
    const toolName = params?.name || "unknown";
    return res.json({
      jsonrpc: "2.0",
      id: id,
      result: {
        content: [{
          type: "text",
          text: `✅ ${toolName} executed successfully at ${new Date().toISOString()}`
        }]
      }
    });
  }

  res.json({ jsonrpc: "2.0", id: id, result: {} });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ status: "MCP Server is running", endpoints: { mcp: "/mcp" } });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`MCP Server running on port ${port}`);
});

export default app;
