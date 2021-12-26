import Product from '../../../models/Product'


export default async (req,res) =>{

    switch (req.method) {
        case 'GET':
            await getProduct(req,res)
            break;
        

           
    
        default: 
            break;
    }




    
}



const getProduct = async (req,res) =>{
    // console.log(req.query)
    const {pid} = req.query
     const product = await Product.find({collect:"women"})
    res.status(200).json(product)    
}


