import React from "react";
import "../Css/home.css";
import carousel_1 from "../Assetes/images/image 1 (2).png";
import carousel_2 from "../Assetes/images/carousel_2.png";
import carousel_3 from "../Assetes/images/carousel_3.png";
import qualified from "../Assetes/images/qualified_new (3).png";
import individual from "../Assetes/images/individual_new.png";
import success from "../Assetes/images/success_new.png";
import satisfaction from "../Assetes/images/satisfaction_new.png";
import custom_soft_dev from "../Assetes/images/custom_soft_dev (1).png";
import cloud_comp_sol from "../Assetes/images/cloud_comp_slou_new.png";
import web_dev_and_design from "../Assetes/images/web_dev_design_new.png";
import mobile_app_dev from "../Assetes/images/mobile_app_dev_new.png";
import FooterCompo from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navi = useNavigate();
  return (
    <div>
      <section className="banner-container">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner fact">
            <div class="carousel-item active fact-item">
              <img src={carousel_1} class="d-block w-100" alt="..." />
              <div className="banner_text">
                <h1>Fastest Way to Achieve Success</h1>
                <p>
                  Mackinlay, established in 2021, is a dynamic IT company with a
                  strong foothold in the HR Tech and BFSI domains. Leveraging
                  two years of expertise, we provide innovative solutions that
                  drive efficiency and excellence in business operations.
                </p>
                <button onClick={() => navi("/contact")}>Get Started</button>
              </div>
            </div>
            <div class="carousel-item fact-item">
              <img src={carousel_2} class="d-block w-100" alt="..." />
              <div className="banner_text">
                <h1>IT Prowess</h1>
                <p>
                  At Mackinlay, we go beyond trends; we set them. Our team
                  brings cutting-edge technology solutions to life, driving
                  digital transformation and empowering businesses to thrive in
                  the dynamic IT landscape.
                </p>
                <button onClick={() => navi("/contact")}>Get Started</button>
              </div>
            </div>
            <div class="carousel-item fact-item">
              <img src={carousel_3} class="d-block w-100" alt="..." />
              <div className="banner_text">
                <h1>BFSI Domain Specialists</h1>
                <p>
                  As your trusted partner in BFSI, we understand the unique
                  challenges of this sector. Our solutions are crafted to ensure
                  operational efficiency and regulatory compliance, making us
                  the go-to choice for BFSI technology needs.
                </p>
                <button onClick={() => navi("/contact")}>Get Started</button>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="pt-5 mt-5">
            <div id="demo" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide-to="0"
                  class="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide-to="2"
                ></button>
              </div>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={individual} alt="Individual Approach" />
                        </div>
                        <p>Individual Approach</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={satisfaction} alt="satisfaction" />
                        </div>
                        <p>100% Satisfaction</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={success} alt="success" />
                        </div>
                        <p>100% Success</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={qualified} alt="qualified" />
                        </div>
                        <p>Qualified Team</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={individual} alt="Individual Approach" />
                        </div>
                        <p>Individual Approach</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={satisfaction} alt="satisfaction" />
                        </div>
                        <p>100% Satisfaction</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={success} alt="success" />
                        </div>
                        <p>100% Success</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={qualified} alt="qualified" />
                        </div>
                        <p>Qualified Team</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={individual} alt="Individual Approach" />
                        </div>
                        <p>Individual Approach</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={satisfaction} alt="satisfaction" />
                        </div>
                        <p>100% Satisfaction</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={success} alt="success" />
                        </div>
                        <p>100% Success</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="testimonial-block">
                        <div class="brandLogo-img">
                          <img src={qualified} alt="qualified" />
                        </div>
                        <p>Qualified Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="container section_threee ">
        <div class="row">
          <div class="col-md-12 col-lg-6  first_home_div" data-aos="fade-down">
            <div>
              <img
                src="https://mackinlay.in/img/about-2.jpg"
                alt="Not Found"
                className=" about_img_res_home mt-3"
              />
            </div>
            <div className="under_about_div_home ">
              <img
                src="https://mackinlay.in/img/about-1.jpg"
                alt="Not Found"
                className="about_img_two_home"
              />
            </div>
          </div>
          <div
            class="col-md-12 col-lg-6 content"
            data-aos="fade-up"
            data-aos-offset="300"
          >
            <div class="milion_job_content">
              <p>Learn About Us</p>
              <p class="find">
                Hi there! <span>Glad</span> to see you here.
              </p>
              <p>
                Mackinlay is not just an IT company; we are architects of
                innovation, dedicated to transforming the digital landscape.
                Established two years ago, we have quickly become a beacon of
                excellence in the Information Technology sector. With a sharp
                focus on the Banking, Financial Services, and Insurance (BFSI)
                sector, we navigate the complexities of this domain with
                precision and expertise.
              </p>
              <div class="btn-container">
                <button
                  class="btn more-btn search-btn"
                  onClick={() => navi("/discover")}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container ">
        <div className="row mt-5">
          <div className="col-md-12 heading_container">
            <p className="best_service_heading">
              Our <span className="co">B</span>
              est <span className="co">S</span>ervice
            </p>
          </div>
        </div>

        <div className="row">
          <div className="pt-5 mt-5 sider_service">
            <div
              id="home"
              class="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="1500"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#home"
                  data-bs-slide-to="0"
                  class="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#home"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#home"
                  data-bs-slide-to="2"
                ></button>
              </div>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div class="serviceitem serviceitem_other ">
                        <div class="post-slide">
                          <div class="custom-img-div ">
                            <img
                              src={custom_soft_dev}
                              alt="not found"
                              className="img_side"
                            />
                          </div>
                          <div className="service-type-title">
                            <p>Custom Software Development</p>
                          </div>
                          <div>
                            <p class="service-type-detail">
                              Transform your HR and insurance operations with
                              our bespoke software solutions ,meticulously
                              crafted to streamline processes, enhance
                              productivity, and improve overall efficiency.
                              <p>
                                <a href="/service" className="read-more-btn">
                                  Read more
                                </a>
                              </p>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div class="serviceitem serviceitem_other">
                        <div class="post-slide">
                          <div class="custom-img-div">
                            <img src={cloud_comp_sol} alt="not found" />
                          </div>
                          <div class="service-type-title">
                            Cloud Computing Solutions
                          </div>
                          <div>
                            <p class="service-type-detail">
                              Unlock the power of the cloud with our scalable
                              and secure cloud computing solutions.
                            </p>
                            <a href="/service" class="read-more-btn">
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div class="serviceitem serviceitem_other">
                        <div class="post-slide">
                          <div class="custom-img-div">
                            <img src={web_dev_and_design} alt="not found" />
                          </div>
                          <div class="service-type-title">
                            Web Development and Design
                          </div>
                          <div>
                            <p class="service-type-detail">
                              Elevate your online presence with our expertly
                              designed websites and optimized.
                            </p>
                            <a href="/service" class="read-more-btn">
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div class="serviceitem serviceitem_other">
                        <div class="post-slide">
                          <div class="custom-img-div">
                            <img src={mobile_app_dev} alt="not found" />
                          </div>
                          <div class="service-type-title">
                            Mobile App Development
                          </div>
                          <div class="">
                            <p class="service-type-detail">
                              Mobile applications designed to deliver a superior
                              user experience and drive engagement.
                            </p>
                            <a href="/service" class="read-more-btn">
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div class="serviceitem serviceitem_other">
                        <div class="post-slide">
                          <div class="custom-img-div">
                            <img src={custom_soft_dev} alt="not found" />
                          </div>
                          <div class="service-type-title">
                            Custom Software Development
                          </div>
                          <div class="">
                            <p class="service-type-detail">
                              Transform your HR and insurance operations with
                              our bespoke software solutions ,meticulously
                              crafted to streamline processes, enhance
                              productivity, and improve overall efficiency.
                            </p>
                            <a href="/service" className="read-more-btn">
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div class="serviceitem serviceitem_other">
                        <div class="post-slide">
                          <div class="custom-img-div">
                            <img src={cloud_comp_sol} alt="not found" />
                          </div>
                          <div class="service-type-title">
                            Cloud Computing Solutions
                          </div>
                          <div>
                            <p class="service-type-detail">
                              Unlock the power of the cloud with our scalable
                              and secure cloud computing solutions.
                            </p>
                            <a href="/service" class="read-more-btn">
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#home"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#home"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="container ">
        <div class="row">
          <div class="col-md-6 col-lg-6 position-relative count_div">
            <div class="about-img-container ">
              <div
                class="milion-job-img-choose-us_about "
                className="home_img"
                data-aos="fade-up"
              >
                <img
                  src="https://mackinlay.in/img/business-man.png"
                  alt="not found"
                  className="img_hm"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 " data-aos="fade-down">
            <div class="milion_job_content_us">
              <p>Why Choose Us?</p>
              <p class="pe-5 ">
                Our team of seasoned professionals brings extensive industry
                knowledge and technical expertise to every project, ensuring
                exceptional results and maximum value for our clients.
              </p>
            </div>

            <div className="d-flex countdown">
              <div class="completed-div">
                <h1 data-max="100"> +</h1>
                <p>Our Staffs</p>
              </div>

              <div class="completed-div">
                <h1 data-max="10">+</h1>
                <p>Our Clients</p>
              </div>
            </div>
            <div className="d-flex countdown mt-5">
              <div class="completed-div">
                <h1 data-max="20"> +</h1>
                <p>Completed Projects</p>
              </div>

              <div class="completed-div">
                <h1 data-max="5" id="test">
                   +
                </h1>
                <p>Running Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterCompo />
    </div>
  );
};

export default Home;
