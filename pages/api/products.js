

import initDB from '../../helpers/initDB'
import Product from '../../models/Product'
import Cors from 'cors'


initDB()

export default async (req,res)=>{

  switch (req.method)
    {
       case "GET":
         await getallProducts(req,res)
         break
       case "POST":
         console.log('POST tak pahucha')
         await saveProduct(req,res)   
         break
    }  
}


const getallProducts = async (req,res,)=>{

  try{

    // let { page ,size } = req.query
    // if(!page){
    //   page = 1
    // }
    // if (!size){
    //   size = 5
    // }

    // const limit = parseInt(size);
    // const skip = (page - 1) * size;

    // const products =  await Product.find().limit(limit).skip(skip)
    const products =  await Product.find().sort({_id:-1});
    res.status(200).json(products)
  }catch(err){
    console.log(err)
  }
  
}


const saveProduct = async (req,res)=>{
  console.log('body ke andar ghusa')

  
  // res.header("Access-Control-Allow-Methods", "POST");
 
  const {name,price,description,mediaUrl,collect} =  req.body
  console.log('check ho raha')

  try{
      if(!name || !price || !description || !mediaUrl || !collect){
    return res.status(422).json({error:"Please add all the fields"})
  }
   const product = await new Product({
     name,
     price,
     description,
     mediaUrl,
     collect
   }).save()
   res.status(201).json(product)
  }catch(err){
    res.status(500).json({error:"internal server error"})
    console.log(err)
  }


}