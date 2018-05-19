import React from 'react';
import "./Footer.css";


function Footer(props) {
    return (
        <footer className="page-footer font-small stylish-color-dark pt-4 mt-4">


            <div className="container text-center text-md-left">
                <div className="row">

                    {/*Footer - Contact Us*/}

                    <div className="col-md-7">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">About Us</h5>
                        <p>Excuse Me Officer is a revolutionary platform that provides the needed transparency between police officers and the public.</p>
                    </div>


                    {/*Footer - About*/}

                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Links</h5>
                        <ul className="list-unstyled">
                            <p>
                                <a id="footerlink" href="#!">BLOG</a>
                            </p>
                            <p>
                                <a href="/about">CAREERS</a>
                            </p>
                            <p>
                                <a href="#!">ABOUT US</a>
                            </p>
                            <p>
                                <a href="#!">PRIVACY</a>
                            </p>
                        </ul>
                    </div>

                    {/*Footer - Address*/}

                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-4 col-lg-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>

                        <p>
                            <i className="fa fa-home mr-3 fa-lg"></i> Chicago, IL 60626, US</p>
                        <p>
                            <i className="fa fa-envelope mr-3 fa-lg"></i> info@excusemeofficer.com</p>
                        <p>
                            <i className="fa fa-phone mr-3 fa-lg"></i>  (312) 555-1234</p>
                        <p>
                            <i className="fa fa-print mr-3 fa-lg"></i>  (312) 555-1234</p>
                    </div>



                </div>
            </div>





            <div className="text-center py-3">
                <ul className="list-unstyled list-inline mb-0">
                    <li className="list-inline-item">
                        <h5 className="mb-1"></h5>
                    </li>
                    <li className="list-inline-item">
                        <a href="/form" className="btn btn-success btn-rounded">Leave Officer Feedback</a>
                    </li>
                </ul>
            </div>

            <br />


            <div className="text-center">
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-fb">
                            <i className="fab fa-facebook"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-tw mx-1">
                            <i className="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-gplus mx-1">
                            <i className="fab fa-google-plus"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-li mx-1">
                            <i className="fab fa-linkedin"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-dribbble mx-1">
                            <i className="fab fa-dribbble"> </i>
                        </a>
                    </li>
                </ul>
            </div>



            <div className="py-3 text-center">© 2018 Copyright
        <a href="/"> Excuse Me Officer</a>
            </div>


        </footer>
  )
}

export default Footer;