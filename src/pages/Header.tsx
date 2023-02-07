import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Routes,
  } from "react-router-dom";
import Bus from './Bus';
import Car from './Car';
import Contact from './Contact';
import Home from './Home';
import Ridecar from './RideCar';
import Login from './accounts/Login';
import NotFound from './NotFound';
import Register from './accounts/Register';
import Payment from './Payment';
import PrivatedRoute from '../components/privated-route';
import AuthService from '../services/auth-service';
 
const Header = () => {
    const [profile, setProfile] = useState(null);
    const isCheck = AuthService.checkToken();
    const handleProfile = () => {
        AuthService.profile2().then(user => console.log(user))
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        AuthService.logout().then(res => console.log(res));
        window.location.reload();
    }
    return ( 
        <Router>   
            <div id="preloader">
                <div id="status"></div>
            </div>
            <header className="main_header_area headerstye-1"  >
                
                <div className="header_menu" id="header_menu" style={{backgroundColor: "#2aabe4"}}>
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-2 pt-2">
                                
                                <div className="navbar-header">
                                    <NavLink className="active navbar-brand" to="/">
                                        <img src="assets/images/logo-white.png" alt="logo-b"/>
                                        <img src="assets/images/logo.png" alt="logo"/>
                                    </NavLink>
                                </div>
                                <div className="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav" id="responsive-menu">
                                        <li><NavLink exact="true" className="active" to="/" ><i className="fa fa-home fa-3x" ></i> Accueil</NavLink></li>							
                                        <li><NavLink className="active"  to="/covoiturage">Covoiturage</NavLink></li>							
                                        <li><NavLink className="active" to="/car">Car</NavLink></li>							                
                                        <li><NavLink className="active" to="/contact">Contact</NavLink></li>
                                        
                                        <li className="submenu dropdown">
                                            <NavLink to="#" className="active dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Language <i className="fa fa-angle-down" aria-hidden="true"></i></NavLink> 
                                            <ul className="dropdown-menu">
                                                <li><NavLink className="active" to="#">FR</NavLink></li>
                                                <li><NavLink className="active" to="#">EN</NavLink></li>
                                            </ul>
                                        </li>								
                                    </ul>

                                </div> 

                                <div className="register-login">
                                    <NavLink  to="/register" className="active mr-2" data-toggle="modal" data-target="#register"><i className="icon-user mr-1"></i> Inscription</NavLink>
                                    {!isCheck 
                                    ? <NavLink className="active" to="/login" data-toggle="modal" data-target="#login"><i className="icon-login mr-1"></i> Connexion </NavLink>
                                    : <NavLink className="active" to="#logout" onClick={handleLogout}><i className="icon-logout mr-1"></i> Déconnexion </NavLink>
                                    }{isCheck && <NavLink className="active" to="#" onClick={handleProfile} data-toggle="modal" data-target="#login"><i className="icon-user mr-1"></i> Profile</NavLink>}
                                </div>

                                <div id="slicknav-mobile"></div>
                            </div>
                        </div>
                    </nav>
                </div>
                <Routes>
                    <Route index path="/" element={<Home/>} />
                    <Route path="/car" element={<Car/>}/>
                    <Route path="/bus" element={<Bus/>}/>
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/ride" element={<Ridecar/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/pay" element={<PrivatedRoute><Payment/></PrivatedRoute>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </header>
            
        </Router>
     );
}
 
export default Header;