import React from 'react';
import Footer from './Footer';
 
const Contact = () => {
    return ( 
        <>
            <section className="contact-main pt-0 contact1 bg-grey">
                <div className="map mb-10">
                    <div style={{width: "100%"}}>
                        <iframe height="500" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(mangal%20bazar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
                <div className="container">
                    <div className="contact-info">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="contact-info">
                                    <h3 className="">INFORMATION ABOUT US</h3>
                                    <p className="mb-4">Sagittis posuere id nam quis vestibulum vestibulum a facilisi at elit hendrerit scelerisque sodales nam dis orci.</p>
                                    <div className="info-item d-flex align-items-center bg-white mb-3">
                                        <div className="info-icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <div className="info-content pl-4">
                                            <p className="m-0">445 Mount Eden Road, Mt Eden</p>
                                            <p className="m-0">Basundhara Chakrapath</p>
                                        </div>
                                    </div>
                                    <div className="info-item d-flex align-items-center bg-white mb-3">
                                        <div className="info-icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="info-content pl-4">
                                            <p className="m-0">977-444-666-888</p>
                                            <p className="m-0">977-444-222-000</p>
                                        </div>
                                    </div>
                                    <div className="info-item d-flex align-items-center bg-white mb-3">
                                        <div className="info-icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="info-content pl-4">
                                            <p className="m-0">info@Yatriiworld.com</p>
                                            <p className="m-0">help@Yatriiworld.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div id="contact-form1" className="contact-form">
                                    <h3 className="">Keep in Touch</h3>
                                    <p className="mb-4">Fundpress site thoughtfully designed for real humans which means the best user experience for your entire community.</p>
                                    
                                    <div id="contactform-error-msg"></div>

                                    <form method="post" action="#" name="contactform" id="contactform">
                                        <div className="form-group">
                                            <input type="text" name="first_name" className="form-control" id="fname" placeholder="First Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="last_name" className="form-control" id="lname" placeholder="Last Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email"  className="form-control" id="email" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="phone" className="form-control" id="phnumber" placeholder="Phone"/>
                                        </div>
                                        <div className="textarea">
                                            <textarea name="comments" placeholder="Enter a message"></textarea>
                                        </div>
                                        <div className="comment-btn text-right mt-1">
                                            <input type="submit" className="nir-btn" id="submit" value="Send Message"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
         </>
     );
}
 
export default Contact;