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
  host: "https://us-east-1-1.aws.cloud2.influxdata.com",
  token: "8KRxJ86Au_Jxxanx-Cd6rJd5eXuv5UP2p_vtRa_uHAJMHTwzRTJHaWaEXAy-OoM4f_6XcGZmbNU9eis7gTlq6A=="
});

// Store the last update time
let lastUpdateTime = new Date().getTime();

// Waste data endpoint
app.get('/api/waste-data', async (req, res) => {
  try {
    const query = `SELECT *
      FROM "Dashboard"
      WHERE time >= now() - interval '30 days'
      AND ("Fill Level" IS NOT NULL OR "Waste Type" IS NOT NULL)
      ORDER BY time desc`;

    const rows = await client.query(query, 'TrialBucket');
    const data = [];

    for await (const row of rows) {
      data.push({
        binId: row["Bin ID"] || '',
        wasteType: row["Waste Type"] || '',
        fillLevel: row["Fill Level"] ? `${row["Fill Level"].toFixed(2)}%` : "0%",
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