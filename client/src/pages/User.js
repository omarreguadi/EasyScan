import React from 'react'
import { useAuthAccess } from '../contexts/AuthContext'

export default function User() {
    const { auth } = useAuthAccess()

    return (
        <div className="container">
            <h1>Informations Utilisateur</h1>
            <h2>Nom: {auth?.userInfo.name}</h2>
            <h2>Prenom: {auth?.userInfo.lastName}</h2>
            <h3>Email: {auth?.userInfo.email}</h3>
        </div>
    )
}
