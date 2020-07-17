import React from "react";
import styled from "styled-components";
import {RiLoginCircleLine} from "react-icons/ri"
import { Link } from "react-router-dom";
// import '../navbar/Navbar.css'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 30px;

  li {
    padding: 20px 20px;
  }
  a {
    text-decoration: none;
    color:#fff;
    font-size: 1.3rem;
  }

  a:hover{
      color:red;
      transition: color 0.4s linear;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    margin-right:0;
    padding-top: 4rem;
    transition: transform 0.3s ease-in-out;
  }
`;
const RigthNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/">Ana Səhifə</Link>
      </li>
      <li>
        <Link to="/about">Haqqımızda</Link>
      </li>
      <li>
        <Link to="/services">Xidmətlərimiz</Link>
      </li>
      <li>
        <a href="/">Əlaqə</a>
      </li>
      <li>
        <a href="/">Daxil ol <RiLoginCircleLine/> </a>
      </li>
    </Ul>
  );
};

export default RigthNav;
