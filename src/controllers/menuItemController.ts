import { Request, Response } from "express";
import MenuItem from "../models/MenuItem";

export const getMenuItems = async (req: Request, res: Response) => {
    try {
        const { menuId } = req.params;
        const items = await MenuItem.find({ menuId })
        res.json(items)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}


export const createMenuItem = async (req: Request, res: Response): Promise<void> => {
    const { menuId, name, description, price } = req.body;

    // Validation 
    const errors: string[] = [];
    // Validae 'menuId'

    if (!menuId || typeof menuId !== "string") {
        errors.push("Menu ID is required and must be a valid string.");
    }

    // Validate `name`
    if (!name || typeof name !== "string" || name.trim().length < 3 || name.trim().length > 50) {
        errors.push("Item name is required and must be 3-50 characters long.");
    }

    // Validate `description`
    if (!description || typeof description !== "string" || description.trim().length < 5 || description.trim().length > 200) {
        errors.push("Item description is required and must be 5-200 characters long.");
    }
    // Validate `price`
    if (price === undefined || typeof price !== "number" || price <= 0) {
        errors.push("Price is required and must be a positive number.");
    }
    // If validation fails, send errors
    if (errors.length > 0) {
        res.status(400).json({ errors });
        return
    }


    try {
        // Create and save menu item
        const menuItem = new MenuItem({
            menuId: menuId.trim(),
            name: name.trim(),
            description: description.trim(),
            price,
        });
        await menuItem.save();
        res.status(201).json(menuItem);

    } catch (error: any) {
        if (error.code === 11000) {
            res
                .status(400)
                .json({ message: "Item name must be unique within the same menu." });
            return
        }
        res.status(500).json({ message: "Server Error" });
    }
}