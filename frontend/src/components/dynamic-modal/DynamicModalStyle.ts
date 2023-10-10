import styled from "styled-components";

export const StyledDynamicModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-container {
    background-color: #FCFCFC;
    min-width: 10vw;
    min-height: 10vh;
    border-radius: 16px;
  }
`;

export const StyledStandardModal = styled.div<{
  confirmBackgroundColor?: string;
  iconColors?: string[];
}>`
  width: 50vh;
  min-height: 20vh;
  padding: 1rem;

  .div-icons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .first-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 5px;
      font-size: 1.8em;
      color: ${(props) => props.iconColors && props.iconColors[0]!};
      background-color: ${(props) => props.iconColors && props.iconColors[1]!};
      border: 0.5rem solid
        ${(props) => props.iconColors && props.iconColors[2]!};
    }

    .close-icon {
      color: #737373;
      font-size: 1.8em;
      cursor: pointer;
    }
  }

  p {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #454545;
  }

  label {
    font-family: "Nunito", sans-serif;
    color: #737373;
    font-size: 14px;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;

    .btn-confirm {
      margin-top: 1rem;
      text-transform: none;
      font-family: "Nunito", sans-serif;
      letter-spacing: 0.5px;
      background-color:blue;
      border: none;
    }

    .btn-cancel {
      letter-spacing: 0px;
      margin-top: 1rem;
      text-transform: none;
      font-family: "Nunito", sans-serif;
      background-color: #fcfcfc;
      color: #737373;
      border: red;
    }
  }

  @media (max-width: 1000px) {
    min-width: 48vw;
    max-width: 80vw;
    min-height: 35vh;

    .buttons {
      flex-direction: column-reverse;

      .btn-cancel {
        margin-top: 0;
      }
    }
  }
`;
