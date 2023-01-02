const { insertPost, gettingPost } = require("./database");
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// transfers the file index.html to the path "/"
app.get("/", (req, res) => {
    try{
        res.sendFile(__dirname + "/index.html");
    }catch (err) {
        res.status(500).send("Internal Server Error:",err);
    }
});
// insert post into the database
app.post("/posts", async (req, res) => {
    try{
        const payload = req.body;
        if (payload.titulo && payload.url && payload.descripcion){
            const postsValidate = await gettingPost();
            const urlExists = postsValidate.filter((elem => elem.img == payload.url ));
            if (urlExists.length == 0){
                const posts = await insertPost(payload);
                res.json(posts);
            }else {
                res.status(400).send("Post already exists!!!!");
            }
        }else {
            res.status(400).send("All fields are required!!!!");
        }
    }catch (err){
        res.status(400).send("BAD REQUEST:",err);
    }
});
//getting post from likeme database
app.get("/posts", async (req, res) => {
    try{
        const posts = await gettingPost();
        if(posts.length !=0){
            res.json(posts);
        } else {
            res.status(204).send("No Content:",err);
        }
    }catch (err) {
        res.status(500).send("Internal Server Error:",err);
    }
});
//bind and listen the connections of the PORT
app.listen(PORT, (err)=>{
    if (err) console.error("Error in server setup");
    console.log("Server listening on Port", PORT);
});

