import Product from '../../models/Product'


export default async (req,res) =>{
    const {pid} = req.query
    await Product.findOneAndUpdate({_id:pid})
    res.status(200).json({}) 





}