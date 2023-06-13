import mysql from "mysql2";

let pool = mysql
  .createPool({
    //creates a pool of connections
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  })
  .promise(); //promise API version to avoid callback hell

async function getItems() {
  const [rows] = await pool.query("SELECT * FROM cikktetel"); //takes the first element of the array
  return rows;
}

const items = await getItems();
console.log(items);
