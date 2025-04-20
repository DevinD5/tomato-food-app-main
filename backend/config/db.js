import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://sohamganguly1002:soham123@cluster0.2x7lq.mongodb.net/?`).then(() => console.log('DB Connected'));
}