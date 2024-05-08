import mongoose from "mongoose";

const DonorSchema = new mongoose.Schema({

    fullname: { type: String },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number },
    password: { type: String },
    bloodgroup: { type: String },
    gender: { type: String }
}

)
export default mongoose.model('Donor', DonorSchema);
