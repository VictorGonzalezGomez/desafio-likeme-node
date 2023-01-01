const fs = require('fs');
const { insertPost } = require("./database")
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('public'))
//bind and listen the connections of the PORT
app.listen(PORT, (err)=>{
    if (err) console.error("Error in server setup");
    console.log("Server listening on Port", PORT);
});
// transfers the file index.html to the path "/"
app.get("/posts", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
// insert post into the database
app.post("/posts", async (req, res) => {
    const payload = req.body;
    const posts = await insertPost(payload);
    res.json(posts);
});

