import React, { useEffect, useRef } from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import "./Footer.css";
import logoOne from '../../assets/logo.png';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a class to trigger the transition
            entry.target.classList.add('footer-visible');
          } else {
            // Remove the class if the footer is not visible
            entry.target.classList.remove('footer-visible');
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the footer is visible
    );

    observer.observe(footerRef.current);

    // Cleanup
    return () => {
      observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div className="footermain font-fjalla-one uppercase text-white sm:flex-wrap flex" ref={footerRef}>
      <div className="column logo-social" style={{ width: "28%" }}>
        <img className="footerlogo" src={logoOne} alt="Medico" />
        <p className="text-gray-500 p-2 lowercase">© 2024 Sentinels. All rights reserved</p>
        <div className="footericons">
          <div className="p-3 bg-rounded-xl rounded-full text-white hover:text-lime-400" style={{ backgroundColor: "#1a1a20" }}>
            <FaFacebook />
          </div>
          <div className="p-3 bg-rounded-xl rounded-full text-white hover:text-lime-400" style={{ backgroundColor: "#1a1a20" }}>
            <RiTwitterXFill />
          </div>
          <div className="p-3 bg-rounded-xl rounded-full text-white hover:text-lime-400" style={{ backgroundColor: "#1a1a20" }}>
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="column about-company" style={{ width: "18%" }}>
        <h1 className="footerehead">About us</h1>
        <ul className="footer-list">
          <li>Who we are</li>
          <li>Championship</li>
          <li>Partners</li>
          <li>Management Team</li>
        </ul>
      </div>
      <div className="column about-company" style={{ width: "18%" }}>
        <h1 className="footerehead">Company</h1>
        <ul className="footer-list">
          <li>Teams</li>
          <li>Creators</li>
          <li>HTZ society</li>
          <li>News</li>
        </ul>
      </div>
      <div className="column terms-feedback" style={{ width: "18%" }}>
        <h1 className="footerehead">Terms and policy</h1>
        <ul className="footer-list">
          <li>Privacy</li>
          <li>Terms and conditions</li>
        </ul>
      </div>
      <div className="column terms-feedback" style={{ width: "18%" }}>
        <h1 className="footerehead">Help and feedback</h1>
        <button className="button text-gray-800 p-2 font-fjalla-one bg-gradient-to-r from-gray-200 to-cyan-400 h">
          contact us
        </button>
      </div>
    </div>
  );
};

export default Footer;