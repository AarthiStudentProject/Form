const express=require('express')
const colors=require('colors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const connectDB=require('./config/db')
// dotenv config
dotenv.config()

// Mongodb connection
connectDB();
// rest object
const app=express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/regs', require("./routes/userRouter"))
//  port 
const port=process.env.PORT||8085
// listen port
app.listen(port,()=>{
    console.log(`Server Running in ${process.env.DEV_MODE} Mode on a port ${process.env.PORT}`.bgCyan.white)
})