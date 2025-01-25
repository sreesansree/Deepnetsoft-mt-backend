import dotenv from "dotenv"
import app from "./app"
import connectDB from "./config/database"

dotenv.config()

const PORT = process.env.PORT || 5000
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

})