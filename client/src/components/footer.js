import React from "react";
import "../assets/styles/Footer.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="main-footer ">
            <div className="container">
                <div className="row mb-5">
                    {/* Colonne  1*/}
                    <div className="col">
                        <h1 className="title-size ">Nous contactez</h1>
                        <ul className="list-unstyled">
                            <li>01 25 25 25 25</li>
                            <li>Paris , France</li>
                            <li>Contact@easyscan.fr</li>
                        </ul>
                    </div>
                    {/* colonne 2 */}
                    <div className="col">
                        <h1 className="title-size ">LIENS UTILES</h1>
                        <ul className="list-unstyled">
                            <Link to="/" className="link-footer" ><li>Télécharger l'application</li></Link>
                            <Link to="/blog" className="link-footer"> <li>Blog</li></Link>
                            <Link to="/services" className="link-footer" > <li>Services</li></Link>
                        </ul>
                    </div>
                    {/* Colonne 3 */}
                    <div className="col">
                        <h1 className="title-size "> AUTRES QUESTIONS</h1>
                        <ul className="list-unstyled">
                            <Link to="/services"  className="link-footer"> <li>Fonctionnalités</li></Link>
                            <li>Version membre</li>
                            <li>Des questions ?</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} EASY SCAN | Tous les droits résérvés |
                        Omar REGUADI  | Omar ATARI
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
