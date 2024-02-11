import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb+srv://mohsenhaidari0766:admin123@ticketingapp.eh03iq7.mongodb.net/?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;