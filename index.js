const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json()); // Middleware to parse JSON
app.use('/api/users', userRoutes); // Route prefix

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




















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