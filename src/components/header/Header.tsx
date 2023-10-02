import React, { useState } from "react";
import { HeaderComponents } from "./HeaderStyled";
import { NavBarProps } from "../../types";
import { logoEscrita } from "../assets";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Header = ({...props} :NavBarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isIconRotated, setIsIconRotated] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
      setIsIconRotated(!isIconRotated);
    };

    return (
        <HeaderComponents>
            <img src={logoEscrita} alt="" />
            <nav>
                <ul>
                    <li>início</li>
                    <li>quem somos</li>
                    <li>produtos</li>
                    <li>contato</li>

                </ul>
            </nav>
            <div className="button-container">
                <button className="login">login</button>
                <button className="cadastro">cadastro</button>
            </div>
            <div className="person-area">
                <div className="icons" onClick={toggleDropdown}>
                    <CloseIcon
                        style={!isIconRotated ? { display: "none" } : {}}
                    />
                    <MenuIcon
                        style={isIconRotated ? { display: "none" } : {}}
                    />
                </div>
                <div className="dropdown">
                    <div
                        className="dropdown-open"
                        style={
                            isOpen
                            ? { opacity: "1" }
                            : { opacity: "0", visibility: "hidden" }
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
                            <div className="dropdown-text" >
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
}