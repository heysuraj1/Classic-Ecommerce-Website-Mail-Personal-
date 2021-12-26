import Product from '../../models/Product'


export default async (req,res) =>{
    const {search} = req.body
    const product = await Product.find({ $text: { $search: search,$caseSensitive: false } })
    await res.status(200).json(product)  

    
}
