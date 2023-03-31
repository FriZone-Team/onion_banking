import React from "react";
import styled from "styled-components";
import "./home.scss";

const HomeContentStyled = styled.div`
  .home {
    &-content {
      border-radius: 8px;
      box-shadow: 0 0 10px rgb(0 0 0 / 10%);
      /* width: 400px; */
    }
    &-feature {
      background: rgb(29, 192, 113);
      height: 75vh;
      width: 50rem;
      transform: translateX(10px);
      position: relative;
    }
    &-frameImg {
      position: relative;
      margin-right: 2rem;
      img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
        border-radius: 8px;
      }
    }
    &-icon {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 5%;
      right: 35%;
      .icon {
        border-radius: 50%;
        background-color: #fff;
        padding: 0.8rem;
        cursor: pointer;
        &:hover {
          transform: scale(1.14);
          transition: all 0.2s linear;
        }
      }
    }
    &-info--wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
      }
      h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 1rem 0;
      }
      p {
        color: #767676;
      }
    }
  }
`;

const HomeContent = () => {
  return (
    <HomeContentStyled>
      <div className="home-content">
        <div className="home-feature">
          <div class="circles">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
          </div>

          <div class="card-group">
            <div class="card">
              <div class="logo">
                <img
                  src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png"
                  alt="Visa"
                />
              </div>
              <div class="chip">
                <img
                  src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png"
                  alt="chip"
                />
              </div>
              <div class="number">1234 5678 9012 3456</div>
              <div class="name">MAU DUY KHAI</div>
              <div class="from">10/23</div>
              <div class="to">06/28</div>
              <div class="ring"></div>
            </div>
          </div>
          <div className="card-money">
            <h3>Số dư/HM khả dụng</h3>
            <p>46,407,889đ</p>
          </div>
        </div>
      </div>
    </HomeContentStyled>
  );
};

export default HomeContent;
