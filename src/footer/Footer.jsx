import React from "react";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal max-w-11/12 mx-auto mt-4 text-[#A1A1AA] p-10">
        <aside>
          <p>
            <a className=" font-semibold text-white text-xl">
              CS — Ticket System
            </a>
            <br />
            Providing Tickets since 2000
          </p>
        </aside>

        <nav>
          <h6 className="font-semibold text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-white">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-white">Information</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-white">Social Links</h6>
          <a className="link link-hover flex items-center gap-2">
            <FaXTwitter />
            @CS — Ticket System
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaLinkedin />
            @CS — Ticket System
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaFacebook />
            @CS — Ticket System
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaEnvelope />
            support@cst.com
          </a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center text-[#FAFAFA] text-[16px] p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} CS — Ticket System. All right
            reserved
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
