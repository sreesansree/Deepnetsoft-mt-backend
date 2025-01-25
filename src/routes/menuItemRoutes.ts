import express from "express"
import { getMenuItems, createMenuItem } from "../controllers/menuItemController"

const router = express.Router()

// Fetch menu items for a specific menu
router.get("/:menuId/items", getMenuItems)
// Create a new menu item for a specific menu
router.post("/:menuId/items", createMenuItem)

export default router