const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "LEVEL UP API is running successfully."
    });
});

app.get("/api/status", (req, res) => {
    res.json({
        app: "LEVEL UP",
        status: "online",
        message: "Backend connected successfully."
    });
});

app.listen(PORT, () => {
    console.log(`LEVEL UP server is running on port ${PORT}`);
});