import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Sidebar from "../Sidebar";
import TransferContent from "./TransferContent";
import { useEffect } from "react";
const TransferStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .transfer {
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

const Transfer = () => {
  useEffect(() => {
    document.title = "Transfer Page";
  }, []);
  return (
    <TransferStyle>
      <Header></Header>
      <div className="transfer-main">
        <Sidebar></Sidebar>
        <TransferContent></TransferContent>
      </div>
    </TransferStyle>
  );
};

export default Transfer;
