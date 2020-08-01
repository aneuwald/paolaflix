import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

import Logo from '../../assets/img/Logo.png'

import './Menu.css'

const Menu = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Paolaflix logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu
