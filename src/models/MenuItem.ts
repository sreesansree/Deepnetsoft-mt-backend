import mongoose, { Schema, Document } from "mongoose";

export interface IMenuItem extends Document {
    menuId: mongoose.Types.ObjectId;
    name: string;
    description: string;
    price: number
}
const MenuItemSchema: Schema = new Schema({
    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
        required: true
    },
    name: {
        type: String,
        required: [true, "Item name is required"],
        trim: true,
        minlength: [3, "Item name must be at least 3 characters long"],
        maxlength: [50, "Item name must not exceed 50 characters"]

    },
    description: {
        type: String,
        required: [true, "Item description is required"],
        trim: true,
        minlength: [5, "Item description must be at least 5 characters long"],
        maxlength: [200, "Item description must not exceed 200 characters"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
})

// Compound index to enforce uniqueness of `name` within the same `menuId`

MenuItemSchema.index({ menuId: 1, name: 1 }, { unique: true });


export default mongoose.model<IMenuItem>("MenuItem", MenuItemSchema)