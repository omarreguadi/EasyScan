import React from 'react'
import { useAuthAccess } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import API from '../helpers/API'
import { notify } from '../helpers/Notify';

export default function Header() {
    const { auth, setAuth } = useAuthAccess()
    const handleLogout = async () => {
        const config = { headers: { "Content-Type": "application/json" } };
        const response = await API.get("/logout", config);
        notify({ error: response.data.error })
        setAuth({login: false})
        localStorage.removeItem("auth")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container">
                <Link to="/" className="navbar-brand" >EasyScan</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">

                    <ul className="navbar-nav d-flex">
                        {<li className="nav-item">
                            <Link to="/" className="nav-link">Télécharger l'application</Link>
                        </li>}
                        {<li className="nav-item">
                            <Link to="/services" className="nav-link">Je suis une marque</Link>
                        </li>}
                        {<li className="nav-item">
                            <Link to="/blog" className="nav-link">Blog</Link>
                        </li>}
                        {!auth.login && <li className="nav-item">
                            <Link to="/signin" className="nav-link">Se connecter</Link>
                        </li>}
                        {!auth.login && <li className="nav-item">
                            <Link to="/signup" className="nav-link">S'inscrire</Link>
                        </li>}

                        {auth.login && <li className="nav-item">
                            <Link to="/add" className="nav-link"> Nouveau Article</Link>
                        </li>
                        }
                        {auth.login && <li className="nav-item">
                            <Link to="/user" className="nav-link"> Utilisateur</Link>
                        </li>
                        }
                        {auth.login && <li className="nav-item">
                            <Link to="/dashboard" className="nav-link"> Tableau de bord</Link>
                        </li>
                        }
                        {auth.login && <li><span className="dropdown-item" onClick={handleLogout}>Se déconnecter</span></li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}
