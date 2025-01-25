import { Request, Response } from "express"
import Menu from "../models/Menu"

export const getMenus = async (req: Request, res: Response) => {
    try {
        const menus = await Menu.find()
        res.status(200).json(menus)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}

export const createMenu = async (req: Request, res: Response) => {
    const { name, description } = req.body;

    // validation 
    const errors: string[] = [];

    if (!name || typeof name !== "string" || name.trim().length < 3 || name.trim().length > 50) {
        errors.push("Menu name is required and must be 3-50 characters long.")
    }
    if (!description || typeof description !== "string" || description.trim().length < 5 || description.trim().length > 200) {
        errors.push("Menu description is required and must be 5-200 characters long.");
    }

    // If validation fails, send errors
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    try {
        const menu = new Menu({ name: name.trim(), description: description.trim() });
        await menu.save();
        res.status(201).json(menu);
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}