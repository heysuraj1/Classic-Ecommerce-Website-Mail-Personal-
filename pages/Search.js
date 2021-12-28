import baseUrl from '../helpers/baseUrl'
// import Product from "../Components/Products";
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/search.module.css'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Search = ({products}) => {
  const [search, setSearch] = useState("")
  const [data, setData] = useState("")
  const [hil, setHil] = useState("")





  const handleSearch  = async (e) =>{
    e.preventDefault()
    // console.log(search)

    const res =  await fetch(`${baseUrl}/api/searchProduct`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        search
      })
    })
    const res2 = await res.json()
    // console.log({res2})  
    // setData(res2)
    //  console.log('niche wala')
    console.log(res2)

    if (res2.name) {

     <h1>Nothing To Show</h1>
      
    } else {
      setHil(
        <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            
          </div>
          <div className="row">
            {
              res2.map((hit)=>{
                return <div className="col-sm-6 col-xl-3" key={hit._id}>
                <div className="box">
                  <Link href={`${baseUrl}/product/${hit._id}`}>
                  <a >
                    <div className="img-box">
                      <img src={hit.mediaUrl}  />
                    </div>
                    <div className="detail-box">
                      <h6>
                        {hit.name}
                      </h6>
                      <h6>
                        Price:
                        <span>
                        ₹ {hit.price}
                        </span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>
                        {hit.collect}
                      </span>
                    </div>
                  </a>
                  </Link>
                </div>
              </div>
              })
            }
            
            
            
          </div>
          
            
          
          
    
    
    
         
        </div>
      </section>
        )
      
    }

    


   






    







  }
  // console.log(data)
  // const showData =  () =>{
  //   {
  //     data.map((hit)=>{
  //       return <h1 key={hit._id}>{hit.name}</h1>
  //     })
  //   }
  // }






    return (
      <>

      <Head>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700"/>

      </Head>





        <div  className="container"> 
        <h4 className="text-center mt-5">Here You Go, Search Something Nice...</h4>
            <div className="container mt-3 mb-5">



            <form className="col-12 col-lg-auto mb-3 mb-lg-0 " onSubmit={(e)=>handleSearch(e)}>
              <input type="search" className="form-control zel" placeholder="Hit Enter To Search..." aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
              {/* <button className='btn btn-primary'>Search</button> */}
            </form>


            <div className='container'>
              {/* {showData()} */}
              {hil}
            </div>






            
        {/* <h4 className="text-center mt-5"></h4> */}
        <div className="container mt-5">
        <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h4>
        you might like it too...
        </h4>
      </div>
      <div className="row">
        {
          products.slice(0, 8).map((hit)=>{
            return <div className="col-sm-6 col-xl-3" key={hit._id}>
            <div className="box">
              <Link href={`${baseUrl}/product/${hit._id}`}>
              <a >
                <div className="img-box">
                  <img src={hit.mediaUrl}  />
                </div>
                <div className="detail-box">
                  <h6>
                    {hit.name}
                  </h6>
                  <h6>
                    Price:
                    <span>
                    ₹ {hit.price}
                    </span>
                  </h6>
                </div>
                <div className="new">
                  <span>
                    {hit.collect}
                  </span>
                </div>
              </a>
              </Link>
            </div>
          </div>
          })
        }
        
        
        
      </div>
     
        
      <div className="btn-box">
        <Link href='/AllProducts'>
        <a >
          View More
        </a>
        </Link>
      </div>
       
    </div>
  </section>

        </div>
            </div>
            

            
        </div>
        </>
    );
}

export default Search;



export async function getServerSideProps(){
    const res = await fetch(`${baseUrl}/api/products`)
    const data = await res.json()
    return {
      props:{
        products:data
      }
    }
  }
  
// export async function getStaticProps(){
//     const res = await fetch(`${baseUrl}/api/products`)
//     const data = await res.json()
//     return {
//       props:{
//         products:data
//       }
//     }
//   }
  