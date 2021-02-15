import React from 'react'
import './sidebar.css'

const SideBar = props => {
    return (
        <div className="logo">
            <header>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="#inicio">Inicio</a>
                        </li>
                        <li>
                            <a href="#noticias">Notícias</a>
                        </li>
                        <li>
                            <a href="#aboutus">About us</a>
                        </li>
                        <li className={'free'}>
                            <h3>FRETE GRÁTIS ACIMA DE R$250,00</h3>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default SideBar