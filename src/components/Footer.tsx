import "@/style/Footer.css";
import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="Gparent">
        <div className="parent">
            <div className="child1">
                <h1>Get In Touch</h1>
                <p className="para">Ecosystem Bootstraping Learning curve lean startup disruptive.
                    Marketing long tail disruptive agile development partner.
                </p>
                <div className="icon">
                    <CiInstagram/> <CiLinkedin/> <FaFacebookF/> <FaTwitter/>

                </div>
              
            </div>
            <div className="child2">
                <div className="schild">
                <IoIosContact className="icon2"/>
                <p>Drible56@example.com</p>

            </div>
            <div className="schild">
                <CiMail className="icon2"/>
                <p>conact45454@exam.com</p>

            </div>



            </div>
            
        </div>
    </div>
  )
}

export default Footer