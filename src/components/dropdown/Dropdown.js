import React from 'react'
import { menuData } from '../../services/MenuData';
import { Button } from '../navbar/NavBarElements';
import { 
    DropdownContainer, 
    Icon, 
    CloseIcon,
    DropdownWrapper, 
    DropDownMenu,
    DropdownLink,
    BtnWrap } 
    from './DropdownElements';

const Dropdown = ({ isOpen, toggle }) => {

    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropDownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink as="a" href={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropDownMenu>
                <BtnWrap>
                    <Button primary='true' round='true' big='true' as="a" href='/contact'>
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
