const  pool = require("../helpers/connectionsDataBase").getInstance();

const gettingPosts = async () => {
    SQLquery = {
        text:"SELECT * FROM posts",
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
      console.log("ERROR to insert post:",
          e.code,
          e.message);
      throw new Error(e);
  }
}
module.exports = {
    gettingPosts,
    insertPost
    }

