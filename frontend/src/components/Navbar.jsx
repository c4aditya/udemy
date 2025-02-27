import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Sidebar open/close toggle function
  function handleClickHamburger() {
    setSidebarOpen(!isSidebarOpen);
  }

  // Close sidebar function
  function closeSidebar() {
    setSidebarOpen(false);
  }

  // Manage body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isSidebarOpen]);

  // Function for the ONLINE ADMISSION button click
  function clickHandler() {
    navigate("/onlineform");
    closeSidebar(); // Close sidebar when navigating
  }

  return (
    <div>
      {/* Main Navbar */}
      <nav className="tops">
        <div className="main-top-class">
          <div className="nav-bar-main-class">
            <div className="logo-meanu-list">
              <div className="logo">
                <img src="" alt="logo" />
              </div>

              <div className="meanu-list">
                <ul>
                  <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
                  <li><Link to="/course" onClick={closeSidebar}>Course</Link></li>
                  <li><Link to="/aboutus" onClick={closeSidebar}>About Us</Link></li>
                  <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
                  <li><Link to="/placement" onClick={closeSidebar}>Placement</Link></li>
                  <li><Link to="/certificate" onClick={closeSidebar}>Certificate</Link></li>
                  
                </ul>
              </div>
            </div>

            <div className="buttons">
              {/* Online Admission button */}
              <button className="onlineAddmissionbtn" onClick={clickHandler}>ONLINE ADMISSION</button>

              {/* Hamburger menu button */}
              <div className="hamburger">
                <button onClick={handleClickHamburger} className="btn-hamburger">
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && <div className="backdrop" onClick={closeSidebar}></div>}
      {isSidebarOpen && (
        <div className="sidebar">
          <ul>
            <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/course" onClick={closeSidebar}>Course</Link></li>
            <li><Link to="/aboutus" onClick={closeSidebar}>About Us</Link></li>
            <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
            <li><Link to="/placement" onClick={closeSidebar}>Placement</Link></li>
            <li><Link to="/certificate" onClick={closeSidebar}>Certificate</Link></li>
            <li><Link to="/policy" onClick={closeSidebar}>Policy</Link></li>
          </ul>

          {/* Close button for sidebar */}
          <ul className="cancle">
            <li onClick={closeSidebar}>X</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
