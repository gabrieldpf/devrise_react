import React from "react";
import { logoEscritaPreta } from "../assets";
import { FooterStyle } from "./FooterStyle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="text_container">
          <img src={logoEscritaPreta} alt="" />
          <p>Crescendo com seu crescimento.</p>
          <ul className="list_itens">
            <li>Início</li>
            <li>Quem Somos</li>
            <li>Produtos</li>
            <li>Contato</li>
            <li>Cadastro</li>
            <li>Privacidade</li>
          </ul>
        </div>
        <div className="copyright">
          <p>© 2023 DevRise. Todos os direitos conservados.</p>
          <div className="icons">
            <a href="https://www.linkedin.com/company/92837632/admin/feed/posts/" target="blank"><LinkedInIcon /></a>
            <AlternateEmailIcon />
            <a href="https://www.instagram.com/devrisecompany/" target="blank"><InstagramIcon /></a>
            <a href="https://github.com/DevRiseCo" target="blank"><GitHubIcon /></a>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};
