// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"

import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import express from "express"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()









// dotenv.config() // make sure env vars are loaded

// const app = express()

// ;(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}`)

//     console.log(" Database connected")

//     app.on("error", (error) => {
//       console.error(" Server error:", error)
//       throw error
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(` Server started on port ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.error(" Error connecting to database", error)
//     process.exit(1) // better than throwing error
//   }
// })();
