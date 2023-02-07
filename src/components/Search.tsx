import React, { FunctionComponent, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TownService from '../services/towns-service';


const Search: FunctionComponent = (props) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState({
        "fromCity": "",
        // "fromDepartureTime": "08:00:00",
        // "fromTravelDate": "0000-00-00",
        "toCity": "",
        // "toDepartureTime": "22:00:00",
        // "nb":1
    });
    const [towns, setTowns] = useState<any>(null);
    useEffect(() => {
        // async function fetchMyAPI() {
        //     let response = await fetch('https://www.bethel-move.api.jw-solutions.fr/api/v1/towns')
        //     response = await response.json()
        //     console.log(response) 
        // }
        // fetchMyAPI()
        TownService.getTowns().then(data =>setTowns(data.data.data));
    }, [])
    const handleChange = (e: any) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setQuery({ ...query, [name]: value });
    }
    const handleClick = (e: any) => {
        e.preventDefault();
        //console.log(query);
        navigate('/ride',
            {state: query});
    }
    console.log("test")
    return (
        <>

            <div className="form-main">
                <div className="container">
                    <div className="form-content form-content1 w-100 transparent p-0 shadow-none position-relative">
                        {/* <div className="form-navtab text-center">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#Covoiturage"><i className="fa fa-car"></i> Covoiturage</a></li>
                                <li><a data-toggle="tab" href="#Autocar"><i className="fa fa-bus"></i> Autocar</a></li>
                            </ul>
                        </div>     */}

                        <div className="tab-content">
                            {/*  <div id="Covoiturage" className="tab-pane">
                                <form>
                                <div className="row d-flex align-items-center justify-content-between">
                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label>Départ</label>
                                            <div className="input-box">
                                                <i className="flaticon-placeholder"></i>
                                                <select className="niceSelect" name="fromCity" value={query.fromCity} onChange={handleChange}>
                                                    <option value="v_pk">Parakou</option>
                                                    <option value="v_co">Cotonou</option>
                                                    <option value="v_sav">Savè</option>
                                                    <option value="v_ou">Ouidah</option>
                                                    <option value="v_tan">Tanguieta</option>
                                                    <option value="v_ba">Bassila</option>
                                                </select>
                                            </div>                            
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label>Destination</label>
                                            <div className="input-box">
                                                <i className="flaticon-placeholder"></i>
                                                <select className="niceSelect" name="toCity" value={query.toCity} onChange={handleChange}>
                                                    <option value="v_ba">Bassila</option>
                                                    <option value="v_co">Cotonou</option>
                                                    <option value="v_sav">Savè</option>
                                                    <option value="v_ou">Ouidah</option>
                                                    <option value="v_tan">Tanguieta</option>
                                                    <option value="v_pk">Parakou</option>
                                                    <option value="v_ba">Bassila</option>
                                                </select>
                                            </div>                            
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label>Date</label>
                                            <div className="input-box">
                                                <i className="flaticon-calendar"></i>
                                                <input id="date-range1" type="date" name="fromTravelDate" placeholder="yyyy-mm-dd" value={query.fromTravelDate} onChange={handleChange}/>
                                            </div>                            
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label>Passager</label>
                                            <div className="input-box">
                                                <i className="flaticon-add-user"></i>
                                                <select className="niceSelect" name="toTravelDate" value={query.toTravelDate} onChange={handleChange}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>                             
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group mb-0 mt-3">
                                        <button type="button" onClick={handleClick} className="nir-btn w-100"><i className="fa fa-search mr-2"></i>Recherche</button>
                                        </div>
                                    </div>
                                </div>
                                </form>
                            </div> */}
                            <div id="Autocar" className="tab-pane in active">
                                <form>
                                    <div className="row d-flex align-items-center justify-content-between">
                                        <div className="col-lg">
                                            <div className="form-group mb-0">
                                                <label> Départ</label>
                                                <div className="input-box">
                                                    <i className="flaticon-placeholder"></i>
                                                    <select className="niceSelect" name="fromCity" value={query.fromCity} onChange={handleChange}>
                                                        <option value="" hidden aria-required>Choisir ville de départ</option>
                                                        {towns && towns.map((town:any) =>
                                                            <option value={town.code} key={town.id}>{town.long_label}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg">
                                            <div className="form-group mb-0">
                                                <label> Destination</label>
                                                <div className="input-box">
                                                    <i className="flaticon-placeholder"></i>
                                                    <select className="niceSelect" name="toCity" value={query.toCity} onChange={handleChange}>
                                                        <option value="" hidden>Choisir ville de d'arrivée</option>
                                                        {towns && towns.map((town:any) =>
                                                            <option value={town.code} key={town.code}>{town.long_label}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg">
                                            <div className="form-group mb-0">
                                                <label>Date</label>
                                                <div className="input-box">
                                                    <i className="flaticon-calendar"></i>
                                                    <input className="end_date" id="date-range2" type="date" placeholder="yyyy-mm-dd" name="fromTravelDate" value={query.fromTravelDate} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg">
                                            <div className="form-group mb-0">
                                                <label>Passager</label>
                                                <div className="input-box">
                                                    <i className="flaticon-add-user"></i>
                                                    <select className="niceSelect" name="nb" value={query.nb} onChange={handleChange}>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg">
                                            <div className="form-group mb-0 mt-3">
                                                <button type="button" onClick={handleClick} className="nir-btn w-100"><i className="fa fa-search mr-2"></i>Recherche</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



export default Search
