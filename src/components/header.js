import React from "react";
import './header.css';
import image from '../assets/slack_logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <section id="left-child">
                <img alt="slack" src={image} />
                <section className="left-child-item">
                    <Link to="/login">Product</Link>
                </section>
                <section className="left-child-item">Solutions</section>
                <section className="left-child-item">Enterprise</section>
                <section className="left-child-item">Resourses</section>
                <section className="left-child-item">Pricing</section>
            </section>
            <div id="right-child">
                <button className="media-items1">Sign in</button>
                <button className="media-items2">Talk To Sales</button>
                <button className="media-items3">Try for Free</button>
            </div>
        </header>
    )
}

export default Header;