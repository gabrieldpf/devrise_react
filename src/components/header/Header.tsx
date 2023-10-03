import React, { useState } from "react";
import { HeaderComponents } from "./HeaderStyled";
import { NavBarProps } from "../../types";
import { logo, logoEscrita, apple_icon, google_icon } from "../assets";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DynamicModal } from "../dynamic-modal/DynamicModal";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

export const Header = ({ ...props }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconRotated, setIsIconRotated] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsIconRotated(!isIconRotated);
  };

  const pages = [
    { text: "início", url: "#inicio" },
    { text: "quem somos", url: "#quem_somos" },
    { text: "produtos", url: "#produtos" },
    { text: "contato", url: "#contato" },
  ];

  return (
    <HeaderComponents>
      <DynamicModal
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
        variant="customized"
      >
        <div className="modal">
          <div className="logo-icon">
            <ArrowBackOutlinedIcon
              className="left"
              onClick={() => setOpenLoginModal(false)}
            />
            <img src={logo} alt="" className="icon" />
          </div>
          <div className="enter">
            <p>Entrar</p>
          </div>
          <div className="text-modal">
            <button>
              <img src={google_icon} alt="" />
              Entrar com o Google
            </button>
            <button>
              {" "}
              <img src={apple_icon} alt="" />
              Entrar com a Apple{" "}
            </button>
          </div>
          <div className="or">ou</div>
          <div className="inputs">
            <input type="text" placeholder="Telefone ou e-mail" />
            <input type="password" placeholder="Sua senha" />
          </div>
          <div className="buttons">
            <button className="next">Proximo</button>
            <button className="forgot">Esqueceu a senha?</button>
          </div>
          <div className="sign-up">
            <p>
              Não tem uma conta?
              <span
                onClick={() => {
                  setOpenLoginModal(false);
                  setOpenSignUpModal(true);
                }}
              >
                Cadastre-se!
              </span>
            </p>
          </div>
        </div>
      </DynamicModal>

      <DynamicModal
        open={openSignUpModal}
        onClose={() => setOpenSignUpModal(false)}
        variant="customized"
      ></DynamicModal>
      <img src={logoEscrita} alt="" />
      <nav>
        <ul>
          {pages &&
            pages.map((p, idx) => {
              return (
                <a href={p.url}>
                  <li
                    className={`element ${isActive === idx ? "clicked" : ""}`}
                    onClick={() => setIsActive(idx)}
                  >
                    {p.text}
                  </li>
                </a>
              );
            })}
        </ul>
      </nav>
      <div className="button-container">
        <button className="login" onClick={() => setOpenLoginModal(true)}>
          login
        </button>
        <button className="cadastro" onClick={() => setOpenSignUpModal(true)}>
          cadastro
        </button>
      </div>
      <div className="person-area">
        <div className="icons" onClick={toggleDropdown}>
          <CloseIcon style={!isIconRotated ? { display: "none" } : {}} />
          <MenuIcon style={isIconRotated ? { display: "none" } : {}} />
        </div>
        <div className="dropdown">
          <div
            className="dropdown-open"
            style={
              isOpen ? { opacity: "1" } : { opacity: "0", visibility: "hidden" }
            }
          >
            <div className="dropdown-info">
              <div className="dropdown-text">
                <p>início</p>
              </div>
              <div className="dropdown-text">
                <p>quem somos</p>
              </div>
              <div className="dropdown-text">
                <p>produtos</p>
              </div>
              <div className="dropdown-text">
                <p>contato</p>
              </div>
              <div className="dropdown-text">
                <p>login</p>
              </div>
              <div className="dropdown-text">
                <p>cadastro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderComponents>
  );
};
