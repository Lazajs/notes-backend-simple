require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const fs = require('fs')
let file = []
app.use(express.json())

let i = 0
function* GENERATE_ID() {
    while(true){
        yield i++
    }
}

app.get('/', (req,res) => {
    res.send('---Welcome to the server, this is the object actually--- \n \n' + 
    file
    )
})

app.post('/add', (req,res) => {
    const {name} = req.body
    file.push({name: name, id: GENERATE_ID().next().value, date: new Date().toLocaleDateString()})
    res.send(file)
})

app.listen(PORT, ()=> console.log(`Server on port ${PORT}`))