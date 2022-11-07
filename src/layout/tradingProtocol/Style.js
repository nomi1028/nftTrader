import styled from "styled-components";
import TradingProtocolBg from "../../assets/images/bg2.svg";
import Mascotte from "../../assets/images/mascotte.svg";
import Circle_bg from "../../assets/circle_bg.svg";
const Style = styled.div`
  background: url(${TradingProtocolBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% center;
  width: 100%;
  height: 100%;
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    /* padding: 50px; */
    .colunm1 {
      position: relative;
      &-wrapper {
        display: flex;
        flex-direction: column;

        gap: 10px;
        width: 85%;
        transform: translateY(50%);
        .small-heading {
          font-size: 1rem;
          font-weight: 600;
          color: #03045e;
        }
        .large-heading {
          color: #2d00f7;
          font-size: 2.25rem;
          font-weight: 600;
        }
        .paragraph {
          font-family: "Rubik";
          font-size: 1rem;
          font-weight: 300;
        }
        .button {
          background: blue;
          border-radius: 100px;
          border: none;
          text-align: center;
          width: 150px;
          height: 50px;
          color: white;
          :hover {
            background: #03045e;
          }
        }
      }
    }
    .colunm2 {
      position: relative;
      width: 100%;
      height: 100%;
      &-wrapper {
        position: absolute;
        top: 90%;
        right: 0%;
        width: 80%;
        height: 100%;
        .mascotte {
          background: url(${Mascotte});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          width: 90%;
          height: 90%;
        }
        .btn {
          position: absolute;
          top: -5.8%;
          right: 18%;
          padding: 5px 20px;
          color: white;
          background: #03045e;
          border-radius: 30px;
        }
        .icon {
          position: absolute;
          top: -15%;
          left: 5%;
          width: 30%;
          height: 30%;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    background: #f3f4f6;

    .wrapper {
      grid-template-columns: 1fr;
      gap: 10px;
      text-align: center;
      .colunm1 {
        &-wrapper {
          transform: translateY(10%);
          align-items: center;
          width: 100%;
        }
      }
      .colunm2 {
        /* background: url(${Circle_bg}) !important;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover; */
        height: 85vh;
        &-wrapper {
          top: 40%;
          width: 100%;
          .btn {
            top: -11%;
            right: 25%;
          }
          .icon {
            left: 13%;
            top: -20%;
          }
        }
      }
    }
  }
`;

export default Style;
