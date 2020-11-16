import styled from 'styled-components';

export const Header = styled.section`

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: #C9C9D4;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 5px;
        }
    }

`

export const RepositoryInfo = styled.div`

    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            border-radius: 50%;
            width: 120px;
            height: 120px;
        }

        div {
            margin-left: 24px;
        }

        
    }

    ul{
        margin-top: 40px;

        list-style: none;
        display: flex;

        li {

            strong{
                font-size: 36px;
                line-height: 42px;
            }

            span {
                display: block;
                margin-top: 5px;
                color: #6C6C80;
                font-size: 20px;
                line-height: 23px;
            }

            & + li {
                margin-left: 50px;
            }
        }

    }

`

export const Issues = styled.div`

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