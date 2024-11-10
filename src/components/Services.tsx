import React from 'react';
import "@/style/Services.css";
import { CgWebsite  } from "react-icons/cg";
import { MdComputer } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import { IoGameController } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";


const Services = () =>{
  return (
    <main className='Services-main'>
        <div className='Services-div1'>
            {/* topdiv */}
            <div className='services-content'>
                <h2>My Services</h2><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam deserunt laborum minus dolor dolorem nisi, facere ipsum inventore pariatur aut doloremque, corrupti ab excepturi ut accusantium voluptates saepe? Est a illo eum, dicta nulla ut ipsa illum, aliquam blanditiis, maiores dolorum vitae fugiat eligendi.
                     Illum excepturi explicabo odit dolores. Non temporibus laborum quisquam? Magnam, architecto!</p>

            </div>
            {/* bottomdiv */}
            <div className='box-container'>
            <div className='services-box'>
              <CgWebsite  className='Services-font'/>
              <h3>Web Development</h3>
              <span>Blog, E-Comerse</span>

              </div>
              <div className='services-box'>
              <MdComputer   className='Services-font'/>
              <h3>Ux/UI Design</h3>
              <span>Blog, E-Comerse</span>

              </div>
              <div className='services-box'>
              < AiFillSound  className='Services-font'/>
              <h3>Sound Design</h3>
              <span>Blog, E-Comerse</span>

              </div>
              <div className='services-box'>
              <IoGameController  className='Services-font'/>
              <h3>Game Design </h3>
              <span>Blog, E-Comerse</span>

              </div>
              <div className='services-box'>
              <FaCamera  className='Services-font'/>
              <h3>Photography</h3>
              <span>Blog, E-Comerse</span>

              </div>
              <div className='services-box'>
              <RiAdvertisementLine  className='Services-font'/>
              <h3>Advertisement</h3>
              <span>Blog, E-Comerse</span>

              </div>
              
            
            </div>
            
            
        </div>

    </main>
  

  )}
export default Services