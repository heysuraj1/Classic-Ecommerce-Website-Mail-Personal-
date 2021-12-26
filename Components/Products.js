import Link from 'next/link'


const Products = ({product},props) => {
    return (
        <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          {props.title}
        </h2>
      </div>
      <div className="row">
        {
          product.slice(0, 8).map((hit)=>{
            return <div className="col-sm-6 col-xl-3" key={hit._id}>
            <div className="box">
              <Link href={`http://192.168.43.53:3000/product/${hit._id}`}>
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
          View All
        </a>
        </Link>
        
      </div>
      



     
    </div>
  </section>
    );
}

export default Products;



