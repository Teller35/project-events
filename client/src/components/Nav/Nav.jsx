import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import Auth from "../../utils/auth";
import { Modal } from "react-bootstrap";
import AddEventForm from "../AddEvent";

function Navbar() {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);
  const [show, setShow] = useState(false);

  return (
    <>
      <header>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            {loginNav()}
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
        </div>
        <h1 className="text-center">E-V-E-N-T-S</h1>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Plan next Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddEventForm handleModalClose={() => setShow(false)} />
          </Modal.Body>
        </Modal>
      </header>
    </>
  );

  function loginNav() {
    if (Auth.loggedIn()) {
      return (
        <>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSideBar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/home">
                  <AiIcons.AiFillHome />
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/profile">
                  <CgIcons.CgProfile />
                  <span>Profile</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link onClick={() => setShow(true)}>
                  <MdIcons.MdEventAvailable />
                  <span>Add Event</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/search">
                  <FaIcons.FaSearch />
                  <span>Search</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/support">
                  <IoIcons.IoMdPeople />
                  <span>Support</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/donate">
                  <FaIcons.FaDonate />
                  <span>Donate</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/" onClick={() => Auth.logout()}>
                  <AiIcons.AiOutlineLogout />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      );
    } else {
      return (
        <>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSideBar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/">
                  <AiIcons.AiOutlineLogin />
                  <span>
                    Login/
                    <br />
                    SignUp
                  </span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/support">
                  <IoIcons.IoMdPeople />
                  <span>Support Page</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/donate">
                  <FaIcons.FaDonate />
                  <span>Donate</span>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      );
    }
  }
}

export default Navbar;
