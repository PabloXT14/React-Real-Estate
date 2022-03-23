import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

export const Container = styled.header`
    position: fixed;
    width: 100%;
    z-index: 999;
`;


export const Navbar = styled.nav`
    height: 3.75rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background: var(--header-background);
    /* background: red; */
`;


export const Logo = styled(Link)`
    color: var(--color-secondy);
    /* background: red; */
    font-style: italic;
    font-size:1.2rem;
    font-weight: 900;

    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
`;


export const MenuBars = styled(FaBars)`
    display: none;
    color: var(--color-secondy);
    font-size: 1.5rem;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavMenuLinks = styled(Link)`
    color: var(--color-secondy);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;

    cursor: pointer;
`;

export const NavButton = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
