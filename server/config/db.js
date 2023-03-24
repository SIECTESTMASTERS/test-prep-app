const mysql = require('mysql');

var db;

connectDatabase = () => {
    if (!db) {
        db = mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });
        db.connect(function(err) {
            if(!err){
                console.log("Databade is connected!");
            }else {
                console.log("Error connecting database!")
            }
        })
    }
    return db;
};
module.exports = connectDatabase();