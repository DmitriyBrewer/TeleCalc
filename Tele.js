import mongoose from "mongoose";

const Tele = new mongoose.Schema({
  min: { type: String },
  sms: { type: String },
  gb: { type: String },
  facebook: { type: String },
  instagram: { type: String },
  vk: { type: String },
  pinterest: { type: String },
  linkedin: { type: String },
  whatsapp: { type: String },
  telegram: { type: String },
  message: { type: String },
  mail: { type: String },
  inbox: { type: String },
});

export default mongoose.model("Tele", Tele); //название 'Tele' модель Tele
