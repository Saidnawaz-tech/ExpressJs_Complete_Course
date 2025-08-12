const express = require("express");
const app = express();

// Advance Routing (different HTTP methods for same Route)

app.use(express.json())

app.get('/students', (req, res)=>{
  res.json({message: 'Get Request for students'})
})
app.post('/students', (req, res)=>{
  res.json({message: 'Post request for students', data: req.body})
})
app.put('/students/:id', (req, res)=>{
  res.json({message: `Student with id ${req.params.id} is updated`})
})
app.delete('/students/:id', (req, res)=>{
  res.json({message: `Student with id ${req.params.id} is deleted`})
})
// Route parameters
app.get('/students/:id', (req, res)=>{
  res.send(`Get Student with ID ${req.params.id}`)
})

// Query Strings
app.get('/search', (req, res)=>{
  const {name, age} = req.query
  res.json({name, age}) 
})

// Custom middleware Flow
function logTime(req, res, next){
  const logtime = new Date().toLocaleTimeString();
  console.log('Time: ', logtime); // time displayed in terminal
  next();
}
app.use(logTime)
app.get('/', (req, res)=>{
  res.send('Hello world! Home Page')
})

// chaining middleware functions
function first(req, res, next){
  console.log('First Middleware')
  next();
}
function second(req, res, next){
  console.log('First Middleware')
  next();
}
app.get('/test', first, second, (req, res)=>{
  console.log('final response')
})

app.listen(3000, ()=>{ console.log('Server is running at http://localhost:3000/students')})

