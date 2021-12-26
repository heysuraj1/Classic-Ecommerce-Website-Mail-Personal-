import initDB from '../../helpers/initDB'
import User from '../../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



initDB()

export default async (req,res) =>{
    const {email,password} = req.body

    try {
        if (!email || !password ) {
           return res.status(422).json({error:"Please Fill All The Colons"})
        }
       const user = await User.findOne({email})
       if(!user){
           return res.status(404).json({error:"User not found"})
       }
       const doMatch = await bcrypt.compare(password,user.password)
 
        if(doMatch){
         const token =  jwt.sign({userId:user._id},process.env.JWT_SECRET,{
                expiresIn:"7d"
            })
            res.status(201).json({token})
            
        }else{
            res.status(401).json({error:"Input Credentials Are Not Valid"})
            
        }



    } catch (error) {
        console.log(error)
    }
}