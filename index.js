const express = require('express');
const sql = require('./sql')
// Constants
const PORT = 3000;

// App
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.json({ name: "Hello" })
})

app.get('/api', (req, res) => {
    sql.conSQL("Select * from Login", (recordset) => {
        res.send(recordset)
    })
})

app.listen( process.env.PORT ||PORT, () => {
});
