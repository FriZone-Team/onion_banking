import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import Header from "../Header";
import TransactionContent from "./TransactionContent";

const TransactionStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .transaction {
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

const Transaction = () => {
  useEffect(() => {
    document.title = "Transaction Page";
  }, []);

  return (
    <>
      <TransactionStyle>
        <Header></Header>
        <div className="transaction-main">
          <Sidebar></Sidebar>
          <TransactionContent></TransactionContent>
        </div>
      </TransactionStyle>
    </>
  );
};

export default Transaction;
