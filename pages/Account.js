import {parseCookies} from 'nookies'
import baseUrl from '../helpers/baseUrl'
import { useEffect } from 'react'
// import ReactCanvasConfetti from 'react-canvas-confetti';
// import useWindowSize from './useWindowSize';
import React from 'react'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
const Account = ({ord}) => {
//   const {token} = parseCookies()
console.log({ord})

const cook = parseCookies();
const user = cook.user ? JSON.stringify(cook.user) : "";
const userE = cook.userE ? JSON.stringify(cook.userE) : "";
const userR = cook.userR ? JSON.stringify(cook.userR) : "";






    return (
        <div>
            {
                user ?
                <>

                <div className="container">
                <div className="text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" width={70} alt="" />
                </div>
                <div className="container text-center mt-4">
                    <h1>Hey {user}</h1>
                    <h5> Here Is Your Purchase History</h5>
                </div>
                <div className="container mt-4">
                    
                    <div className="container">
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Purchased Date</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Amount</th>
                        
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        </tr>
                    </thead>
                       {/* here is code  */}
                       {/* {OrderHistory()} */}
                       {
                            ord.map((hit)=>{
                                return <tbody  key={hit._id}>
                                <tr>
                                    
                                <td>{(hit.createdAt)}</td>
                                
                                
                                {
                                    hit.products.map(pitem =>{
                                        return <td key={pitem._id}>{pitem.product.name}</td>
                                    })
                                }
                                {
                                    hit.products.map(pitem =>{
                                        return <td key={pitem._id}>₹ {pitem.product.price}</td>
                                    })
                                }
                                
                               
                                {
                                    hit.products.map(pitem =>{
                                        return <td key={pitem._id}>{pitem.quantity}</td>
                                    })
                                }

                                    
                                
                                <td>₹ {hit.total}</td>
                                </tr>
                                
                                </tbody>
                            })
                        }
                    </table>
                    </div>
                </div>
                



            </div>
            <div className="text-center mt-5 mb-5">

  </div>
  </>

                :


                <h3 className='text-center' >You Are Not Logged In ! Please Login To View This Page</h3>
            }
            
        </div>
    );
}



export async function getServerSideProps(ctx) {
    // const router = useRouter()
    const { token } = parseCookies(ctx);
  
    const res = await fetch(`${baseUrl}/api/Orders`, {
      headers: { Authorization: token },
    });
    const res2 = await res.json();
    console.log(res2);
  
    return {
      props: { ord: res2 },
    };
  }
  

export default Account;





