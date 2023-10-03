import styled from "styled-components"

export const WhoAreSectionContainer = styled.section`
    color: #fff;
    font-family: "Nunito";
    height: auto;
    width: 100%;
    min-height: 60%;
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

    @media (max-width: 768px) {
        .content {
            p {
                font-size: 18px;
            }
        }
    }
`;