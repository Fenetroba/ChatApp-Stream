import { generateStreamToken } from "../lib/stream.js";

export const GetStreamToken = async (req, res) => {
     try {
         const userId = req.UserOne._id;     
           // Assuming you have a function to generate a token
           const token = await generateStreamToken(userId);
           res.status(200).json({
               success: true,
               token
           });
     } catch (error) {
           res.status(500).json({
               success: false,
               message: 'Internal Server Error'
           });
     }
}