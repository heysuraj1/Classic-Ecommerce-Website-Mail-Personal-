import NavBar from "../Components/NavBar";
import Products from "../Components/Products";
import Hero from "../Components/Hero";
// import Promo from "../Components/Promo";
import Collections from "../Components/Collections";
import Collect from "../Components/Collect";
// import pSlider from "../Components/pSlider";
import baseUrl from '../helpers/baseUrl'



const index = ({products}) => {
  // console.log(products)
  return <div>
    {/* <NavBar/> */}
    <Hero/>
    <Products  product={products}/>
    {/* <Promo/> */}
    {/* <pSlider/> */}
    <Collect/>
    <Collections/>
    

    


  </div>;
};

export default index;


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
//   const res = await fetch(`${baseUrl}/api/products`)
//   const data = await res.json()
//   return {
//     props:{
//       products:data
//     }
//   }
// }
