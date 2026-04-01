const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ========== METADATA UNTUK SEMUA AGENT ==========
const getAllTools = () => {
  return [
    // Quantiva (ID: 22524)
    { name: "market_forecast", description: "Predict market trends using ML algorithms" },
    { name: "financial_modeling", description: "Build complex financial models" },
    { name: "trend_analysis", description: "Analyze market trends and patterns" },
    { name: "data_processing", description: "Process structured datasets (CSV, JSON)" },
    
    // Nexora (ID: 22497)
    { name: "automated_charting", description: "Generate automated charts from data" },
    { name: "anomaly_detection", description: "Detect anomalies in datasets" },
    { name: "trend_forecasting", description: "Forecast future trends" },
    { name: "summary_report", description: "Generate AI-powered summary reports" },
    
    // DataQuant (ID: 22455)
    { name: "detect_patterns", description: "Detect patterns in structured datasets" },
    { name: "generate_dashboard", description: "Generate interactive dashboards" },
    { name: "forecast_financials", description: "Forecast financial metrics" },
    { name: "automate_reporting", description: "Automate report generation" },
    
    // DataAnalyst (ID: 22300)
    { name: "data_analysis", description: "Perform advanced data analysis" },
    { name: "chart_generation", description: "Generate professional charts" },
    { name: "report_automation", description: "Automate reporting tasks" },
    
    // InsightForge (ID: 22398)
    { name: "statistical_analysis", description: "Deep statistical analysis" },
    { name: "predictive_modeling", description: "Build predictive models" },
    { name: "report_creation", description: "Create professional reports" }
  ];
};

const getAllPrompts = () => {
  return [
    { name: "forecast_report", description: "Generate market forecast report" },
    { name: "investment_analysis", description: "Analyze investment opportunities" },
    { name: "dashboard_creation", description: "Create analytics dashboard" },
    { name: "executive_summary", description: "Generate executive summary" },
    { name: "financial_forecast", description: "Financial forecasting prompt" },
    { name: "report_automation", description: "Automated reporting prompt" },
    { name: "business_intelligence", description: "Business intelligence analysis" },
    { name: "market_research", description: "Market research prompt" },
    { name: "insight_generation", description: "Generate actionable insights" },
    { name: "data_visualization", description: "Data visualization prompt" }
  ];
};

const getAllResources = () => {
  return [
    { uri: "database://market-data", name: "Market Data", description: "Real-time market data" },
    { uri: "database://financial-reports", name: "Financial Reports", description: "Historical financial reports" },
    { uri: "api://endpoints", name: "API Endpoints", description: "External API connections" },
    { uri: "csv://data", name: "CSV Data", description: "CSV dataset access" },
    { uri: "sql://database", name: "SQL Database", description: "SQL database connection" }
  ];
};

// ========== ENDPOINTS ==========

// Health check (GET) - untuk 8004scan
app.get('/mcp', (req, res) => {
  res.json({
    jsonrpc: "2.0",
    result: {
      protocolVersion: "2025-06-18",
      capabilities: { 
        tools: {},
        prompts: {},
        resources: {}
      },
      serverInfo: { 
        name: "Quantiva MCP Server", 
        version: "1.0.0" 
      }
    }
  });
});

// Main MCP endpoint (POST)
app.post('/mcp', async (req, res) => {
  try {
    const { method, params, id } = req.body;
    
    // tools/list - untuk menampilkan daftar tools
    if (method === "tools/list") {
      return res.json({
        jsonrpc: "2.0",
        id: id,
        result: {
          tools: getAllTools()
        }
      });
    }
    
    // prompts/list - untuk menampilkan daftar prompts
    if (method === "prompts/list") {
      return res.json({
        jsonrpc: "2.0",
        id: id,
        result: {
          prompts: getAllPrompts()
        }
      });
    }
    
    // resources/list - untuk menampilkan daftar resources
    if (method === "resources/list") {
      return res.json({
        jsonrpc: "2.0",
        id: id,
        result: {
          resources: getAllResources()
        }
      });
    }
    
    // tools/call - eksekusi tool
    if (method === "tools/call") {
      const toolName = params?.name || "unknown";
      const args = params?.arguments || {};
      
      let resultText = `Tool "${toolName}" executed successfully.\n`;
      resultText += `Parameters: ${JSON.stringify(args)}\n`;
      resultText += `Result: Sample data for ${toolName} at ${new Date().toISOString()}`;
      
      return res.json({
        jsonrpc: "2.0",
        id: id,
        result: {
          content: [{
            type: "text",
            text: resultText
          }]
        }
      });
    }
    
    // Default response
    res.json({ 
      jsonrpc: "2.0", 
      id: id, 
      result: {} 
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      jsonrpc: "2.0",
      error: {
        code: -32000,
        message: error.message
      }
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: "MCP Server is running", 
    endpoints: { mcp: "/mcp" },
    supported_methods: ["tools/list", "tools/call", "prompts/list", "resources/list"]
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`MCP Server running on port ${port}`);
});

module.exports = app;
