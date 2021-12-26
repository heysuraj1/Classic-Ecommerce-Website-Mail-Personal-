import Link from 'next/link'
import baseUrl from '../helpers/baseUrl'
import InfiniteScroll from 'react-infinite-scroll-component';

const AllProducts = ({products}) => {
    return (
        <div>
            <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
        All Products
        </h2>
      </div>
      <div className="row">
        
            {
                products.map((hit)=>{
            
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
    
            
        </div>
    );
}

export default AllProducts;



export async function getServerSideProps({params}) {


   const res = await fetch(`${baseUrl}/api/products`)
   const data = await res.json()

    return {
      props: {products:data}
    }
  }