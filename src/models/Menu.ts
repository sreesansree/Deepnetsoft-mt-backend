import mongoose, { Schema, Document } from "mongoose";

export interface IMenu extends Document {
    name: string;
    description: string;
}

const MenuShema: Schema = new Schema({
    name: {
        type: String,
        required: [true, "Menu name is required"],
        unique: true,
        minlength: [3, "Menu name must be at least 3 characters long"],
        maxlength: [50, "Menu name must not exceed 50 characters"],
    },
    description: {
        type: String,
        required: [true, "Menu description is required"],
        minlength: [5, "Menu description must be at least 5 characters long"],
        maxlength: [200, "Menu description must not exceed 200 characters"],
    }
})

export default mongoose.model<IMenu>("Menu", MenuShema)