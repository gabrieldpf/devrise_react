import styled from "styled-components"

export const ContainerInitialSection = styled.section`
    color: #fff;
    font-family: "Nunito";
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 30px;

        h1 {
            width: 25%;
            color: #FFF;
            font-size: 30px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;

            b {
                font-weight: 700;
            }
        }
    }

    .image-container{
        height: 80%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 768px) {
        justify-content: space-evenly;
        .title {
            padding-left: 0;

            h1 {
                width: 100%;
            }
        }

        .image-container{
            height: 50%;
        }
    }
`