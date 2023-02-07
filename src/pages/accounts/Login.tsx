import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth-service';
import Footer from '../Footer';
import HeaderBis from '../HeaderBis';

export default function Login() {
    const initialState = {
        email: "",
        password: "",
        fieldCheck: false
    };
    const [user, setUser] = useState(initialState);
    const history = useNavigate();
    const handleSubmit = (e: any) => {
        console.log(user);
        e.preventDefault();
        AuthService.login(user)
            .then((data) => {
                console.log(data.data);
                AuthService.setUser(data.data);
                history('/pay');
                //toast("Connexion réussie!");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                setUser(initialState);
            });
    };
    return (
        <>
            <HeaderBis titre={"Authentification"} />
            <section className="blog destination-b pb-6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xs-12 mb-4">
                            <div className="list-results d-flex align-items-center justify-content-between">
                                <div className="list-results-sort">
                                    <p className="m-0"> Covoiturages/connexion</p>
                                </div>
                            </div>
                            <div className="trend-box">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title text-center">Connectez-vous</h4>
                                        <form onSubmit={e => handleSubmit(e)}>
                                            <div className="form-outline mb-4">
                                                <input type="email" id="email" className="form-control border" onChange={(e) =>
                                                    setUser({ ...user, email: e.target.value })
                                                } />
                                                <label className="form-label" htmlFor="email">Email addresse*</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" className="form-control border" onChange={(e) =>
                                                    setUser({ ...user, password: e.target.value })
                                                } />
                                                <label className="form-label" htmlFor="password">Mot de passe*</label>
                                            </div>

                                            <div className="row mb-4">
                                                <div className="col d-flex justify-content-center">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked onChange={(e) =>
                                                            setUser({ ...user, fieldCheck: e.target.chexked })
                                                        } />
                                                        <label className="form-check-label" htmlFor="form1Example3"> Se souvenir </label>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <a href="#!">Mot de passe oublié?</a>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
                                            </div>
                                            <div className="col">
                                                <Link to="/register">S'inscrire</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
