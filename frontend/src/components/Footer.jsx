import React from "react";
import fb from "../../src/images/fb.jpeg";
import linkdin from "../../src/images/Linkdin.jpeg";
import insta from "../../src/images/insta.jpeg";
import x from "../../src/images/Twitter.jpeg";
import { MdCall , MdLocationPin  } from "react-icons/md";
import { Link } from 'react-router-dom';



const Footer = () => {

    return <footer >
    <div className="footer">
        <div className="sb_footer section_padding">
            <div className="sb_footer-links">
                <div className="contact_details">
                    <h4>About us</h4>
                    
                        <p>SGACE Learning is proud to be recognized as one of the leading training institutes in India.Guided by a team of highly skilled professionals.</p>
                </div>
                <div className="sb_footer-links_div">
              <h4>Information Link</h4>
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/aboutus">
                <p>About Us</p>
              </Link>
              <Link to="/placement">
                <p>Placement</p>
              </Link>
              <Link to="/course">
                <p>Courses</p>
              </Link>
              <Link to="/contact">
                <p>Contact Us</p>
              </Link>
              <Link to="/certificate">
                <p>Certificate</p>
              </Link>
              <Link to="/policy">
                <p>Refund policy</p>
              </Link>
            </div>
           
                {/* <div className="sb_footer-links_div">
                    <h4>Popular courses</h4> 
                
                <a href="/course">
                        <p>Reengineering Program</p>
                    </a>
                <a href="/course">
                        <p>Hotel Management</p>
                    </a>
                <a href="/course">
                        <p>Airport Management</p>
                    </a>
                <a href="/course">
                        <p>Aviation</p>
                    </a>
                <a href="/course ">
                        <p>Air Hostess</p>
                    </a>
                <a href="/course ">
                        <p>Cruise Ship</p>
                    </a>
                
             </div> */}
                <div className="contact_details">
                    <h4>Contacts</h4>
                    
                        <p><MdLocationPin></MdLocationPin> SGACE Learning, Nehru market gate-4, Greater Noida, 201301</p>
                        {/* <p> Nehru market gate-4 </p> */}
                        {/* <p> Greater Noida, 201301</p> */}
                        <p><MdCall /> +91-997777772</p>
                    
                        
                </div>
                 
        </div >
        <hr className="Divider"/>

        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                ©{new Date().getFullYear()} SGACELEARNING.All Rights Reserved.
                </p>
            </div>
            <div className="sb_footer-below-links">
                    {/* <h4>social media</h4> */}
                    <div className="socialmedia">
                    <p><img src={fb} alt=""/></p>
                    <p><img src={x} alt=""/></p>
                    <p><img src={insta} alt=""/></p>
                    <p><img src={linkdin} alt=""/></p>
                </div>
            
            </div>
        </div>


    </div>
</div>

</footer>
;

};

export default Footer;