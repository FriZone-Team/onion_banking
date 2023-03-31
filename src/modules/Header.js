import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
// import { Button } from "../components/button";
const HeaderStyle = styled.div`
  width: 1200px;
  margin: 0 auto;
  .header-style {
    display: block;
    position: fixed;
    width: 1200px;
    height: 95px;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 99;
  }
  .header {
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .logoStyle {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-weight: 600;
    img {
      max-width: 40px;
    }
    span {
      color: #000;
      text-decoration: none;
      display: inline-block;
    }
  }
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div className="header-style">
        <div className="header">
          <NavLink to="/home" className="logoStyle">
            <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
            <span>Monkey Bank</span>
          </NavLink>
          <div className="header-info">
            <p>Welcome back,</p>
            <h3>MAU DUY KHAI</h3>
          </div>
          <div className="header-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              width="30"
              height="30"
              color="green"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
