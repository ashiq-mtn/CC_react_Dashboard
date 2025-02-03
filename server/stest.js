import { InfluxDBClient, Point } from "@influxdata/influxdb3-client";

async function fetchWasteData() {
  const client = new InfluxDBClient({
    host: "https://eu-central-1-1.aws.cloud2.influxdata.com",
    token: "Kn7SDJ8Ai0nEFqovtToZ5v4v-Q5NEVTNNtCnFjeOtaBUxLm2U43LuVpS1DYJIQulJQzBU9lWZ7cDov1eGDDEoQ=="
  });
  console.log("hello")
  try {
    const query1 = `SELECT *
      FROM "Bin data"
      WHERE time >= now() - interval '30 days'
      AND ("Waste_Material" IS NOT NULL)
      ORDER BY time desc`;

      const query2 = `SELECT *
        FROM "BinFLvl"
        WHERE
        time >= now() - interval '30 days'
        AND
        ("Fill level" IS NOT NULL)
        ORDER BY time desc`;

    const rows1 = await client.query(query1, 'Cashcrow');
    const rows2 = await client.query(query2, 'Cashcrow');
    const data = [];

    for await (const row of rows1) {
      data.push({
        binId: row["Bin id"] || '',
        wasteType: row["Waste_Material"] || '',
        //fillLevel: row["Fill Level"] ? `${row["Fill Level"].toFixed(2)}%` : "0%",
        time: new Date(row.time)
      });
    }
    
    for await (const row of rows2) {
      data.push({
        fillLevel: row["Fill level"] || '',
        //fillLevel: row["Fill Level"] ? `${row["Fill Level"].toFixed(2)}%` : "0%",
      });
    }
    console.log(data);
  } catch (err) {
    console.error("Error querying InfluxDB:", err);
    throw err;
  } finally {
    client.close();
  }
}

//export { fetchWasteData };