const express = require("express");
const app = express();
require("dotenv").config()
const morgan = require("morgan")

app.use(morgan("dev"))

const PORT = process.env.PORT

app.get("/test", (req, res) => {
    res.status(200).json({ message: "This is Message" })
})
app.get("/test-another", (req, res) => {
    res.status(200).json({ message: "This is Message" })
})

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`)
})