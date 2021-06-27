import styled, { css }  from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";




export const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #000;
`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;

`;


export const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

export const MenuBars = styled(FaBars)`
    display: none;
    color: #fff;
    
    @media screen and (max-width: 768px) { 
        display: block;
        height: 40px;
        width: 40px;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
    `;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) { 
        display: none:
    }
`;

export const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#000d1a' : '#CD853f')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({ big }) => (big ? '20px' : '14px')};

    &:hover { 
        transform: translateY(-2px);
    }


`;

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;   
    
    @media screen and (max-width: 768px) { 
        display: none:
    }
`;