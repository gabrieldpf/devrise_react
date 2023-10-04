import React, { useState } from "react";
import { HeaderComponents } from "./HeaderStyled";
import { NavBarProps } from "../../types";
import { logo, logoEscrita, apple_icon, google_icon } from "../assets";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DynamicModal } from "../dynamic-modal/DynamicModal";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import InputMask from "react-input-mask";

export const Header = ({ ...props }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconRotated, setIsIconRotated] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openCodeVModal, setOpenCodeVModal] = useState(false);

  const years = Array.from({ length: 101 }, (_, i) => 1923 + i);

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
        <div className="modal-login">
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
              <img src={apple_icon} alt="" />
              Entrar com a Apple
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
          <div className="sign-up-text">
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
      >
        <div className="modal-signup">
          <div className="logo-icon">
            <ArrowBackOutlinedIcon
              className="left"
              onClick={() => setOpenSignUpModal(false)}
            />
            <img src={logo} alt="" className="icon" />
          </div>
          <div className="sign-up">
            <p>Cadastro</p>
          </div>
          <div className="text-modal">
            <button>
              <img src={google_icon} alt="" />
              Cadastre-se com o Google
            </button>
            <button>
              <img src={apple_icon} alt="" />
              Cadastre-se com a Apple
            </button>
          </div>
          <div className="or">ou</div>
          <div className="inputs">
            <input type="text" placeholder="Nome" />
            <InputMask
              mask="+55 (99) 99999-9999"
              placeholder="(00) 90000-0000"
              id="telefone"
              name="telefone"
              type="tel"
            />
          </div>
          <div className="date-text">
            <h1>Data de Nascimento</h1>
            <p>
              Isso não será exibido publicamente. Confirme sua própria idade.
            </p>
          </div>
          <div className="date">
            <div className="day">
              <select>
                <option value="">Dia</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className="mounth">
              <select>
                <option value="">Mês</option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="year">
              <select className="custom-select">
                <option value="">Ano</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="button">
            <button
              className="advance"
              onClick={() => {
                setOpenSignUpModal(false);
                setOpenCodeVModal(true);
              }}
            >
              Avançar
            </button>
          </div>
          <div className="sign-up-text">
            <p>
              Já tem uma conta?
              <span
                onClick={() => {
                  setOpenSignUpModal(false);
                  setOpenLoginModal(true);
                }}
              >
                Entre!
              </span>
            </p>
          </div>
        </div>
      </DynamicModal>
      <DynamicModal
        open={openCodeVModal}
        onClose={() => setOpenCodeVModal(false)}
        variant="customized"
      >
        <div className="modal-code">
          <div className="logo-icon">
            <ArrowBackOutlinedIcon
              className="left"
              onClick={() => {
                setOpenCodeVModal(false);
                setOpenSignUpModal(true);
              }}
            />
            <img src={logo} alt="" className="icon" />
          </div>
          <div className="code-text">
            <h1>Enviamos um código para você</h1>
            <p>
              Insira-o abaixo o código de verificação para confirmar seu número
              de telefone.
            </p>
          </div>
          <div className="input-code">
            <InputMask
              mask="9 9 9 9 9"
              placeholder="_ _ _ _ _"
              id="codev"
              name="telefone"
              type="tel"
            />
            <p>
              Não recebeu <span>SMS?</span>
            </p>
          </div>
          <div className="adv-button">
            <button
              className="advance"
              onClick={() => {
                setOpenCodeVModal(false);
              }}
            >
              Avançar
            </button>
          </div>
        </div>
      </DynamicModal>
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
