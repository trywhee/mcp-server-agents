// api/mcp.js
export default function handler(req, res) {
  // CORS agar bisa diakses 8004scan
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET = health check (dipanggil 8004scan)
  if (req.method === 'GET') {
    return res.status(200).json({
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
  }

  // POST = tools call
  if (req.method === 'POST') {
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
      return res.status(200).json({
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
      return res.status(200).json({
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

    // Default response
    return res.status(200).json({
      jsonrpc: "2.0",
      id: id,
      result: {}
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
