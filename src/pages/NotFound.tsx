import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Notfound() {
    

    return (
        <>
           <section className="error overflow-hidden">
            <div className="container">

                <div className="error-content text-center">
                    <h3>Oops! Page non trouvée</h3>
                    <img src="assets/images/404.svg" alt="" className="mb-4"/>
                    <h2 className="mb-0 navy">Nous sommes désolés, mais la page que vous avez demandée n'a pas été trouvée.</h2>
                    <div className="newsletter-form w-75 mx-auto mt-3">
                        <form>
                            <input type="email" placeholder="Entrer votre email"/>
                            <input type="submit" className="nir-btn bordernone" value="Souscrire"/>
                        </form>
                    </div>
                    <div className="error-btn mt-4">
                        <Link to="/" className="nir-btn mr-2">PAGE D'ACCUEIL</Link>
                    </div>
                </div>
            </div>
          </section>
          <Footer/>
        </>
    )
}
