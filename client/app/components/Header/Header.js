import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const Header = () =>(
    <header id="header">
        <div className="intro text-center">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="intro-text">
                            <h1>WILLKOMMEN BEI <span className="brand">PROJEKTNAME</span></h1>
                            <p>SLOGAN DES PROJEKTES</p>
                            <a href="#portfolio" className="btn btn-default btn-lg page-scroll">UNSERE
                                STORY</a></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);
export default Header;
