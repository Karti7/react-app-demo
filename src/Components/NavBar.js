import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, NavItem, NavLink, NavbarText
} from 'reactstrap'

import { Link } from 'react-router-dom'

import HomeIcon from '@material-ui/icons/Home';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color="dark" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white mx-2"> <HomeIcon />LOGO
            </Link>
            </NavbarBrand>
                <NavbarToggler onClick={toggle}  />
                <Collapse isOpen={isOpen} navbar className="mx-2" >
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/ourteam">Team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/ourwork">Work</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/price">Price</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    )
}

export default NavBar

