import { css } from "@emotion/react";

// 클래스명 자동 생성해줌

export const container = (width)=>css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: ${width}px;
    height: 100%;
`;
export const container2 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
`;
export const container3 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
    transition: ease-out 3s;
    &:hover{
        -webkit-transform: rotateX('160deg');
        left: 200px;
        transform: rotateY(160deg);
    }
`;

