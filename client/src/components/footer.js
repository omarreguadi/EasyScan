import React from "react";
import "../assets/styles/Footer.css";

function Footer() {
    return (
        <div className="main-footer ">
            <div className="container">
                <div className="row mb-5">
                    {/* Column1 */}
                    <div className="col">
                        <h1 className="title-size ">Nous contactez</h1>
                        <ul className="list-unstyled">
                            <li>01 25 25 25 25</li>
                            <li>Paris , France</li>
                            <li>Contact@easyscan.fr</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h1 className="title-size ">LIENS UTILES</h1>
                        <ul className="list-unstyled">
                            <li>Télécharger l'application</li>
                            <li>Blog</li>
                            <li>Nous rejoindre</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h1 className="title-size "> AUTRES QUESTIONS</h1>
                        <ul className="list-unstyled">
                            <li>Fonctionnalités</li>
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
