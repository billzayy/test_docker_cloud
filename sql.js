const mysql = require('mysql');

function conSQL(strSQL,cb) {
    const connectDB = mysql.createConnection({
        host: 'db',
        port: "3306",
        user: 'root',
        password: 'mysql',
        database: 'quotes'
    })

    connectDB.connect(function (err) {
        if (err) throw err;
        // console.log('Connected to the MySQL server.');
        connectDB.query(strSQL, function (err, result) {
            if (err) throw(err);
            cb(result)
        })
    });
}

module.exports = {
    conSQL: conSQL,
};