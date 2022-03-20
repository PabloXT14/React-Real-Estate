import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.header`
    position: fixed;
    width: 100%;
`;


export const Navbar = styled.nav`
    height: 3.75rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    background: var(--header-background);
`;


export const Logo = styled(Link)`
    color: var(--color-secondy);
`;


export const MenuBars = styled.i`
`;


export const NavMenu = styled.ul`

`;

export const NavMenuLinks = styled(Link)`

`;

