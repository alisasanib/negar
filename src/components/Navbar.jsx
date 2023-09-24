import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Burger from "./Burger";
import Link from "next/link";
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
  const router = useRouter();
  return (
    <>
      {router.pathname !==
        "/" && (
        <>
          <Nav>
            <Link href='/'>
              <div className='site-title'>
                NEGAR YARAGHI
              </div>
            </Link>
            {/* <Burger /> */}
          </Nav>
          <Burger />
        </>
      )}
      {children}
    </>
  );
};

export default Navbar;
