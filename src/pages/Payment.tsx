import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPaid } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import PayService from '../services/pay-service';
import Footer from './Footer';
import HeaderBis from './HeaderBis';

export default function Payment() {
    const [show, setShow] = useState(false);
    const [inputs, setInputs] = useState({amount:100, party_id:"", transaction_id:"bm"});

    const handleClose = () => setShow(false);
    const handleShow = (e:any) => {
        e.preventDefault();
        console.log(inputs);
        PayService.mtn(inputs).then(data => console.log(data));
        setShow(true);
    }
    const handleChange = (event:any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    const handleMtn = (e:any) => {
        e.preventDefault();
        console.log(inputs);
        PayService.mtn(inputs).then(data => console.log(data))
    }
    return (
        <>
            <HeaderBis titre="Authentification" />
            <section className="blog destination-b pb-6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xs-12 mb-4">
                            <div className="list-results d-flex align-items-center justify-content-between">
                                <div className="list-results-sort">
                                    <p className="m-0"> Covoiturages/validation</p>
                                </div>
                            </div>
                            <div className="trend-box">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title text-center">Mode de payment</h4>
                                        <ul className="list-group list-group-light">
                                            <li className="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2">
                                                <Button onClick={handleShow} className='btn btn-warning btn-block'> <img src="../../assets/images/logos/mtn.png" alt="" width={100} /> </Button>
                                            </li>
                                            <li className="list-group-item px-3 border-0 rounded-3 list-group-item-secondary mb-2">
                                                <Button onClick={handleShow} className='btn btn-secondary btn-block'> <img src="../../assets/images/logos/moov.png" alt="" width={100} /> </Button>
                                            </li>
                                            <li className="list-group-item px-3 border-0 rounded-3 list-group-item-secondary mb-2">
                                                <button className='btn btn-primary btn-block'> <img src="../../assets/images/logos/paypal.png" alt="" width={10} /> </button>
                                            </li>

                                        </ul>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Paiement</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <form>
                                                    <div className="form-outline mb-4">
                                                        <input type="text" id="preis" name="amount" className="form-control border text-center"  readOnly={true} value={inputs.amount || ""} onChange={handleChange}/>
                                                        <label className="form-label" htmlFor="preis"></label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="text" id="phone" name="party_id" className="form-control border" value={inputs.party_id || ""} onChange={handleChange}/>
                                                        <label className="form-label" htmlFor="phone">Téléphone*</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="hidden" id="code" name="transaction_id" className="form-control border" value={"bethel-move"} onChange={handleChange} />
                                                        <label className="form-label" htmlFor="code">Code de validation*</label>
                                                    </div> 

                                                </form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Ferner
                                                </Button>
                                                <Button variant="primary" onClick={handleMtn}>
                                                    <FcPaid /> Valider
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <form>
                                                            <div className="form-outline mb-4">
                                                                <input type="email" id="form1Example1" className="form-control border" />
                                                                <label className="form-label" htmlFor="form1Example1">Email addresse*</label>
                                                            </div>

                                                            <div className="form-outline mb-4">
                                                                <input type="password" id="form1Example2" className="form-control border" />
                                                                <label className="form-label" htmlFor="form1Example2">Mot de passe*</label>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
