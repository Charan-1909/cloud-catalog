const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static frontend files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint: /api/services
app.get('/api/services', (req, res) => {
  const services = [
    {
      serviceId: "srv-001",
      serviceName: "Amazon Elastic Compute Cloud (EC2)",
      category: "IaaS",
      pricingModel: "Pay-as-you-go per second/instance-hour"
    },
    {
      serviceId: "srv-002",
      serviceName: "AWS Lambda",
      category: "PaaS",
      pricingModel: "Pay per execution duration and request count"
    },
    {
      serviceId: "srv-003",
      serviceName: "Amazon Simple Storage Service (S3)",
      category: "IaaS",
      pricingModel: "Tiered storage per GB/month + data egress"
    },
    {
      serviceId: "srv-004",
      serviceName: "Google Cloud Run",
      category: "PaaS",
      pricingModel: "Pay-as-you-go per vCPU-second and memory allocated"
    }
  ];

  res.status(200).json(services);
});

// API Endpoint: /api/status
app.get('/api/status', (req, res) => {
  res.status(200).json({
    status: "Operational",
    developer: "V Charan",
    environment: "Cloud PaaS"
  });
});

// Root fallback to ensure public/index.html serves reliably
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Bind to port when executed locally
// Start server locally
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Required for Vercel
module.exports = app;