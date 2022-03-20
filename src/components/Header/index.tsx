import { menuData } from "../../data/MenuData";
import { Container, Logo, MenuBars, Navbar, NavMenu, NavMenuLinks } from "./styles";


export function Header() {
    return (
        <Container>
            <Navbar>
                <Logo to='/'>
                    Rocket Real Estate
                </Logo>
                <MenuBars />
                <NavMenu>
                    {menuData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
            </Navbar>
        </Container>
    );
}