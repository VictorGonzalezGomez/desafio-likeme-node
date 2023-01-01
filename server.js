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
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


