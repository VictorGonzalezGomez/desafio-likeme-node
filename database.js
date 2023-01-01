require('dotenv').config()
const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    allowExitOnIdle: true,
})

const insertPost = async (payload) => {
    const query = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *";
    const values = [payload.titulo, payload.url, payload.descripcion];
    const result = await pool.query(query, values);
    console.log("result rows:", result.rows);
    return result.rows;
}

module.exports = {insertPost}