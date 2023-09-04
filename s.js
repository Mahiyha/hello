const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
const db = mysql.createConnection(
    {
        host : "11-25-603s",
        user :"DBMS",
        password :"DBMS",
        database :"project"
    }
)
app.listen(8081 ,() => {
    console.log("Listening....")
})