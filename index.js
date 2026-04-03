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
// ========== METADATA UNTUK 5 AGENT (RAILWAY STYLE) ==========

// 1. Quantiva Agent
app.get('/mcp/agent-quantiva', (req, res) => {
  res.json({
    name: "Quantiva Agent",
    id: "22524",
    version: "1.0.0",
    protocolVersion: "2025-06-18",
    description: "Financial analysis & market forecasting agent using ML algorithms",
    transport: "streamable-http",
    methods: ["POST"],
    capabilities: { tools: true, prompts: true, resources: true },
    tools: [
      { name: "market_forecast", description: "Predict market trends using ML algorithms" },
      { name: "financial_modeling", description: "Build complex financial models" },
      { name: "trend_analysis", description: "Analyze market trends and patterns" },
      { name: "data_processing", description: "Process structured datasets (CSV, JSON)" }
    ],
    prompts: [
      { name: "forecast_report", description: "Generate market forecast report" },
      { name: "investment_analysis", description: "Analyze investment opportunities" }
    ],
    resources: [
      { uri: "database://market-data", name: "Market Data", description: "Real-time market data" },
      { uri: "database://financial-reports", name: "Financial Reports", description: "Historical financial reports" }
    ],
    status: "healthy"
  });
});

// 2. Nexora Agent
app.get('/mcp/agent-nexora', (req, res) => {
  res.json({
    name: "Nexora Agent",
    id: "22497",
    version: "1.0.0",
    protocolVersion: "2025-06-18",
    description: "Automated charting & anomaly detection agent for data visualization",
    transport: "streamable-http",
    methods: ["POST"],
    capabilities: { tools: true, prompts: true, resources: true },
    tools: [
      { name: "automated_charting", description: "Generate automated charts from data" },
      { name: "anomaly_detection", description: "Detect anomalies in datasets" },
      { name: "trend_forecasting", description: "Forecast future trends" },
      { name: "summary_report", description: "Generate AI-powered summary reports" }
    ],
    prompts: [
      { name: "dashboard_creation", description: "Create analytics dashboard" },
      { name: "executive_summary", description: "Generate executive summary" }
    ],
    resources: [
      { uri: "api://endpoints", name: "API Endpoints", description: "External API connections" },
      { uri: "csv://data", name: "CSV Data", description: "CSV dataset access" }
    ],
    status: "healthy"
  });
});

// 3. DataQuant Agent
app.get('/mcp/agent-dataquant', (req, res) => {
  res.json({
    name: "DataQuant Agent",
    id: "22455",
    version: "1.0.0",
    protocolVersion: "2025-06-18",
    description: "Pattern detection & financial forecasting for quantitative analysis",
    transport: "streamable-http",
    methods: ["POST"],
    capabilities: { tools: true, prompts: true, resources: true },
    tools: [
      { name: "detect_patterns", description: "Detect patterns in structured datasets" },
      { name: "generate_dashboard", description: "Generate interactive dashboards" },
      { name: "forecast_financials", description: "Forecast financial metrics" },
      { name: "automate_reporting", description: "Automate report generation" }
    ],
    prompts: [
      { name: "financial_forecast", description: "Financial forecasting prompt" },
      { name: "report_automation", description: "Automated reporting prompt" }
    ],
    resources: [
      { uri: "sql://database", name: "SQL Database", description: "SQL database connection" }
    ],
    status: "healthy"
  });
});

// 4. DataAnalyst Agent
app.get('/mcp/agent-dataanalyst', (req, res) => {
  res.json({
    name: "DataAnalyst Agent",
    id: "22300",
    version: "1.0.0",
    protocolVersion: "2025-06-18",
    description: "Advanced data analysis & professional chart generation",
    transport: "streamable-http",
    methods: ["POST"],
    capabilities: { tools: true, prompts: true, resources: true },
    tools: [
      { name: "data_analysis", description: "Perform advanced data analysis" },
      { name: "chart_generation", description: "Generate professional charts" },
      { name: "report_automation", description: "Automate reporting tasks" }
    ],
    prompts: [
      { name: "business_intelligence", description: "Business intelligence analysis" },
      { name: "market_research", description: "Market research prompt" }
    ],
    resources: [
      { uri: "database://market-data", name: "Market Data", description: "Real-time market data" }
    ],
    status: "healthy"
  });
});

// 5. InsightForge Agent
app.get('/mcp/agent-insightforge', (req, res) => {
  res.json({
    name: "InsightForge Agent",
    id: "22398",
    version: "1.0.0",
    protocolVersion: "2025-06-18",
    description: "Statistical analysis & predictive modeling for deep insights",
    transport: "streamable-http",
    methods: ["POST"],
    capabilities: { tools: true, prompts: true, resources: true },
    tools: [
      { name: "statistical_analysis", description: "Deep statistical analysis" },
      { name: "predictive_modeling", description: "Build predictive models" },
      { name: "report_creation", description: "Create professional reports" }
    ],
    prompts: [
      { name: "insight_generation", description: "Generate actionable insights" },
      { name: "data_visualization", description: "Data visualization prompt" }
    ],
    resources: [
      { uri: "database://financial-reports", name: "Financial Reports", description: "Historical financial reports" }
    ],
    status: "healthy"
  });
});

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
// ========== WEBHOOK UNTUK TOKU.AGENCY ==========
app.post('/webhook/toku', async (req, res) => {
  const { order_id, service, tier, requirements, customer_id } = req.body;
  
  console.log(`[TOKU] New order: ${order_id} - ${service} (${tier})`);
  
  try {
    // Mapping service ke MCP tool
    let toolName = "detect_patterns";
    if (service && service.includes("Pattern")) toolName = "detect_patterns";
    if (service && service.includes("Dashboard")) toolName = "generate_dashboard";
    if (service && service.includes("Forecast")) toolName = "forecast_financials";
    if (service && service.includes("Reporting")) toolName = "automate_reporting";
    
    // Panggil MCP tool
    const mcpResponse = await fetch('https://mcp-server-agents-8aui.vercel.app/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "tools/call",
        params: { 
          name: toolName, 
          arguments: { requirements: requirements || "No requirements provided" }
        },
        id: Date.now()
      })
    });
    
    const mcpResult = await mcpResponse.json();
    
    // Kirim hasil ke toku (optional, untuk tracking)
    // await fetch(`https://toku.agency/api/orders/${order_id}/complete`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ result: mcpResult.result })
    // });
    
    res.json({ 
      status: "ok", 
      order_id: order_id,
      result: mcpResult.result 
    });
  } catch (error) {
    console.error('[TOKU] Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint test webhook
app.get('/webhook/test', (req, res) => {
  res.json({ 
    status: "Webhook endpoint is ready", 
    timestamp: new Date().toISOString(),
    message: "Server MCP aktif dan siap menerima job dari toku.agency"
  });
});
app.listen(port, () => {
  console.log(`MCP Server running on port ${port}`);
});

module.exports = app;
