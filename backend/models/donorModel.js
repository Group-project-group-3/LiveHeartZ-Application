module.exports = mongoose => {
    const donorSchema = new mongoose.Schema({
      donorId: { type: mongoose.Schema.Types.ObjectId, auto: true },
      fullName: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      emailAddress: { type: String, required: true },
      password: { type: String, required: true },
      bloodGroup: { type: String, required: true },
      birthDate: { type: Date },
      gender: { type: String },
      lastDonationDate: { type: Date },
      address: { type: String },
      city: { type: String },
      state: { type: String },
      zipCode: { type: String },
      showPhoneNumber: { type: String },
      smsAlert: { type: String },
      province: { type: String },
      district: { type: String },
      region: { type: String },
      storedOtp: { type: String }, // New field to store the OTP
      isVerified: { type: Boolean, default: false } // New field to store verification status
    }, { timestamps: true });
  
    donorSchema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Donor = mongoose.model("Donor", donorSchema);
    return Donor;
  };
  
