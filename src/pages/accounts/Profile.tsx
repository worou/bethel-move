import React, { useState } from 'react'
import AuthService from '../../services/auth-service'
import Footer from '../Footer'
import HeaderBis from '../HeaderBis'

const Profile = () => {
    const [user, setUser] = useState(null)
    AuthService.profile().then(data =>console.log(data));
    return (
        <>
            <HeaderBis titre="Votre profile" />
            login ...
            <Footer />
        </>
    )
}

export default Profile