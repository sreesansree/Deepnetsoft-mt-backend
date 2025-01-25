import express from "express"
import cors from "cors"
import menuRoutes from './routes/menuRoutes'
import meniItemRoutes from "./routes/menuItemRoutes"

const app = express()

// Enable CORS for specific origin
const corsOptions = {
    origin: "http://localhost:5173", // Allow frontend to make requests
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],             // Allowed HTTP methods
    allowedHeaders: "Content-Type",  // Allowed headers
};


//middleware
app.use(cors(corsOptions))
app.use(express.json()) // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true, limit: "500mb" }));

/* Routes */
app.use("/api/menus", menuRoutes);
app.use("/api/menu-items", meniItemRoutes);



export default app