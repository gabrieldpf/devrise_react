import styled from "styled-components"

export const ContactSectionContainer = styled.section`
   color: #fff;
    font-family: "Nunito";
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #000;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;

    .image_container {
        padding: 4rem;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 35%;
            transition: transform 1s;
        }

        &:hover img {
            transform: rotateY(180deg);
        }
    }


    .content{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;

        .title {
            text-align: center;

            span {
                color: #FFF;
                text-align: center;
                font-size: 18px;
                font-style: normal;
                font-weight: 600;
                line-height: 24px; /* 109.091% */
                margin: 0;
                padding: 0;
            }

            h1 {
                color: #FFF;
                text-align: center;
                font-size: 30px;
                font-style: normal;
                font-weight: 600;
                line-height: 60px; /* 115.385% */
                letter-spacing: -1.04px;
                margin: 0;
                padding: 0;
            }
            p {
                color: #FFF;
                text-align: center;
                font-size: 22px;
                padding: 0;
                margin: 0;
                font-style: normal;
                font-weight: 400;
                line-height: 30px; /* 125% */
            }
        }

        .contacts {
            width: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .section{
                width: 100%;
                min-height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;
                gap: 0.5rem;

                .icon {
                    width: 40px;
                    background-color: #707073;
                    height: 40px;
                    border: solid 4px #b0b0b2;
                    border-radius: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                h1 {
                    color: #FFF;
                    text-align: center;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 30px; /* 150% */
                    margin: 0;
                }

                p {
                    color: #FFF;
                    margin: 0;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px; /* 150% */
                    width: 60%;
                    text-align: center;
                }

                span {
                    text-align: center;
                    color: #FFF;
                    font-size: 12px;
                    word-break: break-all;
                    font-style: normal;
                    width: 80%;
                    font-weight: 600;
                }
            }
        }
    }

    @media (max-width: 768px) {

        .image_container {

            img {
                width: 100%;
            }
        }

        .contacts {
            flex-direction: column;
            gap: 2rem;

            .section {
                padding-bottom: 20px;
            }
        }
    }
`;