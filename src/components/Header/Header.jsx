import React from 'react'
import "./style.css"
import logoVenturus from "../../assets/img/logo-venturus.png"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header d-flex">
            <div className="container">
                <Link to="/" className="header__logo-title d-flex">
                    <img className="logo" src={logoVenturus} alt="Logo Venturus"/>
                    <h1 className="title">Squad Management Tool</h1>
                </Link>
                <div className="header__user-profile d-flex">
                    <span className="user-profile__username">Jane Doe</span>
                    <div className="user-profile__avatar">
                        <span className="user-initials">JD</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
