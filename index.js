const express = require('express')
const path = require('path')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(express.json())
app.use('/api/users', userRoutes)
const port = 3000;
app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})




















// const myexp = express();
// const port = 3000;

// myexp.get('/', (req, res)=>{
//     res.send('Home page')
// })
// myexp.get('/about', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'index.html'))
//     // res.statusCode(500)
// })
// myexp.listen(port, ()=>{
//     console.log(`server running at http://localhost:${port}`)
// })