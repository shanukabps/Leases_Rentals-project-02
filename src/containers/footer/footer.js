/**
 * Footer functional component
 * This is footer of the web page include 3 card and one footer flex box
 * Boostrap and meterial ui icons use to design this style
 *
 */

import React from "react";
import CallIcon from "@material-ui/icons/Call";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

/**
 * @function show the footer of webpage
 *
 *
 *
 */

function Footer() {
  return (
    <div>
      <div className="card-group mr-5 ml-5  mb-5 footmargin">
        <div className="card">
          <img
            className="card-img-top"
            src="https://pbs.twimg.com/profile_images/917360126700380160/ewoLie5Q_400x400.jpg"
            alt="Card "
          />
          <div className="card-body">
            <p className="card-text font-weight-bold text-secondary">
              Full service property management for just $100/month With our
              fixed monthly fee & responsive dashboard, landlords enjoy full
              transparency whilst saving time & money.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.savings.com.au/dA/8d99add138/Different%20property%20management.jpg"
            alt="Card "
          />
          <div className="card-body">
            <h5 className="card-title text-danger mb-5"> Our Locations</h5>

            <div className="card-text text-secondary">
              <h6 className="mb-3">
                Unit 2, 6a Liverpool Street, Paddington NSW 2021
              </h6>
              <h6 className="mb-3">
                Lvl 2, 696 Bourke Street, Melbourne VIC 3000
              </h6>
              <h6 className="mb-3">
                Lvl 6, 200 Adelaide Street, Brisbane QLD 4000
              </h6>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://wethree.studio/wp-content/uploads/2018/04/Different_Andi_Hi-1590x978.png"
            alt="Card "
          />

          <div className="card-body">
            <h5 className="card-titl text-danger mb-5 mt-1">Our customers </h5>
            <div className="card-text text-secondary">
              <h3 className="mt-5"> Rated 4.5 out of 5 on Google</h3> Owners and
              tenants that love their property manager. This is what happens
              when you do things differently.
            </div>
          </div>
        </div>
      </div>

      {/*
       *This is flex bo show the footer Company,Owner Resourse block
       *
       *
       */}
      <div className=" mt-5 mr-5 ml-5">
        <div className="d-flex ">
          <div className="div-2 bg-light flex-fill ">
            <div className="mb-4 mt-5">
              <CallIcon color="primary" fontSize="large" />
            </div>
            <div className="mb-4 ">
              <TwitterIcon color="primary" fontSize="large" />
            </div>
            <div className="mb-4">
              <LinkedInIcon color="primary" fontSize="large" />
            </div>
          </div>
          <div className="p-2 bg-light flex-fill ">
            <h5 className="text-danger mb-4">Company</h5>
            <small>
              <p>About</p>
              <p>Contact Us</p>
              <p>press</p>
              <p>Terms of service</p>
              <p>Privacy policy</p>
            </small>
          </div>
          <div className="p-2 bg-light flex-fill ">
            <h5 className="text-danger mb-4">Owners</h5>
            <small>
              <p>Property management services</p>
              <p>Landlord Insurance</p>
              <p>Rent Guarantees</p>
              <p>Terms of service</p>
              <p>Mobile app for Owners</p>
              <p>Owner FAQs</p>
            </small>
          </div>

          <div className="p-2 bg-light flex-fill ">
            <h5 className="text-danger mb-4">Resources</h5>
            <small>
              <p>Blog</p>
              <p>Pricing</p>
              <p>Terms of service</p>
              <p>Savings calculator</p>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
