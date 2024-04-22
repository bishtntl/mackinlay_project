import React from "react";
import "../Css/style.css";
import FooterCompo from "./Footer";
function ContactCompo() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="contact_heading">Contact Us</h1>
            <h3 className="contact_second_head">Fill your query & submit</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="form-innr-fst contact_div">
            <div className="form-innr-2">
              <div className="form-innr-fst"></div>
            </div>
            <div className="contact_div_two">
              <div className="row form-control-form mt-2">
                <div className="col-sm-1">
                  <label className="name">Name</label>
                </div>
                <div className="col-sm-4">
                  <div className="inp">
                    <input
                      type="text"
                      className="form-control w-100 name_inp"
                    />
                  </div>
                </div>
                <div className="col-sm-1">
                  <label className="email">Email</label>
                </div>
                <div className="col-sm-4">
                  <div className="inp inp-1">
                    <input
                      type="email"
                      className="form-control w-100 email_inp"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-1">
                  <label className="sub">Subject</label>
                </div>
                <div className="col-sm-4 sub_inp">
                  <input type="text" className="form-control w-100 " />
                </div>
                <div className="col-sm-1">
                  <label className="query">Query</label>
                </div>
                <div className="col-sm-4">
                  <div className="inp textarea-fld ">
                    <textarea
                      className="form-control inp_query"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="textarea">
              <div className="for-quicker m-0">
                For quicker answers you can always chat or Whatsapp us
              </div>
              <div className="col-sm-12 frm-btn-main p-0 mt-3">
                <div className="d-flex ms-0 btn-main frm-btn">
                  <button className="in-btn" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="backcolor mb-5">
        <div className="container details d-flex justify-content-center ">
          <div className="container row underdiv_details">
            <div className="col-md-5">
              <div className="circe_first d-flex justify-content-center ">
                <span className=" d-flex justify-content-center align-item-center location_contact">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
              </div>
              <div className="add_dtl">
                <h2>Our Head Office</h2>
                <p className=" text-center ">
                  2 New Street, Melvelam, TK, Walajapet, TamilNadu - 632513
                  India
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="circe_first d-flex justify-content-center ">
                <span className=" d-flex justify-content-center align-item-center call_contact">
                  <i class="fa-solid fa-phone-volume"></i>
                </span>
              </div>
              <div className="contact_dtl">
                <h2 className="text-center">Call for Help</h2>
                <p className="text-center">+91 88966 19811</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="circle_last d-flex justify-content-center ">
                <span className="d-flex justify-content-center align-item-center email_contact">
                  <i class="fa-solid fa-envelope"></i>
                </span>
              </div>
              <div className="email_all_dtl">
                <h2>Email for Information</h2>
                <p className="text-center ">contactus@mackinlay.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterCompo />
    </>
  );
}

export default ContactCompo;
