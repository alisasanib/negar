import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const Ul = styled.ul`
  list-style: none;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  position: sticky;
  top: 0px;
  justify-content: center;
  z-index: 2;
  background: white;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    z-index: 1;
    position: fixed;
    transform: ${({ open }) =>
      open
        ? "translateX(0)"
        : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s
      ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({
  open,
  handleClick,
}) => {
  const { pathname } =
    useRouter();
  return (
    <Ul open={open}>
      <li
        style={
          pathname === "/"
            ? {
                color:
                  "black",
              }
            : {
                color: "grey",
              }
        }
        className='menu-title'>
        <Link
          onClick={
            handleClick
          }
          href='/'>
          Home
        </Link>
      </li>

      <li
        style={
          pathname ===
          "/about"
            ? {
                color:
                  "black",
              }
            : {
                color: "grey",
              }
        }
        className='menu-title'>
        <Link
          onClick={
            handleClick
          }
          href='/about'>
          ABOUT/CONTACT
        </Link>
      </li>
      <li
        style={
          pathname ===
          "/animation"
            ? {
                color:
                  "black",
              }
            : {
                color: "grey",
              }
        }
        className='menu-title'>
        <Link
          onClick={
            handleClick
          }
          href='/animation'>
          Animation
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
