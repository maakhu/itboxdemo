import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

let pool = mysql
  .createPool({
    //creates a pool of connections
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  })
  .promise(); //promise API version to avoid callback hell

export async function getItems() {
  const [rows] = await pool.query("SELECT * FROM cikktetel"); //takes the first element of the array
  return rows;
}

export async function getItem(id) {
  const [rows] = await pool.query(`
    SELECT * FROM cikktetel 
    WHERE tetelszam=?`, [id]);
  return rows[0];
}

// etc further functions as create, update, delete should come here, but we don't need them now based on the task

const items = await getItems();
const item = await getItem(1);
console.log(items);
