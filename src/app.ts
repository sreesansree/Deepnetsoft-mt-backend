import express from "express"
import cors from "cors"
import menuRoutes from './routes/menuRoutes'
import meniItemRoutes from "./routes/menuItemRoutes"

const app = express()

//middleware
app.use(cors())
app.use(express.json())

/* Routes */
app.use("/api/menus", menuRoutes);
app.use("/api/menu-items", meniItemRoutes);



export default app