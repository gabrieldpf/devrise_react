import React from "react";
import { ContainerInitialSection } from "./InitialSectionStyle";
import { background } from "../../assets";

export const InitialSection = () => {
    return (
        <ContainerInitialSection>
            <div className="title">
                <h1><b>construindo</b> pontes entre o mundo <b>físico</b> e o <b>digital</b>.</h1>
            </div>
            <div className="image-container">
                <img src={background} alt="" />
            </div>
        </ContainerInitialSection>
    )
};