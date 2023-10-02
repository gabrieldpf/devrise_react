import styled from "styled-components";

export const HeaderComponents = styled.header`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
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
`;
