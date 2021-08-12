import React, {useState} from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons'


function Navbar() {
  const [sidebar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sidebar)

  return(
    <>
    <div className="navbar">
      <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={showSideBar}/>
      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSideBar}>
        <li className="navbar-toggle">
          <Link to="#" className='menu-bars'>
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        <li className="nav-text">
          <Link href="/home">
            <AiIcons.AiFillHome />
            <span>
              Home
            </span>
          </Link>
        </li>
        <li className="nav-text">
          <Link to="/profile">
          <IoIcons.IoIosPaper />
            <span>Profile</span>
          </Link>
        </li>
        <li className="nav-text">
          <Link to="/">
          <IoIcons.IoMdPeople />
            <span>Login/SignUp</span>
          </Link>
        </li>
        <li className="nav-text">
          <Link to="#">
          <IoIcons.IoMdPeople />
          <span>Plan your next event</span>
          </Link>
        </li>
        <li className="nav-text">
          <Link to="#"><IoIcons.IoMdPeople />
          <span>Support Page</span>
          </Link>
        </li>
        <li className="nav-text">
          <Link to="#">
          <FaIcons.FaCartPlus/>
          <span>Donate</span></Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar;




// import React, { useState } from "react";
// import { Modal, Button, Nav } from "react-bootstrap";
// import { useMutation } from "@apollo/client";
// import AddEventForm from "../AddEvent";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
  

//   function loginNav() {
//     if (Auth.loggedIn()) {
//       return (
//         <>
//           <Nav.Item>
//             <Nav.Link href="/home">Events</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link onClick={() => setShow(true)}>Add Event</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link to="">Profile</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link to="/" onClick={() => Auth.logout()}>
//               Logout
//             </Nav.Link>
//           </Nav.Item>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <Nav.Item>
//             <Nav.Link href="/">LogIn</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="/">SignUp</Nav.Link>
//           </Nav.Item>
//         </>
//       );
//     }
//   }

//   return (
//     <>
//       <header>
//         <h1 className="text-center">E-V-E-N-T-S</h1>
//         <Nav className="justify-content-end">{loginNav()}</Nav>
//       </header>
//       <Modal
//         show={show}
//         onHide={() => setShow(false)}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Plan next Event</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <AddEventForm handleModalClose={() => setShow(false)} />
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default Navbar;
