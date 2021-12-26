
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router'
import baseUrl from '../../helpers/baseUrl'
import { parseCookies } from "nookies";
import cookie from 'js-cookie'
import {useState} from 'react'
import Link from 'next/link'



const Product = ({product}) => {

  const cook = parseCookies();
  const user = cook.user ? JSON.stringify(cook.user) : "";
  // const userE = cook.userE ? JSON.stringify(cook.userE) : "";
  const userR = cook.userR ? JSON.stringify(cook.userR) : "";
  const [quantity, setQuantity] = useState(1)





    const router = useRouter()
    if(router.isFallback){
        return (
            <>
            <h3 className='text-center mt-5' >Loading...</h3>
            <p className='text-center mt-2'>please have patience</p>
            </>
        )
    }
    const handelClick =  () =>{
        console.log('Add To Cart Clicked')
    }



    const handelDelete = async () =>{
      console.log('Delete Button Clicked')
      const res = await fetch(`${baseUrl}/api/product/${product._id}`,{
        method:'DELETE'
      })
      console.log({res})
      await res.json()
      // toast.success("Deleted Successfully")
      toast.success('Deleted Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    
      const timer = setTimeout(() => {
        router.push('/AllProducts')
      }, 0.02);
      return () => clearTimeout(timer);

    }

    const handelCancelDetele = () =>{
      toast("Canceled")

    }
    
 
  const AddToCart = async () =>{
    const res =  await fetch(`${baseUrl}/api/cart`,{
         method:'PUT',
         headers:{'Content-Type':'application/json',"Authorization":cook.token
       },
       body: JSON.stringify({
           quantity,
           productId:product._id
       })
     })
     const res2 = await res.json()
     // console.log(res2)
     if(res2.error){
    //  window.alert(res2.error)

    //  toast.error(res2.error)
    toast.error(res2.error, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    
      

     }else{

      //  window.alert('Product Added')

      // toast.success('Product Added')
      toast.success('😊 Product Added To Cart', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    

     }


 }
 
   


    return(
        <div className="container">
            <div className="card mt-5 mb-5">
  <div className="row no-gutters">
    <aside className="col-sm-6 border-right">
      <article className="gallery-wrap"> 
        <div className="img-big-wrap text-center">
          <a ><img width={500} className="img-fluid" src={product.mediaUrl} /></a>
        </div> {/* img-big-wrap.// */}
        {/* <div className="thumbs-wrap">
          <a href="#" className="item-thumb"> <img src="bootstrap-ecommerce-html/images/items/1.jpg" /></a>
          <a href="#" className="item-thumb"> <img src="bootstrap-ecommerce-html/images/items/2.jpg" /></a>
          <a href="#" className="item-thumb"> <img src="bootstrap-ecommerce-html/images/items/3.jpg" /></a>
          <a href="#" className="item-thumb"> <img src="bootstrap-ecommerce-html/images/items/4.jpg" /></a>
        </div>  */}
      </article> 
    </aside>
    <main className="col-sm-6">
      <article className="content-body">
        <h2 className="title m-3">{product.name}</h2>
        <div className="h3 mb-4"> 
          <var className="price h4 m-3">₹ {product.price}</var> 
        </div> 
        <p className="m-3">{product.description}</p>
       
       
          <div className="container mt-3" >
              <h6>Quantity</h6>
            {/* <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} /> */}
            <div className="input-group mb-3">
                
                <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            </div>

          </div>
          
          {/* <div className="container mt-3" >
          <h6>Size</h6>
            <select className="form-control">
              <option> Size </option>
              <option> XL </option>
              <option> MD </option>
              <option> XS </option>
            </select>
          </div> */}
              {
                user ? 
                
          <div className="container mt-3" >
            <a className="btn  btn-primary w-100 yen" 
            onClick={()=>AddToCart()}
            
            
            > Add to cart <i className="fas fa-shopping-cart" /></a>
          </div>
                
                :
            <div className="container mt-3" >
              <a className="btn  btn-primary w-100 yen" onClick={()=>{
                toast.error('😐 You Need To Log In First', {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
                
       
                  const timer = setTimeout(() => {
                    router.push('/Login')
                  }, 0.1);
                  return () => clearTimeout(timer);
              }}> Add to cart <i className="fas fa-shopping-cart" /></a>
          </div>
                



              }
          {
            userR == '"admin"' ? 
            
          <div className='container mt-5'>
          {/* <div className="text-center">
            <button type="submit" className="btn btn-danger"><a className="sub">DELETE</a></button>
        </div> */}
            <div className="text-center">
  {/* Button trigger modal */}
  {/* <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"> */}
  <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handelDelete}>Yes Delete This</button>
  {/* <button >
    DELETE
  </button> */}
  {/* Modal */}
  {/* <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Delete {product.name}</h5>
          
        </div>
        <div className="modal-body">
          Are You Sure You Want To Delete {product.name} ?
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handelCancelDetele}>No Cancel</button>
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handelDelete}>Yes Delete This</button>
          
        </div>
      </div>
    </div>
  </div> */}
            </div>




          </div>
            
            
            :



            ""
          }


         
         
          
          
      
      </article> 
    </main> 
  </div> 
</div>

        </div>
    )
}


export async function getServerSideProps({params:{id}}) {
   const res = await fetch(`${baseUrl}/api/product/${id}`)
  const data = await  res.json()
    return {
      props: {product:data}
    }
  }

  export default Product;