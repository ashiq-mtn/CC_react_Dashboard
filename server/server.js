import express from 'express';
import cors from 'cors';
import { InfluxDBClient } from '@influxdata/influxdb3-client';

const app = express();
const port = 3000;

// CORS and static file setup
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.static('./'));

// InfluxDB client setup
const client = new InfluxDBClient({
  host: "https://eu-central-1-1.aws.cloud2.influxdata.com",
  token: "Kn7SDJ8Ai0nEFqovtToZ5v4v-Q5NEVTNNtCnFjeOtaBUxLm2U43LuVpS1DYJIQulJQzBU9lWZ7cDov1eGDDEoQ=="
});

// Store the last update time
let lastUpdateTime = new Date().getTime();

// Waste data endpoint
app.get('/api/waste-data', async (req, res) => {
  try {
    const query = `SELECT *
    FROM "BinData"
    WHERE time >= now() - interval '30 days'
    AND ("Waste_type" IS NOT NULL OR "Fill_level" IS NOT NULL)
    ORDER BY time desc`;

    const rows = await client.query(query, 'Cashcrow');
    const data = [];

    for await (const row of rows) {
      data.push({
        binId: row["Bin_id"] || '',
        wasteType: row["Waste_type"] || '',
        fillLevel: row["Fill_level"] ? `${row["Fill_level"].toFixed(2)}%` : "0%",
        time: new Date(row.time)
      });
    }
    
    lastUpdateTime = new Date().getTime();
    res.json(data);
  } catch (err) {
    console.error("Error fetching waste data:", err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Last update endpoint
app.get('/api/last-update', (req, res) => {
  res.json({ timestamp: lastUpdateTime });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});