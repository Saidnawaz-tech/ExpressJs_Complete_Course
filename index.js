const express = require('express');
const app = express();
const studentRouter = require('./routes/StudentRoutes')
const errorHandler = require('./middleware/errorHandler')

app.use(express.json())
app.use('/api/students', studentRouter)
app.use(errorHandler)

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

