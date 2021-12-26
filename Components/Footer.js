const NavBar = () => {
    return (
      <footer className="footer_section">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-lg-3 footer-col">
        <div className="footer_detail">
          <h4>
            About
          </h4>
          <p>
            Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="footer_social">
            <a >
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a >
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
            <a >
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
            <a >
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 footer-col">
        <div className="footer_contact">
          <h4>
            Reach at..
          </h4>
          <div className="contact_link_box">
            <a >
              <i className="fa fa-map-marker" aria-hidden="true" />
              <span>
                Location
              </span>
            </a>
            <a >
              <i className="fa fa-phone" aria-hidden="true" />
              <span>
                Call +01 1234567890
              </span>
            </a>
            <a >
              <i className="fa fa-envelope" aria-hidden="true" />
              <span>
                demo@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 footer-col">
        <div className="footer_contact">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 footer-col">
        {/* //Your code goes here */}
      </div>
    </div>
    
  </div>
</footer>

    );
}

export default NavBar;