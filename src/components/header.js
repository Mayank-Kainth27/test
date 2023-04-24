import React from "react";
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <section id="logo">
                <h2>logo</h2>
            </section>
            <div id="media">
                <section className="media-items">a</section>
                <section className="media-items">b</section>
                <section className="media-items">c</section>
            </div>
        </header>
    )
}

export default Header;