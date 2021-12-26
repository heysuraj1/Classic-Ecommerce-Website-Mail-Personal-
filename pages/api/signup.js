import initDB from '../../helpers/initDB'
import User from '../../models/User'
import bcrypt from 'bcryptjs'
import Cart from  '../../models/Cart'



initDB()

export default  async (req,res) =>{
    const {name,email,password} = req.body

    try {
        if (!name || !email || !password ) {
           return res.status(422).json({error:"Please Fill All The Colons"})
        }
       const user = await User.findOne({email})
       if(user){
           return res.status(422).json({error:"This user already exist please choose another one"})
       }
       const hashedPassowd = await bcrypt.hash(password,12)
     const newUser =  await new User({
           name,
           email,
           password:hashedPassowd
       }).save()
     await new Cart({user:newUser._id}).save()
      
       res.status(201).json({message:"signup success"})





    } catch (error) {
        console.log(error)
    }
}