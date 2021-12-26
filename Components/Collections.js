const Collections = () => {
    return (
      <section className="feature_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
            Features Of Our Watches
          </h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="box">
              <div className="img-box">
                <img src="images/f1.png"  />
              </div>
              <div className="detail-box">
                <h5>
                  Fitness Tracking
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                <a >
                  <span>
                    Read More
                  </span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="box">
              <div className="img-box">
                <img src="images/f2.png"  />
              </div>
              <div className="detail-box">
                <h5>
                  Alerts &amp; Notifications
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                <a >
                  <span>
                    Read More
                  </span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="box">
              <div className="img-box">
                <img src="images/f3.png"  />
              </div>
              <div className="detail-box">
                <h5>
                  Messages
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                <a >
                  <span>
                    Read More
                  </span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="box">
              <div className="img-box">
                <img src="images/f4.png"  />
              </div>
              <div className="detail-box">
                <h5>
                  Bluetooth
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                <a >
                  <span>
                    Read More
                  </span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a >
            View More
          </a>
        </div>
      </div>
    </section>
    );
}

export default Collections;