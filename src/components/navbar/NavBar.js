import React from 'react'
import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, Button, NavBtn} from './NavBarElements'
import { menuData } from '../../services/MenuData'

const NavBar = () => {
    return (
        <div>
            <Nav>
                <Logo to='/'>CRWN</Logo>
                <MenuBars/>
                <NavMenu>
                    {menuData.map((title, index) => (
                        <NavMenuLinks to= {title.link} key={index}>
                            {title.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button to='/contact' primary='true'>Contact Us</Button>
                </NavBtn>
            </Nav>
        </div>
    )
}

export default NavBar
