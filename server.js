const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//bind and listen the connections of the PORT
app.listen(PORT, (err)=>{
    if (err) console.error("Error in server setup");
    console.log("Server listening on Port", PORT);
});

module.exports = app;

