//use dot env if enviroment is development
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

console.log(`NODE_ENV: ${process.env.NODE_ENV.toUpperCase()}`);

const express = require('express')
const app = express()

let port = process.env.PORT || 3000

app.get('/', (req, res) => {
    let randomNubmer = Math.floor(Math.random() * 100)
    res.send(randomNubmer.toString())
})

app.listen(port, () => console.log("Random Number Service running on port ", port))