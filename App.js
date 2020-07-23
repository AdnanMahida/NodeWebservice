const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db_queries')
const port = 3000

/*
Body Parser
In order to get access to the post data we have to use body-parser. Basically what the body-parser is which allows express to read the body and then parse that into a Json object that we can understand.
*/
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.json({ info: 'Welcome to Api this made with Node.js, Express, and Postgres API <3' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`Node Server running on port ${port}.`)
})