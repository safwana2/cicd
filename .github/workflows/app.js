const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/api", (req, res) => {
    res.send("hello world");
});

app.listen(3000, (err) => {
    console.log("server is running on port 3000");
});
