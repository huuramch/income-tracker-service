const express = require('express')
const connect = require('./utils/connectDatabase')
const cors = require('cors')
const userRouter = require('./routes/userRoute')

const app = express()
const port = 8000
app.use(express.json())
app.use(cors())

app.use(userRouter)
connect()

app.get('/', (req, res) => {
    res.send('hello worlds')
})

app.listen(port, () => {
    console.log(`your backend server is running on ${port}`)
})