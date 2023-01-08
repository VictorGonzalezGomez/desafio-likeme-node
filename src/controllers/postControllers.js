const {
    gettingPosts,
    insertPost

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
        console.log("New Post in CreateNewPost",newPost);
        res.json(newPost);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ERROR INSERT POST" });
    }
};

// const updatePostById = async (req, res) => {
//     const { id } = req.params;
//     const payload = req.body;
//     // console.log("controller",payload);
//     payload.id = id;
//     try {
//         const existTravel = await findTravel(id);
//         if(existTravel.length === 0){
//             return res.status(404).json({ message: "El viaje no existe" });
//         }
//         const updatedTravel = await updateTravel(payload);
//         res.json(updatedTravel);
//     } catch (e) {
//         console.log(e);
//     }
//     res.status(500).json({ message: "Error al actualizar el viaje" });
// };
//
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
    createNewPost
};