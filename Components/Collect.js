import Link from 'next/link'

const Collect = () => {
    return (
        <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Collections
        </h2>
      </div>
      <div className="row">
      <div className="col-md-6 net">
<div className="box">
  <Link href='/men'>
  <a >
    <div className="img-box">
      <img src="images/men.png"  />
    </div>
   
    <div className="new">
      <span>
        {"Men's"}
      </span>
    </div>
  </a>
  </Link>
</div>
    </div>
      <div className="col-md-6 net">
<div className="box">
    <Link href='/women'>
  <a >
    <div className="img-box">
      <img src="images/women.png"  />
    </div>
    
    <div className="new">
      <span>
        {"Women's"}
      </span>
    </div>
  </a>
        </Link>
</div>
    </div>
      <div className="col-md-6 net">
<div className="box">
    <Link href='/kids'>
  <a >
    <div className="img-box">
      <img src="images/kid.png"  />
    </div>
    
    <div className="new">
      <span>
        {"Kid's"}
      </span>
    </div>
  </a>
    </Link>
</div>
    </div>
      <div className="col-md-6 net">
<div className="box">
    <Link href='/watch'>
  <a >
    <div className="img-box">
      <img src="images/w1.png"  />
    </div>
    
    <div className="new">
      <span>
        Watches
      </span>
    </div>
  </a>
    </Link>
</div>
    </div>
      
      
        
      </div>
      
    </div>
  </section>
    );
}

export default Collect;


