import initDB from '../../helpers/initDB'
import Order from '../../models/Order'
import Authenticated from '../../helpers/Authenticated'


initDB()


export default  async (req,res) =>{
   const orders =  await Order.find();
   res.status(200).json(orders)
}