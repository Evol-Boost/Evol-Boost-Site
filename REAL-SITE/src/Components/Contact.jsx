import React, { useEffect, useState } from "react";
import "./Contact.css";

import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Contact() {
  const [active, setactive] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const contact = document.querySelector(".contact");
      var contact_top = contact.getBoundingClientRect().top;

      if (contact_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);
  return (
    <div className={`contact ${active && "active"}`} id="Contact">
      <h1>
        <span>Contactez</span> <b>Nous</b>
      </h1>

      <div className="socials">
        <div className="icon" style={{ "--c": "	#ADD8E6" }}>
          <BsLinkedin className="social-icons" />
          <div className="tooltip">Linkedin</div>
        </div>

        <div className="icon" style={{ "--c": "#1d3fff" }}>
          <BsFacebook className="social-icons" />
          <div className="tooltip">facebook</div>
        </div>

        <div className="icon" style={{ "--c": "#ff5cff" }}>
          <BsInstagram className="social-icons" />
          <div className="tooltip">instagram</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
