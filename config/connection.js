const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 6900;
    user: "root",
    password:"Manicweedman22593!",
    database:"burger_db"
})

connection.connect((err) => {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection