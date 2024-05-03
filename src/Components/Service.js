import React from "react";
import custom_soft_dev from "../Assetes/images/custom_soft_dev.png";
import cloud_comp_sol from "../Assetes/images/Cloud_Computing_Solutions.png";
import web_dev_and_design from "../Assetes/images/web_dev_design.png";
import mobile_app_dev from "../Assetes/images/mobile_app_dev.png";
import data_analytics from "../Assetes/images/Data_analytics.png";
import cyber_security from "../Assetes/images/Cybersecurity_Hero-svg.png";
import IT_consulating from "../Assetes/images/ITCAS-svg.png";
import UI from "../Assetes/images/UI.png";
import Quality_Assurance from "../Assetes/images/QAAT.png";
import block_chain from "../Assetes/images/blackchain.png";
import ERPS_sol from "../Assetes/images/ERP Solutions.png";
import man_power from "../Assetes/images/manpower.png";
import FooterCompo from "./Footer";
import "../Css/Service.css";

function Service() {
  return (
    <>
      <section class="container" id="latestjobopening">
        <div class="row mt-5">
          <div class="col-md-12 mx-auto">
            <div class="service-title">
              <p>
                C<span>onsulting</span> S<span>ervices</span>
              </p>
              <p>Our Services</p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div
            id="demo"
            class="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="1500"
          >
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
                <div className="row ">
                  <div className="col-md-4 margin-res mx-auto">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={custom_soft_dev} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">
                          Custom Software Development
                        </h3>
                        <p className="text-center centerone">
                          Transform your HR and insurance operations with our
                          bespoke software solutions, meticulously crafted to
                          streamline processes, enhance productivity, and
                          improve overall efficiency.
                        </p>
                        <div className="rd_btn">
                          <a href="/service" className="read-more-btn ">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 margin-res">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={cloud_comp_sol} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">
                          Cloud Computing Solutions
                        </h3>
                        <p className="text-center centerone">
                          Unlock the power of the cloud with our scalable and
                          secure cloud computing solutions.
                        </p>
                        <div className="rd_btn">
                          <a href="/service" className="read-more-btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 margin-res">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={web_dev_and_design} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">
                          Web Development and Design
                        </h3>
                        <p className="text-center centerone">
                          Elevate your online presence with our expertly
                          designed websites and optimized.
                        </p>
                        <div className="rd_btn">
                          <a href="/service" className="read-more-btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4 margin-res">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={data_analytics} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">
                          Data Analytics and Business Intelligence
                        </h3>
                        <p className="text-center centerone">
                          Gain actionable insights and make informed decisions
                          with our advanced analytics solutions, leveraging data
                          to optimize HR processes, enhance customer
                          experiences, and drive business growth.
                        </p>
                        <div className="rd_btn">
                          <a href="/service" className="read-more-btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 margin-res">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={cyber_security} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">
                          Cyber Security
                        </h3>
                        <p className="text-center centerone">
                          Protect your sensitive data and safeguard your
                          business from cyber threats with our robust
                          cybersecurity services, tailored to meet the unique
                          security needs of HR and BFSI organizations.
                        </p>
                        <div className="rd_btn">
                          <a href="/service" className="read-more-btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 margin-res">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={mobile_app_dev} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">
                          Mobile App Development
                        </h3>
                        <p className="text-center centerone">
                          Mobile applications designed to deliver a superior
                          user experience and drive engagement.
                        </p>
                        <div className="rd_btn">
                          <a href="/service" className="read-more-btn">
                            Read More
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
        <div className="row mt-5">
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
                  <div className="col-md-4 margin-res">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={IT_consulating} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">
                          IT Consulting and Strategy
                        </h3>
                        <p className="text-center centerone">
                          Harness the full potential of technology with our
                          strategic IT consulting services, helping you develop
                          and implement IT strategies aligned with your business
                          goals and objectives.
                        </p>
                        <div className="rd_btn">
                          <a href="/service" className="read-more-btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 margin-res">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={UI} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">UI/UX Design</h3>
                        <p className="text-center centerone">
                          Deliver exceptional user experiences with our expert
                          UI/UX design services, ensuring that your applications
                          and websites are not only functional but also visually
                          stunning and intuitive to use.
                        </p>
                        <div className="rd_btn">
                          <a href="/service" className="read-more-btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 margin-res">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={Quality_Assurance} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">
                          Quality Assurance and Testing
                        </h3>
                        <p className="text-center centerone">
                          Ensure the reliability and performance of your
                          software applications with our comprehensive quality
                          assurance and testing services, meticulously testing
                          every aspect to deliver flawless results.
                        </p>
                        <div className="rd_btn">
                          <a href="/service" className="read-more-btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4 margin-res">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={ERPS_sol} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">
                          ERP Solutions
                        </h3>
                        <p className="text-center centerone">
                          Streamline your operations and drive efficiency with
                          our ERP solutions, offering integrated modules for HR,
                          finance, and operations management tailored to your
                          specific business needs.
                        </p>
                        <div className="rd_btn">
                          <a href="/service" className="read-more-btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 margin-res">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={block_chain} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">
                          Blockchain Development
                        </h3>
                        <p className="text-center centerone">
                          Embrace the future of technology with our blockchain
                          development services, leveraging decentralized ledgers
                          to enhance security, transparency, and trust in your
                          HR and insurance processes.
                        </p>
                        <div className="rd_btn">
                          <a href="/service" className="read-more-btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 margin-res">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={man_power} alt="not found" />
                      </div>
                      <div className="content-container">
                        <h3 className="text-center centeronee">
                          Manpower Provisioning
                        </h3>
                        <p className="text-center centerone">
                          Augment your workforce with our skilled professionals,
                          available under our payroll or as outsourced
                          resources, to meet your staffing needs and project
                          requirements effectively.
                        </p>

                        <div className="rd_btn">
                        <a href="/service" className="read-more-btn">
                          Read More
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
      </section>
      <FooterCompo />
    </>
  );
}

export default Service;
