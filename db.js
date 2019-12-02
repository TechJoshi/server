const mysql = require('mysql')

function connect(){
    const connection = mysql.createConnection({

        host:'172.18.4.72',
        user:'root',
        password:'manager',
        database:'mydb',
        port:9001
    })

    connection.connect();
    return connection;
} 

module.exports = {
    connect:connect
}