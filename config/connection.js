var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Atlanta83',
        database: 'burgers_db'
    });
connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});
connection.query('SELECT * FROM <insert table name>', function (err, res) {
    if (err) throw err;
    console.log(res);
});

module.exports = connection;