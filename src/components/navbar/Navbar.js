import React, { Component } from 'react'
import { withRouter, Route, Link } from 'react-router-dom'

import './component.css'
import './demo.css'


class Navbar extends Component {

    active(path){
        if(window.location.pathname  === path){
            return 'menu__item menu__item--current';
        } else {
            return 'menu__item'
        }
    }

    render() {
        return (
            <div>
                <section className="section section--menu" id="Valentine">
                    <nav className="menu menu--valentine">
                        <ul className="menu__list">
                            <li className={this.active('/')}>
                                <Link to="/" className="menu__link">Home</Link>
                            </li>
                            <li className={this.active('/about')}>
                                <Link to="/about" className="menu__link">About</Link>
                            </li>
                            <li className={this.active('/locations')}>
                                <Link to="/locations" className="menu__link">Locations</Link>
                            </li>
                            <li className={this.active('/register')}>
                                <Link to="/register" className="menu__link">Register</Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>

        );
    }

}

export default Navbar;


/*
 <div className="TopBar">
 <Link to="/">Home</Link>
 <Link to="/about">About</Link>
 <Link to="/locations">Locations</Link>
 <Link to="/register">Register</Link>


 </div>
 */

