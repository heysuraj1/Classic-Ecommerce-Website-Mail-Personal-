import baseUrl from '../helpers/baseUrl'
import Link from 'next/link'
import {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { parseCookies } from "nookies";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  
  const cook = parseCookies();
const user = cook.user ? JSON.stringify(cook.user) : "";






  const handelSubmit = async (e)=>{
    e.preventDefault()
    // console.log('hey this form submited')
    console.log({name,email,password})
    const res =  await fetch(`${baseUrl}/api/signup`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name,
                email,
                password

            })
        })

        const res2 = await res.json()
        if (res2.error){
            // console.log('Some error while sending user bhak')
            toast.error(res2.error, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              })
        }else{
            // console.log('Ok done done')
            toast.success(res2.error, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              })
            router.push('/Login')
            

        }
  }


  useEffect(() => {
    if (user) {
      toast.success('You Are Already Logged In ! Go Back Home', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        const timer = setTimeout(() => {
          router.push('/')
        }, 3000);
        return () => clearTimeout(timer);
      
    }
  }, [])




    return (
      <>
      {
        user ? 
        <h3 className='text-center'>Method Not Allowed</h3>


        :

        <div className="container mt-5 mb-5">
            <div className="container text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" width={70} alt="" />
                <h5 className="mt-2">Register Please</h5>
            </div>
            <form onSubmit={(e)=>handelSubmit(e)}>
  <div className="mb-2">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  
  <div className="mb-2">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  
  <div className="text-center">

  <button type="submit" className="btn btn-warning"><a className="sub">SUBMIT</a></button>
  </div>
</form>
<Link href='/Login'>
<p className="text-center yen  mt-5">{"Already Have An Account ?"}</p>
</Link>


        </div>

      }
      </>
    );
}

export default Signin;