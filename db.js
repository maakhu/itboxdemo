import mysql from "mysql2";

let pool = mysql.createPool({   //creates a pool of connections
  host: "127.0.01", // localhost
  user: "root",
  password: "password",
  database: "itbox",
}).promise(); //promise API version to avoid callback hell
