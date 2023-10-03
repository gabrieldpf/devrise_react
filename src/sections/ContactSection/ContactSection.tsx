import React from "react";
import { ContactSectionContainer } from "./ContactSectionStyled";
import { background2 } from "../../components/assets";
import { ContactJson } from "./data";
import { SectionProps } from "../../types/sectionProps";

export const ContactSection = ({...props}: SectionProps) => {
    return (
        <ContactSectionContainer id={props.id}>
            <div className="image_container">
                <img src={background2} alt="" />
            </div>

            <div className="content">
                <div className="title">
                    <span>Contate-nos</span>
                    <h1>Amaríamos ouvir você.</h1>
                    <p>Nossa equipe estará pronta para te ajudar</p>
                </div>
                <div className="contacts">
                    {ContactJson.map((data, index) => (
                        <div className="section">
                            <div className="icon">
                                {data.icon}
                            </div>
                            <h1>{data.title}</h1>
                            <p>{data.legend}</p>
                            <span>{data.contact}</span>
                        </div>
                    ))}
                </div>
            </div>
        </ContactSectionContainer>
    );
};