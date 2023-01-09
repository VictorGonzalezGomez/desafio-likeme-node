const {
    gettingPosts,
    insertPost,
    addLikeIntoPost,
    deletePost,
    findPost,
} = require("../models/postsModel");

const gettingALLPosts = async (req, res) => {
    try {
        const posts = await gettingPosts();
        res.json(posts);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ERROR GETTING POSTS" });
    }
};

const createNewPost = async (req, res) => {
    try {
        const newPost= await insertPost(req.body);
        res.json(newPost);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ERROR INSERTING POST" });
    }
};

const addNewLike = async (req, res) => {
    const { id } = req.params;
    try {
        const existPost = await findPost(id);
        if(existPost.length === 0){
            return res.status(404).json({ message: "ERROR POSTS DOESN'T EXISTS" });
        }
        const addlike = await addLikeIntoPost(id);
        res.json(addlike);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ERROR UPDATING POST" });
    }
};

const deletePostById = async (req, res) => {
    const { id } = req.params;
    try {
        const existPost = await findPost(id);
        if(existPost.length === 0){
            return res.status(404).json({ message: "ERROR POSTS DOESN'T EXISTS" });
        }
        await deletePost(id);
        res.json({ message: "POST DELETED" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ERROR POST COULD NOT BE DELETED" });
    }
};

module.exports = {
    gettingALLPosts,
    createNewPost,
    deletePostById,
    addNewLike
};