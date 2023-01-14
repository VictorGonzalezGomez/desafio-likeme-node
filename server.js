const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;//PREP RAIL
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, console.log("Server listening on Port", PORT));

module.exports = app;

