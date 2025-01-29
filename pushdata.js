import {InfluxDBClient, Point} from '@influxdata/influxdb3-client'

const token = 'K5v6rA8EBtleXTlfwWfcUfiqHLbEmuc5NtuDMN3b93Up6R5SnGqJRY6KX1VYJW_e1_mVmZWdufrV1IL_FW4wNQ=='

async function main() {
    const client = new InfluxDBClient({host: 'https://eu-central-1-1.aws.cloud2.influxdata.com', token: token})

    let database = `WasteData`

    const points =
    [
        Point.measurement("TrialCheck")
            .setTag("Bin ID", "001")
            .setStringField("Waste Type", "Paper")
            .setFloatField("Fill Level", 25.30),
        Point.measurement("TrialCheck")
            .setTag("Bin ID", "002")
            .setStringField("Waste Type", "Plastic")
            .setFloatField("Fill Level", 48.50),
        Point.measurement("TrialCheck")
            .setTag("Bin ID", "003")
            .setStringField("Waste Type", "Other")
            .setFloatField("Fill Level", 50.00),
        Point.measurement("TrialCheck")
            .setTag("Bin ID", "004")
            .setStringField("Waste Type", "Paper")
            .setFloatField("Fill Level", 66.78),
        Point.measurement("TrialCheck")
            .setTag("Bin ID", "005")
            .setStringField("Waste Type", "Plastic")
            .setFloatField("Fill Level", 89.00),
        
    ];

    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        await client.write(point, database)
            // separate points by 1 second
            .then(() => new Promise(resolve => setTimeout(resolve, 1000)));
    }

    client.close()
}

main()

