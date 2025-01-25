import express from "express"
import { createMenu, getMenus, } from "../controllers/menuController"


const router = express.Router()

/* Get Menus */
router.get("/", getMenus)

/* Create Menu */
router.post("/", createMenu)

export default router