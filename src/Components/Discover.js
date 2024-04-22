import React from "react";
import "../Css/discover.css";
import FooterCompo from "./Footer";

function About() {
  return (
    <>
      <div className="container">
        <div className="row diss_container">
          <div className="col-md-6 first_div">
            <div>
              <img
                src="https://mackinlay.in/img/about-2.jpg"
                alt="Not Found"
                className="about_img mt-3"
              />
            </div>
            <div className="under_about_div ">
              <img
                src="https://mackinlay.in/img/about-1.jpg"
                alt="Not Found"
                className="about_img_two"
              />
            </div>
          </div>

          {/* <div className="col-md-6">
            <div className="dtl_about ">
              <h4 style={{ color: "#4b91d3" }}>Learn About Us</h4>
              <h1 className="ms-5 glad_head">
                Hi there! Glad to see you here.
              </h1>
              <p className="fs-5">
                Mackinlay is not just an IT company; we are architects of
                innovation, dedicated to transforming the digital landscape.
                Established two years ago, we have quickly become a beacon of
                excellence in the Information Technology sector. With a sharp
                focus on the Banking, Financial Services, and Insurance (BFSI)
                sector, we navigate the complexities of this domain with
                precision and expertise
              </p>
              <p className="fs-5">
                Our BFSI specialization ensures a deep understanding of the
                sector's nuances, allowing us to deliver tailored solutions that
                meet the unique needs of our clients.
              </p>
            </div>
          </div> */}
          <div class="col-md-12 col-lg-6 under_discover">
            <div class="milion_job_content dtl_about">
              <p>Learn About Us</p>
              <p class="find">
                Hi there! <span>Glad</span> to see you here.
              </p>
              <p class="pe-5 ">
                Mackinlay is not just an IT company; we are architects of
                innovation, dedicated to transforming the digital landscape.
                Established two years ago, we have quickly become a beacon of
                excellence in the Information Technology sector. With a sharp
                focus on the Banking, Financial Services, and Insurance (BFSI)
                sector, we navigate the complexities of this domain with
                precision and expertise.
              </p>
              <div class="d-flex justify-content-start mt-4">
                <button class="btn more-btn search-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* **************product part***************** */}

      <div className="container product_heading">
        <h1 className="product_head">Our Products and Innovation</h1>
      </div>

      <div className="container product_container">
        <div className="row " data-aos="zoom-in-up">
          <div className="col-md-6 product_one">
            <div>
              <img
                src="https://mackinlay.in/img/hr_connect_app.jpeg"
                className="image_size"
              />
            </div>
            <div className="row  hr_dtl " data-aos="zoom-in-up">
              <div className="col-md-12 global_div">
                <span className="col-md-1 hrconnect">HR Connect Pro</span>
                <div className="col-md-2 mission_icon">
                  <span>
                    <i class="fa-solid fa-bars-progress"></i>
                  </span>{" "}
                  <span className="fs-5"> Mission</span>
                </div>
                <div className="dtl_para fs-5">
                  <span>
                    With HRConnect Pro, we redefine HR management, offering a
                    product that stands at the forefront of technology and
                    efficiency.
                  </span>
                </div>

                <div>
                  <span style={{ color: "#4b91d3" }}>
                    <span>
                      <i class="fa-solid fa-grip-lines"></i>
                    </span>{" "}
                    <span>Read More</span>
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>

          <div className="col-md-6 product_two">
            <div>
              <img
                src="https://mackinlay.in/img/social_app.jpeg"
                className="image_size"
                alt="Not found"
              />
            </div>
            <div className="row media_dtl " data-aos="zoom-in-up">
              <div className="col-md-12 Partner">
                <span className="col-md-1 media">MediAI Connect</span>
                <div className="col-md-2 mission_icon">
                  <span>
                    <i class="fa-solid fa-bars-progress"></i>
                  </span>{" "}
                  <span className="fs-5"> Mission</span>
                </div>
                <div>
                  <span className="fs-5">
                    The means of interactions among people in which they create,
                    share, and/or exchange information and ideas in virtual
                    communities and networks
                  </span>
                </div>

                <div>
                  <span style={{ color: "#4b91d3" }}>
                    <span>
                      <i class="fa-solid fa-grip-lines"></i>
                    </span>{" "}
                    <span>Read More</span>
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <FooterCompo />
    </>
  );
}

export default About;
