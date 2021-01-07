import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Form(props) {

    return (
        <>
            <div className="row" >
                <div className="col-md-6 offset-md-3">
                    <h2 className="pb-4">{props.register ? "Créer un compte" : "Accés Utilisateurs"}</h2>
                </div>
            </div>
            <div >
                <div className="col-md-6 offset-md-3 ">
                    <form onSubmit={(e) => props.handleSubmit(e)}>
                        {props.register && <div className="mb-3" >
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="name" onChange={(e) => props.handleChange(e)} />
                        </div>}
                        {props.register && <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Prenom</label>
                            <input type="text" className="form-control" id="lastName" onChange={(e) => props.handleChange(e)} />
                        </div>}
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => props.handleChange(e)} />
                            <div id="emailHelp" className="form-text">On ne va jamais partager votre addresse email.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Mot de Passe </label>
                            <input type="password" className="form-control" id="password" onChange={(e) => props.handleChange(e)} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => props.handleChange(e)} />
                            <label className="form-check-label" htmlFor="exampleCheck1">Se souvenir de moi</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Valider</button>
                    </form>
                    <h6 className="mt-3">{props.register ? "Déja un compte ?" : "Vous n'avez pas encore un compte "} <Link to={props.register ? "/signin" : "/signup"}>{props.register ? "Se connecter " : "Créer un compte"}</Link></h6>
                </div>
            </div>
        </>
    )
}
Form.propTypes = {
    register: PropTypes.bool,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
}