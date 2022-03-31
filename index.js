const express = require('express')
const app = express()
const port = 3000

const publicaciones = require("./publicaciones.json")

app.get('/', (req, res) => res.send(publicaciones
))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))