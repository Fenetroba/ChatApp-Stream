import mongoose from 'mongoose'

import bcrypt from 'bcrypt'

const userSchema =new mongoose.Schema({
Fullname:{type:String ,required:true},
email:{type:String, required:true, unique:true },
password:{type :String, required:true},
bio: {
     type: String,
     default: "",
   },
   profilePic: {
     type: String,
     default: "",
   },
   nativeLanguage: {
     type: String,
     default: "",
   },
   learningLanguage: {
     type: String,
     default: "",
   },
   location: {
     type: String,
     default: "",
   },
   isOnboarded: {
     type: Boolean,
     default: false,
   },
   friends: [
     {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
     },
   ],
 },{timestamps:true}

);

const User = mongoose.model("User", userSchema);
   
export default User;
userSchema.pre('save',async(next)=>{

try {
     const salt= await bcrypt.salt(10);
  this.password=await bcrypt.hash(this.password,salt)
   next()

} catch (error) {
     next(error) 
}

})
