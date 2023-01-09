const  pool = require("../helpers/connectionsDataBase").getInstance();

const gettingPosts = async () => {
    SQLquery = {
        text:"SELECT * FROM posts ORDER BY id DESC",
    };
    try {
        const result = await pool.query(SQLquery);
        return result.rows;
    }catch (e) {
        console.log(
            "ERROR WHEN OBTAINING DATA IN TABLE POSTS:",
            e.code,
            e.message);
        throw new Error(e)
    }
};

const insertPost = async (payload) => {
  SQLquery = {
      text: "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *",
      values:[payload.titulo, payload.url, payload.descripcion, 0],
  };
  try {
      const result = await pool.query(SQLquery);
      return result.rows;
  } catch (e) {
      console.log(
          "ERROR INSERTING DATA IN TABLE POSTS:",
          e.code,
          e.message);
      throw new Error(e);
  }
};

const addLikeIntoPost = async (id) => {
  SQLquery = {
      text:"UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
      values: [id]
  }
  try {
      const result = await pool.query(SQLquery);
      return result.rows;
  }catch (e) {
      console.log(
          "ERROR TO UPDATE DATA IN TABLE POSTS:",
          e.code,
          e.message);
      throw new Error(e);
  }
};

const deletePost = async (id) => {
    try {
        SQLquery = {
            text: "DELETE FROM posts WHERE id = $1",
            values: [id],
        };
        const result = await pool.query(SQLquery);
        return result.rows;
    } catch (e) {
        console.log(
            "ERROR DELETING DATA IN TABLE POSTS: ",
            e.code,
            e.message
        );
        throw new Error(e);
    }
};

const findPost = async (payload) => {
    try {
        SQLquery = {
            text: "SELECT * FROM posts WHERE id = $1",
            values: [payload],
        };
        const result = await pool.query(SQLquery);
        return result.rows;
    } catch (e) {
        console.log(
            "ERROR SEARCHING FOR DATA IN TABLE POSTS:",
            e.code,
            e.message
        );
        throw new Error(e);
    }
};

module.exports = {
    gettingPosts,
    insertPost,
    addLikeIntoPost,
    deletePost,
    findPost
    }

