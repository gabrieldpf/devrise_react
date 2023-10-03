import styled from "styled-components"

export const OursProductsContainer = styled.section`
    color: #fff;
    font-family: "Nunito";
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #000;
    align-items: center;
    justify-content: flex-start;

    .title {
        display: flex;
        align-items: center;
        width: 90%;
        justify-content: flex-start;

        h1 {
            color: #FFF;
            width: 10%;
            font-size: 38px;
            font-style: normal;
            font-weight: 300;
            line-height: 100.5%;

            b {
                font-weight: 700;
            }
        }

    }

    .content {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        flex-direction: column;

        p {
            color: #FFF;
            font-size: 22px;
            text-align: justify;
            font-style: normal;
            font-weight: 300;
            line-height: 145%; /* 46.4px */
            letter-spacing: 0.64px;
        }

        b {
            font-weight: 700;
        }
    }

    .products {
        width: 90%;
        height: 65%;
        overflow-y: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        flex-direction: column;

        .list_products {
            width: 100%;
            display: flex;
            padding: 8px;
            justify-content: space-between;
            align-items: center;
            border-radius: 8px;
            border: 3px solid #FFF;

            p {
                color: #FFF;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 89.5%; /* 28.64px */
                letter-spacing: -0.64px;
            }

            .icons_arrow {
                font-size: 32px;
            }
        }
    }

    @media (max-width: 768px) {
        .title {
            h1 {
                font-size: 28px;
            }

        }

        .content {
            p {
                font-size: 18px;
            }
        }

        .products {

            .list_products {
                padding: 4px;

                p {
                    font-size: 16px;
                }

                .icons_arrow {
                    font-size: 30px;
                }
            }
        }
    }
`;