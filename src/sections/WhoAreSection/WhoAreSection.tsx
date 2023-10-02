import React from "react";
import { WhoAreSectionContainer } from "./WhoAreSectionStyled";

export const WhoAreSection = () => {
    return (
        <WhoAreSectionContainer>
            <div className="title">
                <h1><b>quem </b>somos?</h1>
            </div>
            <div className="content">
                <p>Somos uma empresa com foco em <b>desenvolvimento de softwares</b> personalizados de média a grande escala, que necessitem <b>excelência em qualidade</b>, <b>arquitetura técnica</b> e <b>segurança</b>.</p>
                <p>Possuimos uma equipe especializada e experiente em desenvolvimento de softwares de <b>alta escala</b>, como ERPs, plataformas de ensino, sistemas médicos, sistemas de emissão de documento de assinatura digital, softwares de integração de sistemas, <b>inteligência artificial</b>, sistemas de <b>criptografia</b> e outros.</p>
            </div>
        </WhoAreSectionContainer>
    );
}