import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Ride from '../models/ride';
import Town from '../models/town';
import { useLocation } from 'react-router-dom';
import RideService from '../services/ride-service';
import Footer from './Footer';
import ScrollableTabsButtonForce from './ScrollableTabsButtonForce';
import Customer from '../models/customer';
import HeaderBis from './HeaderBis';

const Ridecar = (props: any) => {
    const [ridesCars, setRidesCars] = useState<Ride[]>([]);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [towns, setTowns] = useState<Town[]>([]);
    const [loading, setLoading] = useState(false);
    const location:any = useLocation();
    console.log((location.state.nb));

    useLayoutEffect(() => {
        RideService.findByCriteria(location.state).then((res) => { setLoading(true); setRidesCars(res.data.data) });
    }, [loading]);
    const getTownByCode = (cityCode: string) => {
        for (const town of towns) {
            if (town.code === cityCode) {
                return town.longLabel[0].toUpperCase() + town.longLabel.substr(1);
            }
        }
    }
    const getCustomerByCode = (memberCode: string) => {
        for (const customer of customers) {
            if (customer.code === memberCode) {
                return customer;
            }
        }
    }

    //console.log(loading && getCustomerByCode(ridesCars[0].memberCode)?.firstname);
    //console.log(new Date(ridesCars[0].travelStartTime.toString().substring(0, 10)).toLocaleDateString("fr-FR", options));
    console.log(ridesCars)
    return (
        <>
            <HeaderBis title = "Liste des covoiturges" />
            <section className="blog destination-b pb-6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xs-12 mb-4">
                            <div className="list-results d-flex align-items-center justify-content-between">
                                <div className="list-results-sort">
                                    <p className="m-0"><i className="fa fa-car"></i> {ridesCars ? ridesCars.length : 0} résultat(s) en covoiturages</p>
                                </div>
                            </div>
                            <div className="trend-box">
                                <ScrollableTabsButtonForce nb={location.state.nb} getCustomerByCode={getCustomerByCode} ridesCars={ridesCars} loading={loading} getTownByCode={getTownByCode} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trending destination bg-grey pb-6">
                <div className="container">
                    <div className="section-title text-center mb-5 pb-2 w-50 mx-auto">
                        <h2 className="m-0">Nos suggestions <span>de trajets</span></h2>
                        <p className="mb-0">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
                    </div>
                    <div className="trend-box">
                        <div className="row team-slider">
                            <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
                                <div className="trend-item">
                                    <div className="trend-image">
                                        <img src="assets/images/trending/trending1.jpg" alt="image" />
                                        <div className="trend-tags">
                                            <Link to="#"><i className="flaticon-like"></i></Link>
                                        </div>
                                    </div>
                                    <div className="trend-content-main">
                                        <div className="trend-content">
                                            <h6 className="font-weight-normal"><i className="fa fa-map-marker-alt"></i> Thailand</h6>
                                            <h4><Link to="#">Stonehenge, Windsor Castle, and Bath from London</Link></h4>
                                            <div className="rating-main d-flex align-items-center">
                                                <div className="rating">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                </div>
                                                <span className="ml-2">38 Reviews</span>
                                            </div>
                                        </div>
                                        <div className="trend-last-main">
                                            <p className="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div className="trend-last d-flex align-items-center justify-content-between">
                                                <p className="mb-0 white"><i className="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2 night</p>
                                                <div className="trend-price">
                                                    <p className="price white mb-0">From <span>$350.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
                                <div className="trend-item">
                                    <div className="trend-image">
                                        <img src="assets/images/trending/trending2.jpg" alt="image" />
                                        <div className="trend-tags">
                                            <Link to="#"><i className="flaticon-like"></i></Link>
                                        </div>
                                    </div>
                                    <div className="trend-content-main">
                                        <div className="trend-content">
                                            <h6 className="font-weight-normal"><i className="fa fa-map-marker-alt"></i> Germany</h6>
                                            <h4><Link to="#">Bosphorus and Black Sea Cruise from Istanbul</Link></h4>
                                            <div className="rating-main d-flex align-items-center">
                                                <div className="rating">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                </div>
                                                <span className="ml-2">38 Reviews</span>
                                            </div>
                                        </div>
                                        <div className="trend-last-main">
                                            <p className="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div className="trend-last d-flex align-items-center justify-content-between">
                                                <p className="mb-0 white"><i className="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2 night</p>
                                                <div className="trend-price">
                                                    <p className="price white mb-0">From <span>$350.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
                                <div className="trend-item">
                                    <div className="trend-image">
                                        <img src="assets/images/trending/trending3.jpg" alt="image" />
                                        <div className="trend-tags">
                                            <Link to="#"><i className="flaticon-like"></i></Link>
                                        </div>
                                    </div>
                                    <div className="trend-content-main">
                                        <div className="trend-content">
                                            <h6 className="font-weight-normal"><i className="fa fa-map-marker-alt"></i> Denmark</h6>
                                            <h4><Link to="#">NYC One World Observatory Skip-the-Line Ticket</Link></h4>
                                            <div className="rating-main d-flex align-items-center">
                                                <div className="rating">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                </div>
                                                <span className="ml-2">38 Reviews</span>
                                            </div>
                                        </div>
                                        <div className="trend-last-main">
                                            <p className="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div className="trend-last d-flex align-items-center justify-content-between">
                                                <p className="mb-0 white"><i className="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2 night</p>
                                                <div className="trend-price">
                                                    <p className="price white mb-0">From <span>$350.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
                                <div className="trend-item">
                                    <div className="trend-image">
                                        <img src="assets/images/trending/trending4.jpg" alt="image" />
                                        <div className="trend-tags">
                                            <Link to="#"><i className="flaticon-like"></i></Link>
                                        </div>
                                    </div>
                                    <div className="trend-content-main">
                                        <div className="trend-content">
                                            <h6 className="font-weight-normal"><i className="fa fa-map-marker-alt"></i> Japan</h6>
                                            <h4><Link to="#">Stonehenge, Windsor Castle, and Bath from London</Link></h4>
                                            <div className="rating-main d-flex align-items-center">
                                                <div className="rating">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                </div>
                                                <span className="ml-2">38 Reviews</span>
                                            </div>
                                        </div>
                                        <div className="trend-last-main">
                                            <p className="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div className="trend-last d-flex align-items-center justify-content-between">
                                                <p className="mb-0 white"><i className="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2 night</p>
                                                <div className="trend-price">
                                                    <p className="price white mb-0">From <span>$350.00</span></p>
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
            <section className="breadcrumb-main pb-0" style={{ backgroundImage: "url(images/bg/bg8.jpg)" }}>
                <div className="breadcrumb-outer pt-10">
                    <div className="container">
                        <div className="breadcrumb-content d-md-flex align-items-center pt-10">
                            <h2 className="mb-0">Car List</h2>
                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Car List</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>

            <Footer />
        </>
    )
}

export default Ridecar;
