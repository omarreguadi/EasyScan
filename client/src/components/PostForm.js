import React from 'react'
import PropTypes from 'prop-types'

export default function PostForm(props) {
    return (
        <>
            <div className="row" >
                <div className="col-md-12 ">
                    <h2 className="pb-4 mx-1">{props.comment ? 'Ajouter un commentaire' : 'Ajouter un article'}</h2>
                </div>
            </div>
            <div >
                <div className="col-md-12 ">
                    <form onSubmit={(e) => props.handleSubmit(e)}>
                        <div className="mb-3" >

                            <input type="text" className="form-control form-control--custom" id={props.comment ? "Auteur du commentaire" : "title"} placeholder={props.comment ? "Votre nom ici" : "Votre titre ici"} onChange={(e) => props.handleChange(e)} />
                        </div>
                        <div className="mb-3" >
                            <textarea className={props.comment ? "form-control text-area--comment" : "form-control text-area--custom"} id={props.comment ? "commentBody" : "body"}  placeholder={props.comment ? "Votre commentaire ici" : "Votre article ici"} onChange={(e) => props.handleChange(e)}></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-dark d-flex align-items-center"> <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg> {props.comment ? "Ajouter un commentaire " : "Ajouter un article" } </button>
                    </form>
                </div>
            </div>
        </>
    )
}
PostForm.propTypes = {
    handleSubmit: PropTypes.func,
    comment: PropTypes.bool
}