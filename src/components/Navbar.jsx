import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
// import "@/styles/Navbar.module.css";

const Nav = styled.nav`
  width: 100%;
  padding: 0 20px;
  display: flex;
  background: white;
  z-index: 1;
  flex-direction: column;

  @media (max-width: 768px) {
    position: sticky;
    top: 0px;
  }
  .logo {
    padding: 15px 0;
    text-align: center;
    width: 100%;
  }
`;

const Navbar = ({
  children,
}) => {
  return (
    <>
      <Nav>
        <div className='site-title'>
          NEGAR YARAGHI
        </div>
        {/* <Burger /> */}
      </Nav>
      <Burger />
      {children}
    </>
  );
};

export default Navbar;
