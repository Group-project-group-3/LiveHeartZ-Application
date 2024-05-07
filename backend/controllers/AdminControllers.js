import AdminData from "../models/AdminData.js";
import bcrypt from 'bcrypt';
export const createAdmin = async (req, res) => {

    try {
        const { username,password,email,mobile } = req.body;
        
   const hashed = await bcrypt.hash(password, 10);

        const admin = new AdminData({
            email,
            username,
            mobile,
            password:hashed
        });

        await admin.save();

        res.status(200).json({ success: true, message: 'Successfully Data Added' });
    } catch (error) {
        // console.error('Error:', error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}
