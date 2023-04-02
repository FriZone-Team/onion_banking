import React from "react";
import styled from "styled-components";
import AccountSetting from "./AccountSetting";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useEffect } from "react";

const AccountStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .account {
    &-main {
      display: grid;
      grid-template-columns: 300px minmax(0, 1fr);
      padding: 40px 20px;
      gap: 0 40px;
      align-items: start;
      margin-top: 7rem;
    }
    @media screen and (max-width: 1023.98px) {
      &-main {
        grid-template-columns: 100%;
        padding: 20px;
      }
    }
  }
`;

const Account = () => {
  useEffect(() => {
    document.title = "Account Page";
  }, []);
  return (
    <AccountStyle>
      <Header></Header>
      <div className="account-main">
        <Sidebar></Sidebar>
        <AccountSetting></AccountSetting>
      </div>
    </AccountStyle>
  );
};

export default Account;
