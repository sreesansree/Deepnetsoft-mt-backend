import express from "express"
import cors from "cors"


const app = express()

//middleware
app.use(cors())
app.use(express.json())


export default app