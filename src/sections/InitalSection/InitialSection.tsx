import React from "react";
import { ContainerInitialSection } from "./InitialSectionStyle";
import { background } from "../../components/assets";
import { SectionProps } from "../../types/sectionProps";

export const InitialSection = ({...props}: SectionProps) => {
    return (
        <ContainerInitialSection id={props.id}>
            <div className="title">
                <h1><b>construindo</b> pontes entre o mundo <b>físico</b> e o <b>digital</b>.</h1>
            </div>
            <div className="image-container">
                <img src={background} alt="" />
            </div>
        </ContainerInitialSection>
    )
};