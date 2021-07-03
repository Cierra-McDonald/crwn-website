import React from 'react'
import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, Button, NavBtn} from './NavBarElements'
import { menuData } from '../../services/MenuData';
import { useHistory } from 'react-router-dom';

const NavBar = ({toggle}) => {
    let history = useHistory();

    const handleContact = () => { 
        history.push('/contact')
    }

    return (
        <div>
            <Nav>
                <Logo as="a" href='/'>CRWN</Logo>
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((title, index) => (
                        <NavMenuLinks as="a" href={title.link} key={index}>
                            {title.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button as="a" href="/contact" onClick={handleContact}>Contact Us</Button>
                </NavBtn>
            </Nav>
        </div>
    )
}

export default NavBar;
