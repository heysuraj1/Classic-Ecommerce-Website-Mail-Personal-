import baseUrl from '../helpers/baseUrl'
import {parseCookies} from 'nookies'
import { useRouter } from 'next/router'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import StripeCheckout from 'react-stripe-checkout'



// import useWindowSize from 'react-use/lib/useWindowSize'
// import Confetti from 'react-confetti'







const Cart = ({error,products}) => {
  let price  = 0
  const router = useRouter()
  const {token} = parseCookies()
  const [cProducts, setCartProduct] = useState(products)

  if(error){
    window.alert('some issue plz try later')
    
    router.push('/login')


  }




  const handelRemove = async (pid) =>{
    const res = await fetch(`${baseUrl}/api/cart`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json',
      'Authorization':token
    },
    body: JSON.stringify({
      productId:pid
    })
  })
  const res2 = await res.json()
  toast.success('Product Removed From Cart', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  setCartProduct(res2)

  }



  const Cartitems =() =>{
    return (
      <>
    
           {
         
             cProducts.map((hit =>{
              price = price + hit.quantity * hit.product.price
               return <tr key={hit._id}>
               <td>
                 <figure className="itemside align-items-center">
                   <div className="aside">
                   <Link href={`${baseUrl}/product/${hit.product._id}`}>
                     <img src={hit.product.mediaUrl} className="img-fluid yen" width={100} />
                  </Link>

                     </div>
                   <figcaption className="info">
                     <a href="#" className="title text-dark bhu"> {hit.product.name}</a>
                     {/* <p className="text-muted small">Matrix: 25 Mpx <br /> Brand: Canon</p> */}
                   </figcaption>
                 </figure>
               </td>
               <td> 
               
                <a href className="btn btn-light">{hit.quantity}</a>
              {/* </td> */}
               </td>
               <td> 
                 <div className="price-wrap"> 
                   <var className="price">₹ {hit.product.price}</var> 
                   {/* <small className="text-muted"> $315.20 each </small>  */}
                 </div> 
               </td>
               <td className="text-right"> 
                
                 <button href className="btn btn-danger vei" onClick={()=>{handelRemove(hit.product._id)}}> Remove</button>
               </td>
             </tr>
             }))
           }

   
      </>
    )
  }


  const handleCheckout = async (paymentInfo) =>{
    console.log(paymentInfo)

    const res = await fetch(`${baseUrl}/api/payment`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Authorization':token
      },
      body:JSON.stringify({
        paymentInfo
      })
      
    })
    const res2 = await res.json()
    console.log(res2)
    toast.success('🎉 Thanks For Puchasing', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    // router.push('/')
    

    //hey here

  }


  const TotalPrice = () =>{
    return (
      <div>
        <h5>total: ₹{price}</h5>
        {products.lenght != 0
        ? <StripeCheckout
        name = "My store"
        amount = {price *100}
        currency='INR'  // <=====<< You change this currency as per your requirement
        shippingAddress={true}
        billingAddress={true}
        zipCode={true}
        stripeKey='pk_test_51K5DxkSBkgrOeNWxd726JZI3S2vppyRrozQlfE3PbtJMwAokVec2GD3DUlEiTPK4S96Nr2gIsf9nswyJsdcsAw4s00ZCB7rLUU'
        token={(paymentInfo)=>handleCheckout(paymentInfo)}
        >
        <button className='btn btn-primary'>Checkout</button>
        </StripeCheckout>
        :
        <div>
          <h5>Your Cart Is Empty</h5>
        </div>
     
        }
      </div>
    )
  }
    return (
        <div>
          <div className='container'>
          <h1 >Your Cart</h1>  

          </div>
          <div>
          <div className="container">
             <div className="container mt-5 mb-5">
             <div className="row">
   <aside className="col-lg-9">
     <div className="card">
       <table className="table table-borderless table-shopping-cart">
         <thead className="text-muted">
           <tr className="small text-uppercase">
             <th scope="col">Product</th>
             <th scope="col" width={120}>Quantity</th>
             <th scope="col" width={120}>Price</th>
             <th scope="col" className="text-right" width={200}> </th>
           </tr>
         </thead>
         <tbody>
            


             {Cartitems()}
              </tbody>
       </table>
       <div className="card-body border-top">
         <p className="icontext"><i className="icon text-success fa fa-truck" /> Fastest Delivery Ever...</p>
       </div> 
     </div> 
   </aside> 
   <aside className="col-lg-3">
    {/* //here paymen */}
    {TotalPrice()}
    
   </aside> 
             </div>
         </div>



         </div>


           


          </div>
        </div>
    );
}


export async function getServerSideProps(ctx) {
    const {token} = parseCookies(ctx)
    if(!token){
      return {
        props: {products:[]}   
      }
    }



  const res = await fetch(`${baseUrl}/api/cart`,{
    headers:{
      "Authorization":token
    }
  })
  const products = await res.json()
  if(products.error){
    return{
      props:{error:products.error}
    }
  }

  console.log("products ",products)
  return {
    props: {products}    //<====<< Maybe there could be error, check it at video time number => 16:15
  }

}
export default Cart;
