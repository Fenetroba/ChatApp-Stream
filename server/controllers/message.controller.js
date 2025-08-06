import { generateStreamToken } from "../lib/stream.js";
import messages from "../models/message.model.js";
import cloudinary from '../lib/cloudinary.js'
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

export const GetMessage=async(req,res)=>{
try {
     const Myid=req.UserOne._id;
     const {id:UserChatId}=req.params

   const FindMyMessage=await messages.find({

     $or:[{receiverId:UserChatId,senderId:Myid},
          {senderId:UserChatId, receiverId:Myid}
     ]
   }) 

   return res.status(200).json({success:true, FindMyMessage})

} catch (error) {
console.log(error.message)
  res.status(500).json({
    success: false,
    message: 'Internal Server Error'
}); 
 
}



}
export const SendMessage=async(req,res)=>{

  try {
     const {text,image}=req.body;
     const {id:receiverId}=req.params;
     const MyId=req.UserOne._id;

     let ImgUrl;
     if(image){
      const UploadResponse=await cloudinary.uploader.uplode(image)
       ImgUrl=UploadResponse.secure_url
     }
     const NewMessage= new messages({
    text,
    receiverId,
    senderId:MyId,
    image:ImgUrl

     })

     await NewMessage.save();

     return res.status(200).json({success:false,NewMessage})

  } catch (error) {
    console.log(error.message)
  res.status(500).json({
    success: false,
    message: 'Internal Server Error on SendMessage'
}); 
  }
}