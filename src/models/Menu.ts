import mongoose, { Schema, Document } from "mongoose";

export interface IMenu extends Document {
    name: string;
    description: string;
}

const MenuShema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
})

export default mongoose.model<IMenu>("Menu", MenuShema)