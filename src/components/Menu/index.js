import React from 'react'

import Button from '../Button'

import Logo from '../../assets/img/Logo.png'

import './Menu.css'

const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Paolaflix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu
