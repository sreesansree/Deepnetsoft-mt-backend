import express from "express"
import { getMenuItems, createMenuItem } from "../controllers/menuItemController"

const router = express.Router()

router.get("/:menuId", getMenuItems)
router.post("/", createMenuItem)

export default router