const  pool = require("../helpers/connectionsDataBase").getInstance();

const gettingPosts = async () => {
    SQLquery = {
        text:"SELECT * FROM posts ORDER BY id DESC",
    };
    try {
        const result = await pool.query(SQLquery);
        return result.rows;
    }catch (e) {
        console.log("ERROR to obtain posts:",
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
      console.log("ERROR to INSERT post:",
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
      console.log("ERROR to UPDATE post:",
          e.code,
          e.message);
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
            "error al buscar datos en tabla my_travels:",
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
    findPost
    }

