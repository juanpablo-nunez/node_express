
const express = require('express')
const app = express()
let notes = [
    {
        "id": 1,
        "content": "Tengo que estudiar NODE JS",
        "date": "2019-05-30T17:30:31.098Z",
        "isImportant": true
    },
    {
        "id": 2,
        "content": "Tengo que estudiar REACT",
        "date": "2019-05-30T17:30:31.098Z",
        "isImportant": true
    },
    {
        "id": 3,
        "content": "Tengo que estudiar ENGLISH",
        "date": "2019-05-30T17:30:31.098Z",
        "isImportant": true
    },
    {
        "id": 4,
        "content": "Tengo que descansar",
        "date": "2019-05-30T17:30:31.098Z",
        "isImportant": false
    }
]

// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/plain'})
//     response.end("Hi my little friend")

// })

app.get('/', (request, response)=>{
    response.send('<h1>hola amigos<h1>')
})

app.get('/api/notas', (request, response) => {
    response.json(notes)
})

app.get('/api/notas/:id', (request, response) => {
    const id = request.params.id
    const notas = notes.find(notas => notas.id == id)
    response.json(notas)
})

const PORT = 3001
app.listen( PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})