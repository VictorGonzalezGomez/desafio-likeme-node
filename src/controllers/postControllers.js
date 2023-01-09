const {
    gettingPosts,
    insertPost,
    addLikeIntoPost,
    findPost,
} = require("../models/postsModel");

const gettingALLPosts = async (req, res) => {
    try {
        const posts = await gettingPosts();
        res.json(posts);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error al obtener los datos" });
    }
};

const createNewPost = async (req, res) => {
    try {
        const newPost= await insertPost(req.body);
        res.json(newPost);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ERROR INSERT POST" });
    }
};

const addNewLike = async (req, res) => {
    const { id } = req.params;
    try {
        const existPost = await findPost(id);
        if(existPost.length === 0){
            return res.status(404).json({ message: "ERROR posts doesn't exists" });
        }
        const addlike = await addLikeIntoPost(id);
        res.json(addlike);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ERROR UPDATE POST" });
    }
};

// const deletePostById = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const existTravel = await findTravel(id);
//         if(existTravel.length === 0){
//             return res.status(404).json({ message: "El viaje no existe" });
//         }
//         await deleteTravel(id);
//         res.json({ message: "Viaje eliminado" });
//     } catch (e) {
//         console.log(e);
//         res.status(500).json({ message: "Error al eliminar el viaje" });
//     }
// };

module.exports = {
    gettingALLPosts,
    createNewPost,
    addNewLike
};