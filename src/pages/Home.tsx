import React from 'react';
import Search from '../components/Search';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    //const rides = RideService.getRides();
    return (
        <>
             <section className="banner overflow-hidden">
                <div className="slider">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="slide-inner">
                                <div className="slide-image" style={{backgroundImage:"url(assets/images/slider/image-header.jpg)"}}></div>
                                <div className="swiper-content container">
                                        <h1 className="white bgbleu">Voyagez avec son téléphone</h1>
                                    </div>
                                    <div className=""></div>
                                </div> 
                            </div>

                        </div>
                        
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </section>

            <Search/>

            <section className="featured-us pb-0">
                <div className="container">
                    <div className="featured-us-box pt-9">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 mb-4">
                                <div className="featured-us-item d-sm-flex align-items-center justify-content-between">
                                    <div className="featured-us-icon">
                                        <i className="flaticon-price pink"></i>
                                    </div>
                                    <div className="featured-us-content">
                                        <h4 className="mb-1"><Link to="#">Tarifs avantageux </Link></h4>
                                        <p className="mb-0">With 500+ suppliers and the purchasing power of 300 million members</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">
                                <div className="featured-us-item d-sm-flex align-items-center justify-content-between">
                                    <div className="featured-us-icon">
                                        <i className="flaticon-quality pink"></i>
                                    </div>
                                    <div className="featured-us-content">
                                        <h4 className="mb-1"><Link to="#">Places toujours disponibles</Link></h4>
                                        <p className="mb-0">Fabulous Travel worry free knowing that we're here if you need us, 24 hours a day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">
                                <div className="featured-us-item d-sm-flex align-items-center justify-content-between">
                                    <div className="featured-us-icon">
                                        <i className="flaticon-global pink"></i>
                                    </div>
                                    <div className="featured-us-content">
                                        <h4 className="mb-1"><Link to="#">Couvre l'ensemble du pays</Link></h4>
                                        <p className="mb-0">1,200,000 hotels in more than 200 countries and regions & flights to over 5,000 citites.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section className="about-us pb-0 pt-6">
                <div className="container">
                    <div className="about-image-box">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col-lg-6 col-sm-12 mb-4">
                                <div className="about-content">
                                    <h4 className="mb-1 blue font-weight-normal">A propos de Bethel Move</h4>
                                    <h2>Voyagez à bas prix avec la première application de covoiturage et de transport.</h2>
                                    <p className="mb-3">Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars. <br/><br/>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>

                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-4">
                                <div className="about-image">
                                    <img src="assets/images/destination/apropos.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
       
            <section className="counter-main pt-0 pb-6">
                <div className="container">
                    
                    <div className="section-title text-center mb-5 pb-2 w-50 mx-auto">
                        <h2 className="m-0">En quelques <span>chiffres</span></h2>
                        <p className="mb-0">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
                    </div>
                    
                    <div className="counter text-center">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                                <div className="counter-item bg-pink">
                                    <i className="fa fa-users white mb-1"></i>
                                    <h3 className="value mb-0 white">100</h3>
                                    <h4 className="m-0 white">Utilisateurs satisfaits</h4>
                                </div>    
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                                <div className="counter-item bg-pink">
                                    <i className="fa fa-bus white mb-1"></i>
                                    <h3 className="value mb-0 white">10</h3>
                                    <h4 className="m-0 white">Compagnies partenaires </h4>
                                </div>    
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12mb-4">
                                <div className="counter-item bg-pink">
                                    <i className="fa fa-clock-o white mb-1"></i>
                                    <h3 className="value mb-0 white">24</h3>
                                    <h4 className="m-0 white">Réservation 24H/24</h4>
                                </div>    
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                                <div className="counter-item bg-pink">
                                    <i className="fa fa-compass white mb-1"></i>
                                    <h3 className="value mb-0 white">35</h3>
                                    <h4 className="m-0 white">Destinations différentes</h4>
                                </div>    
                            </div>

                        </div>
                    </div> 
                </div>
            </section>

            <section className="testimonial pb-10 pt-9">
                <div className="container">
                    <div className="section-title text-center mb-5 pb-2 w-50 mx-auto">
                        <h2 className="m-0 white">Qu'est ce que <span>l'on dit de nous ?</span></h2>
                        <p className="mb-0 white">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
                    </div> 
                    <div className="row review-slider1">
                        <div className="col-sm-4">
                            <div className="testimonial-item">
                                <div className="testimonial-content mb-5">
                                    <div className="testimonial-icon">
                                        <i className="fa fa-quote-left"></i>
                                    </div>
                                    <p className="description mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                                <div className="author-title d-flex align-items-center">
                                    <Link to="#"><img src="assets/images/testimonial/img1.jpg" alt=""/></Link>
                                    <div className="author-in ml-3">
                                        <h5 className="m-0 white"> Elison Marks</h5>
                                        <div className="rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="testimonial-item">
                                <div className="testimonial-content mb-5">
                                    <div className="testimonial-icon">
                                        <i className="fa fa-quote-left"></i>
                                    </div>
                                    <p className="description mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    </p>
                                </div>
                                <div className="author-title d-flex align-items-center">
                                    <Link to="#"><img src="assets/images/testimonial/img2.jpg" alt=""/></Link>
                                    <div className="author-in ml-3">
                                        <h5 className="m-0 white">Jared Erondu</h5>
                                        <div className="rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="testimonial-item">
                                <div className="testimonial-content mb-5">
                                    <div className="testimonial-icon">
                                        <i className="fa fa-quote-left"></i>
                                    </div>
                                    <p className="description mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                                <div className="author-title d-flex align-items-center">
                                    <Link to="#"><img src="assets/images/testimonial/img3.jpg" alt=""/></Link>
                                    <div className="author-in ml-3">
                                        <h5 className="m-0 white">Kelson Kelly</h5>
                                        <div className="rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </section>

            <Footer/>
        </>
    )
}

export default Home;
