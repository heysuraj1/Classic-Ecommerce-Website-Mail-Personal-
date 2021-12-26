import Link from 'next/link'
import {useState,useEffect} from 'react'
import baseUrl from '../helpers/baseUrl'
import cookie from 'js-cookie'
import {useRouter} from 'next/router'
import { parseCookies } from "nookies";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let router = useRouter()


  const cook = parseCookies();
const user = cook.user ? JSON.stringify(cook.user) : "";



  const handelLogin = async (e) =>{

    



    e.preventDefault()
    console.log(email,password)
    const res =  await fetch(`${baseUrl}/api/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const res2 = await res.json()


    
    if(res2.error){
      // M.toast({html: res2.error,classes:"red"})
      // window.alert(res2.error)
      // toast(res2.error)
      toast.error('😓 '+ res2.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    }else{
      // window.alert()
      // toast('Welcome, You Are Logged In')
      toast.success('😊 Welcome, You Are Logged In', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      
       console.log(res2)
       cookie.set('token',res2.token)
       cookie.set('user',res2.user.name)
       cookie.set('userE',res2.user.email)
       cookie.set('userR',res2.user.role)
      //  router.push('/')
      const timer = setTimeout(() => {
        router.push('/')
      }, 0.1);
      return () => clearTimeout(timer);

    }


  }

  useEffect(() => {
    if (user) {
      toast.error('You Are Already Logged In ! Go Back Home', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
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
      {user ? 
          
          <h3 className='text-center'>Method Not Allowed</h3>
          

          
          
          :
          <div className="container mt-5 mb-5">
          
            <div className="container text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" width={70} alt="" />
                <h5 className="mt-2">Login Please</h5>
            </div>
            <form onSubmit={(e)=>handelLogin(e)}>
  <div className="mb-2">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  
  <div className="text-center">

  <button type="submit" className="btn btn-warning"><a className="sub">SUBMIT</a></button>
  </div>
</form>
<Link href='/Signin'>
<p className="text-center yen  mt-5">{"Don't Have An Account ?"}</p>
</Link>



        </div>
          
          
          }
        
        </>
    );
}

export default Signin;