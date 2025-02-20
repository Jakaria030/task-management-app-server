const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7vwvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const taskCollection = client.db("taskManagementApp").collection("tasks");

        // task add
        app.post("/tasks", async(req, res) => {
            const task = req.body;
            const result = await taskCollection.insertOne(task);
            
            res.send(result);
        });

        // get task
        app.get("/tasks", async(req, res) => {
            const {email} = req.query;
            const query = {email: email};
            const result = await taskCollection.find(query).toArray();

            res.send(result);
        })

        console.log("Database is connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

// Simple route
app.get("/", (req, res) => {
    res.send("Task Management server is running...");
});

// Run the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
