import React from "react";
import { OursProductsContainer } from "./OursProductsSectionStyled";
import { DataJson } from "./OursProductsController";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { SectionProps } from "../../types/sectionProps";

export const OursProductsSection = ({...props}: SectionProps) => {
    return (
        <OursProductsContainer id={props.id}>
            <div className="title">
                <h1><b>nossos </b>produtos</h1>
            </div>
            <div className="content">
                <p>Nossa linha de produtos reflete nosso compromisso com a <b>excelência técnica</b> e a <b>satisfação do cliente</b>. Aqui está um vislumbre do que oferecemos:</p>
            </div>
            <div className="products">
                {DataJson.map((data, index) => (
                    <div className="list_products">
                        <p>APLICATIVO {data.text}</p>
                        <ArrowCircleRightOutlinedIcon className="icons_arrow"/>
                    </div>
                ))}
            </div>

        </OursProductsContainer>
    );
};