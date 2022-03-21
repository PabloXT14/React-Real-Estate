import { menuData } from "../../data/MenuData";
import { Button } from "../Button";
import { Container, Logo, MenuBars, Navbar, NavButton, NavMenu, NavMenuLinks } from "./styles";


export function Header() {
    return (
        <Container>
            <Navbar>
                <Logo to='/'>
                    Rocket Place
                </Logo>
                <MenuBars />
                <NavMenu>
                    {menuData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavButton>
                    <Button
                        to='/'
                        primary={false}
                        big={false}
                    >
                        Contact Us
                    </Button>
                </NavButton>
            </Navbar>
        </Container>
    );
}