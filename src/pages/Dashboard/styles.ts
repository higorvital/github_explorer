import styled, {css} from 'styled-components';
import {shade} from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    line-height: 56px;

    margin-top: 20px;
    max-width: 450px;

`

interface FormProps{
    hasError: boolean;
}

export const Form = styled.form<FormProps>`
    margin-top: 50px;
    display: flex;
    max-width: 700px;

    input{
        flex: 1;
        padding: 0 24px;
        color: #3a3a3a;
        border-radius: 5px 0 0 5px;
        border: 2px solid #fff;
        border-right: 0;

        ${(props) => props.hasError && css`
            border: 2px solid #c53030;
        `}

        &::placeholder {
            color: #A8A8B3;
        }

    }

    button {
        color: #fff;
        font-weight: bold;
        width: 210px;
        height: 70px;
        background: #04D361;
        border: 0;
        border-radius: 0 5px 5px 0;
        transition: background 0.2s;

        &:hover{
            background: ${shade(0.2, '#04D361')}
        }

    }


`

export const Repositories = styled.div`

    margin-top: 80px;
    max-width: 700px;

    a {
        width: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        background: #fff;
        padding: 24px;
        border-radius: 4px;
        transition: transform 0.3s;

        & + a{
            margin-top: 10px;
        }

        &:hover{
            transform: translateX(10px)
        }

        img {
            border-radius: 50%;
            width: 64px;
            height: 64px;
        }

        div {
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #3d3d3d;
            }

            p {
                font-size: 18px;
                color: #a8a8a8;
                flex: 1;
            }
        }

        svg {
            margin-left: auto;
            color: #C9C9D4;
        }
    }


`

export const Error = styled.span`
    color: #c53030;
    display: block;

`