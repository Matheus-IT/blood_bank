import styled from  'styled-components';

export const NavbarDiv = styled.div`
    height: 70px;
    background: #6441EE;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 40px;
    padding-left: 40px;
    font-weight: bold;

    img{
        height: 100%;
        cursor: pointer;
        margin-right: 10px;
    }

    button{
        width: 145px;
        height: 40px;
        border: 2px solid #FFFFFF;
        border-radius: 8px;
        background: transparent;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 16px;
        color: #FFFFFF;
        cursor: pointer;

        &:hover{
            color: #6441EE;
            background-color: #fff;
        }
    }

`

export const LinksDiv = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a{
        font-family: 'Inter';
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;
        margin-right: 100px;
        text-align: center;
        &:active{
        color: #313030;
        }
    }




`