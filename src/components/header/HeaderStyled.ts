import styled from "styled-components";

export const HeaderComponents = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 25px;
  background-color: black;
  color: #fff;
  font-family: "Nunito", sans-serif;

  img {
    width: 120px;
    margin: 0;
  }

  ul {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    a {
      list-style: none;
      text-decoration: none;
    }

    li {
      list-style: none;
      cursor: pointer;
      color: #777;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 89.5%; /* 17.9px */
      letter-spacing: -0.4px;
      font-family: "Nunito", sans-serif;
    }
  }

  .button-container {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 2rem;

    .login {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 89.5%; /* 17.9px */
      letter-spacing: -0.4px;
      font-family: "Nunito", sans-serif;
    }

    .cadastro {
      display: flex;
      cursor: pointer;
      padding: 8px 10px;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      border: 1px solid #fff;
      color: #fff;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 89.5%; /* 17.9px */
      letter-spacing: -0.4px;
      font-family: "Nunito", sans-serif;
      background-color: transparent;
    }
  }

  .person-area {
    display: none;
  }

  .rotate-icon {
    transition: transform 0.3s ease-in-out;
  }
  .rotated {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    padding: 12px;
    nav {
      display: none;
    }

    .button-container {
      display: none;
    }

    .person-area {
      width: 200px;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      cursor: pointer;

      .icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 100%;
      }

      .dropdown {
        transition: all 1s ease-in-out;
        .dropdown-open {
          position: absolute;
          top: 55px;
          background-color: #252627;
          border-radius: 8px;
          right: 15px;
          box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
          color: #777;
          width: auto;
          min-width: 200px;
          height: auto;
          transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }
        .dropdown-text {
          text-align: center;
          justify-content: center;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-family: "Nunito", sans-serif;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);

          p {
          }

          &:hover {
            font-weight: 700;
            color: #fff;
            border: none;
            transition: ease all 0.5s;
          }
          .dropdown-icon {
            width: 20px;
          }
          .dropdown-text:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
  .elemento {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .clicked {
    color: #fff;
    position: relative;
    line-height: 2rem;
  }

  .clicked::after {
    color: #fff;
    content: "";
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
  }

  .modal-container {
    width: 40%;
  }
  .modal-login {
    padding: 24px;
    width: 100%;
    color: #0d0d0d;
    .logo-icon {
      width: 53%;
      display: flex;
      justify-content: space-between;
      .left {
        cursor: pointer;
      }
      .icon {
        width: 30px;
      }
    }
  }
  .enter {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    color: #212426;
    font-family: "Nunito", sans-serif;
    font-size: 31px;
    font-style: normal;
    font-weight: 1000;
    line-height: 36px;
    p {
      margin: 20px 0px 10px 0px;
    }
  }
  .text-modal {
    display: flex;
    width: 100%;
    height: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: 50%;
      height: 35px;
      border-radius: 20px;
      border: 1px solid #2b2d33;
      background: #0d0d0d;
      color: #fff;
      text-align: center;
      font-family: "Nunito", sans-serif;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.25px;
      cursor: pointer;

      img {
        width: 8%;
      }
    }
  }
  .or {
    position: relative;
    width: 50%;
    color: #212426;
    text-align: center;
    margin-left: 25%;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 45%;
      height: 1px;
      background-color: #4a4a4a;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
  .inputs {
    display: flex;
    flex-direction: column;
    padding: 20px 0px 10px 0px;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    input {
      border: 1px solid #777;
      width: 53%;
      height: 50px;
      border-radius: 8px;
      font-family: "Nunito", sans-serif;
      padding-left: 5px;
      font-size: 15px;
      appearance: textfield;

      &:focus {
        outline: none;
        border: 2px solid #777;
      }
    }
  }
  .buttons {
    display: inline-flex;
    width: 100%;
    height: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
    .next {
      cursor: pointer;
      width: 50%;
      height: 35px;
      border-radius: 20px;
      border: 1px solid #2b2d33;
      background: #0d0d0d;
      color: #fff;
      text-align: center;
      font-family: "Nunito", sans-serif;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.25px;
    }
    .forgot {
      width: 50%;
      height: 35px;
      cursor: pointer;
      border-radius: 20px;
      border: 1px solid #2b2d33;
      background: #fff;
      color: #0d0d0d;
      text-align: center;
      font-family: "Nunito", sans-serif;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.25px;
    }
  }
  .sign-up-text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin: 0;
      color: #575757;
      font-family: "Nunito", sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      span {
        text-decoration: underline;
        cursor: pointer;
        padding-left: 2px;
      }
    }
  }
  .modal-signup {
    padding: 24px;
    width: 100%;
    color: #0d0d0d;
    .logo-icon {
      width: 53%;
      display: flex;
      justify-content: space-between;
      .left {
        cursor: pointer;
      }
      .icon {
        width: 30px;
      }
    }
    .sign-up {
      width: 100%;
      display: flex;
      justify-content: center;
      color: #212426;
      font-family: "Nunito", sans-serif;
      font-size: 31px;
      font-style: normal;
      font-weight: 1000;
      line-height: 36px;
      p {
        margin: 10px 0px 10px 0px;
      }
    }
  }
  .date-text {
    width: 78%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 25%;
    padding-top: 2%;
    h1 {
      font-family: "Nunito", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      margin: 0;
    }
    p {
      font-family: "Nunito", sans-serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      margin-top: 2px;
    }
  }
  .date {
    width: 100%;
    display: flex;
    gap: 0.2rem;
    justify-content: center;
    .mounth {
      select {
        width: 70px;
        height: 50px;
        color: #575757;
        font-family: "Nunito", sans-serif;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        border-radius: 12px;
        border: 2px solid #575757;
      }
    }
    .day {
      select {
        width: 50px;
        height: 50px;
        color: #575757;
        font-family: "Nunito", sans-serif;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        border-radius: 12px;
        border: 2px solid #575757;
      }
    }
    .year {
      select {
        width: 70px;
        height: 50px;
        color: #575757;
        font-family: "Nunito", sans-serif;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        border-radius: 12px;
        border: 2px solid #575757;
      }
    }
  }
  .button {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 8px;
    .advance {
      gap: 0;
      cursor: pointer;
      width: 50%;
      height: 35px;
      border-radius: 20px;
      border: 1px solid #2b2d33;
      background: #0d0d0d;
      color: #fff;
      text-align: center;
      font-family: "Nunito", sans-serif;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.25px;
    }
  }
  .date-selected {
    p {
      margin: 8px;
    }
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
