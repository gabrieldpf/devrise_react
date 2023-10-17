import React, { useEffect, useState } from "react";
import { HeaderComponents } from "./HeaderStyled";
import { NavBarProps } from "../../types";
import { logo, logoEscrita, apple_icon, google_icon } from "../assets";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DynamicModal } from "../dynamic-modal/DynamicModal";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import InputMask from "react-input-mask";
import axios from "axios";
import Cookies from "js-cookie";
import { userInfo } from "os";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const Header = ({ ...props }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconRotated, setIsIconRotated] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openCodeVModal, setOpenCodeVModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<Record<string, any> | null>(null);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const years = Array.from({ length: 101 }, (_, i) => 1923 + i);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsIconRotated(!isIconRotated);
  };

  const ClickLogout = () => {
    Cookies.remove("user_infos");
    window.location.reload();
  };

  const pages = [
    { text: "início", url: "#inicio" },
    { text: "quem somos", url: "#quem_somos" },
    { text: "produtos", url: "#produtos" },
    { text: "contato", url: "#contato" },
  ];

  const hanldeLogin = async (e: any) => {
    e.preventDefault();

    try {
      console.log(email, password);
      const response = await axios.post(
        "http://localhost:3000/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      Cookies.set("user_infos", JSON.stringify(response.data), {
        expires: 5,
      });

      setOpenLoginModal(false);
      window.location.reload();
    } catch (error: any) {
      console.log(error);
      if (!error?.response) {
        setError("Erro ao acessar o servidor");
      } else if (error.response.status === 401) {
        setError("Usuário ou senha inválidos");
      }
    }
  };
  useEffect(() => {
    const userInfos = Cookies.get("user_infos")!;
    if (userInfos) {
      setUser(JSON.parse(userInfos));
    }
  }, []);
  return (
    <HeaderComponents>
      <DynamicModal
        open={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        variant="notify"
        btnConfirmClick={ClickLogout}
        title="Tem certeza que deseja sair da conta?"
        buttonCancel="Cancelar"
        buttonConfirm="Sair"
        icon={<ExitToAppIcon />}
        iconColors={["#D92D20", "#FEF3F2", "#FEE4E2"]}
        className="confirm"
      />

      <DynamicModal
        open={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
        variant="customized"
        className="logout"
      >
        <div className="container">
          <div className="divIcon">
            <div
              className="click"
              onClick={() => {
                setOpenLogoutModal(false);
                setOpenConfirmModal(true);
              }}
            >
              <LogoutOutlinedIcon className="sidebar-icon" />
              <span className="nav-text">Sair</span>
            </div>
          </div>
        </div>
      </DynamicModal>
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
            <input
              required
              type="text"
              placeholder="Telefone ou e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Sua senha"
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  hanldeLogin(e);
                }
              }}
            />
          </div>
          <div className="errors">
            <span className="error">{error}</span>
          </div>
          <div className="buttons">
            <button className="next" onClick={(e) => hanldeLogin(e)}>
              Login
            </button>
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
        className="cadastro-modal"
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
      {user == null ? (
        <div className="button-container">
          <button className="login" onClick={() => setOpenLoginModal(true)}>
            login
          </button>
          <button className="cadastro" onClick={() => setOpenSignUpModal(true)}>
            cadastro
          </button>
        </div>
      ) : (
        <div className="logado" onClick={() => setOpenLogoutModal(true)}>
          <AccountCircleOutlinedIcon className="icon-logado" />
          <p>{user.name}</p>
        </div>
      )}
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
