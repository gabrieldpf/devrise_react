import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 24px;
  background-color: #fff;
  .container {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding-top: 24px;
  }
  .text_container {
    width: 70%;
    height: 10%;
    p {
      color: var(--gray-500, #667085);
      font-family: "Nunito", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
    .list_itens {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      justify-content: space-around;
    }
    ul {
      width: 70%;
    }
    li {
      color: #667085;
      font-size: 15px;
      font-weight: 400;
      font-family: "Nunito", sans-serif;
      font-weight: bold;
    }
  }

  .copyright {
    width: 70%;
    border-top: 1px solid #eaecf0;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: var(--gray-400, #98a2b3);
      font-family: "Nunito", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
    .icons {
      width: 20%;
      color: #98a2b3;
      display: flex;
      justify-content: space-between;
    }
  }

  @media (max-width: 768px) {
    .text_container {
      width: 100%;
      height: 10%;
      text-align: center;
      p {
        color: var(--gray-500, #667085);
        font-family: "Nunito", sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
      .list_itens {
        gap: 0.5rem;
        display: flex;
        flex-direction: column;
        list-style-type: none;
        justify-content: center;
        align-items: center;
      }
      ul {
        width: 90%;
      }
    }

    .copyright {
      width: 100%;
      border-top: 1px solid #eaecf0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      p {
        color: var(--gray-400, #98a2b3);
        font-family: "Nunito", sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
      .icons {
        width: 100%;
        color: #98a2b3;
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
`;
