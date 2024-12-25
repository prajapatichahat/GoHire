import React from 'react'
import { ReactTyped as Typed } from 'react-typed';


function Home() {
  return (
    <>
    <div className="hero_area">
  <section className="slider_section ">
    <div className="container ">
      <div className="row align-items-end justify-content-between">
        <div className="col-md-7">
          <div className="box">
            <div className="detail-box">
              <h4>FEW CLICKS AWAY TO BOOK A</h4>
              <h2>
       {" "}
        <Typed
          strings={["PROFESSIONAL DRIVER 🚀", "POLICE VERIFIED DRIVER 🎨", "EXPERIENCED DRIVER 💻"]}
          typeSpeed={50} 
          backSpeed={50} 
          loop 
        />
      </h2>
            </div>
            <div className="d-none d-md-block d-lg-block d-sm-none">
              <img
                src="images/slider-img.webp"
                className="w-100 mt-5"
                alt="slider-img"
              />
              <img
                src="images/driver.gif"
                className=" walk-driver"
                alt="walk driver"
              />

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 ">
          <div className="booking-Card">
            <div className="row">
              <div className="col-6 card-1 d-flex justify-content-center text-center">
                <div className="bookCard">
                  <div style={{ cursor: "pointer" }}>
                    <div className="card-inner">
                      <div className="card-image">
                        <img src="images/card1.jpg" alt="Local driver booking" />
                      </div>
                      <div className="card-content">
                        <h2 className="card-title">LOCAL</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 card-2 d-flex justify-content-center text-center">
                <div className="bookCard">
                  <a href="/outstation-booking/">
                    <div className="card-inner">
                      <div className="card-image">
                        <img src="images/card2.jpg" alt="Outstaion driver booking" />
                      </div>
                      <div className="card-content">
                        <h2 className="card-title">OUTSTATION</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-6 card-3 d-flex justify-content-center text-center">
                <div className="bookCard">
                  <a href="/outstation-drop-booking/">
                    <div className="card-inner">
                      <div className="card-image">
                        <img
                          src="images/card3.jpg"
                          alt="Outstaion drop driver booking"
                        />
                      </div>
                      <div className="card-content">
                        <h2 className="card-title">OUTSTATION DROP</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-6 card-4 d-flex justify-content-center text-center">
                <div className="bookCard">
                  <a href="/permanent-drivers/">
                    <div className="card-inner">
                      <div className="card-image">
                        <img src="images/card4.jpg" alt="Permanent driver booking" />
                      </div>
                      <div className="card-content">
                        <h2 className="card-title">PERMANENT</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default Home;