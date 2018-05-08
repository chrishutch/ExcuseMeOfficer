import React from 'react';
import "./Footer.css";


function Footer(props) {
    return (
    <footer id="page-footer" className="page-footer">

    <div className="container text-center text-md-left">
                <div className="row my-4">

           {/*Footer - Content*/}

           <div className="col-md-4 col-lg-5 footercontent">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Contact Us</h5>
                        <p>Thank you for your interest in Excuse Me Officer.
                           An App designed to hold authority figures accountable using a review
                            based system.
                            Feel free to Contact us with any questions, concerns or
                            suggestions to improve our user experience. </p>
                            
                            <p>Help us create
                            a more safer and fair enviornment for everyone!</p>
                       
                    </div>
                
            {/*Footer - About*/}

            <hr className="clearfix w-100 d-md-none"/>
     
            <div className="col-md-4 col-lg-2 ml-auto">
                            <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                            <ul className="list-unstyled">
                                <p>
                                <a id= "footerlink" href="#!">PROJECTS</a>
                                </p>
                                <p>
                                    <a href="#!">ABOUT US</a>
                                </p>
                                <p>
                                    <a href="#!">BLOG</a>
                                </p>
                                <p>
                                    <a href="#!">AWARDS</a>
                                </p>
                            </ul>
                        </div>

            {/*Footer - Address*/}

<hr className="clearfix w-100 d-md-none"/>
       
<div className="col-md-4 col-lg-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                             
                    <p>
                        <i className="fa fa-home mr-3 fa-lg"></i> Chicago, IL 60626, US</p>
                    <p>
                            <i className="fa fa-envelope mr-3 fa-lg"></i> excusemeofficer.com</p>
                    <p>
                            <i className="fa fa-phone mr-3 fa-lg"></i> + (773) 555-1234</p>
                    <p>
                            <i className="fa fa-print mr-3 fa-lg"></i> + (773) 555-1234</p>
                </div>

            {/*Footer - Follow Us*/}

<hr className="clearfix w-100 d-md-none"/>
                                
<div className="col-md-2 col-lg-2 text-center">
                    <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
                         
<div className="mt-2">
                                   
    <a type="button" className="btn-floating btn btn-fb">
                                <i className="fab fa-facebook fa-lg"></i>
                        </a>
                                    
    <a type="button" className="btn-floating btn btn-tw">
                                <i className="fab fa-twitter fa-lg"></i>
                        </a>
                                    
    <a type="button" className="btn-floating btn btn-gplus">
                                <i className="fab fa-google-plus fa-lg"></i>
                        </a>

    <a type="button" className="btn-floating btn btn-dribbble">
                                <i className="fab fa-dribbble fa-lg"></i>
                        </a>
                    </div>
                </div>
          </div>
    </div>

    {/*Copyright-Footer*/}
              
    <div className="footer-copyright py-3 text-center">
                <div className="footer-copyright-text">© 2018 Copyright: ExcuseMeOfficer    </div>
            </div>

   </footer>
  )
}

export default Footer;