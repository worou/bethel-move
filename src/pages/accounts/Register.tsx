import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth-service';
import Footer from '../Footer';
import HeaderBis from '../HeaderBis';

export default function Register() {
    const initialState = {
        name: "",
        email: "",
        password: "",
        firstname: "",
        address: "",
        telephone: "",
        description: "",
    };
    const [user, setUser] = useState(initialState);
    const history = useNavigate();
    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e: any) => {
        console.log(user);
        e.preventDefault();
        AuthService.register(user)
            .then((data) => {
                console.log(data);
                //history('/home');
                //toast("Connexion réussie!");
                //window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                setUser(initialState);
            });
    };
    return (
        <>
            <HeaderBis titre="Inscription" />
            <section className="blog destination-b pb-6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xs-12 mb-4">
                            <div className="list-results d-flex align-items-center justify-content-between">
                                <div className="list-results-sort">
                                    <p className="m-0"> Covoiturages/inscription</p>
                                </div>
                            </div>
                            <div className="trend-box">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title text-center">Inscrivez-vous</h4>
                                        <form onSubmit={e => handleSubmit(e)}>
                                            <div className="row">
                                                <div className="form-outline mb-4 col-6">
                                                    <input onChange={handleChange} type="text" id="nom" name='name' className="form-control border" />
                                                    <label className="form-label ml-2" htmlFor="nom">Nom*</label>
                                                </div>
                                                <div className="form-outline mb-4 col-6">
                                                    <input onChange={handleChange} required type="text" id="prenom" name='firstname' className="form-control border" />
                                                    <label className="form-label ml-2" htmlFor="prenom">Prénom*</label>
                                                </div>
                                                <div className="form-outline mb-4 col-6">
                                                    <input onChange={handleChange} type="text" id="phone" name='telephone' className="form-control border" />
                                                    <label className="form-label ml-2" htmlFor="phone">Téléphone*</label>
                                                </div>
                                                <div className="form-outline mb-4 col-6">
                                                    <input onChange={handleChange} type="email" id="form1Example1" name='email' className="form-control border" />
                                                    <label className="form-label ml-2" htmlFor="form1Example1">Email addresse*</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input onChange={handleChange} type="password" id="form1Example2" name='password' className="form-control border" />
                                                    <label className="form-label ml-2" htmlFor="form1Example2">Mot de passe*</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input onChange={handleChange} type="address" id="adresse" name='address' className="form-control border" />
                                                    <label className="form-label ml-2" htmlFor="adresse">Adresse*</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <textarea onChange={handleChange} id="description" name='description' className="form-control border" rows={6}></textarea>
                                                    <label className="form-label ml-2" htmlFor="description">Description</label>
                                                </div>

                                                <div className="row mb-4">
                                                    <div className="col d-flex justify-content-center">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                                            <label className="form-check-label" htmlFor="form1Example3"> Se souvenir </label>
                                                        </div>
                                                    </div>

                                                    <div className="col">
                                                        <a href="#!">Mot de passe oublié?</a>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-block">S'inscrire</button>
                                                </div>
                                                <div className="col">
                                                    <Link to="/register">Se connecter</Link>
                                                </div>
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
