const express = require('express');
// Constants
const PORT = 8080;

// App
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.json({ name: "Hello" })
})
app.listen( process.env.PORT ||PORT, () => {
});