import React from 'react';
import "./Footer.css";


function Footer(props) {
    return (
        <footer class="page-footer font-small stylish-color-dark pt-4 mt-4">


            <div className="container text-center text-md-left">
                <div class="row">

                    {/*Footer - Contact Us*/}

                    <div class="col-md-7">
                        <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Contact Us</h5>
                        <p>Thank you for your interest in Excuse Me Officer.
                           An App designed to hold authority figures accountable using a review
                            based system.
                            Feel free to Contact us with any questions, concerns or
                            suggestions to improve our user experience.</p>
                    </div>


                    {/*Footer - About*/}

                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                        <ul className="list-unstyled">
                            <p>
                                <a id="footerlink" href="#!">PROJECTS</a>
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

                    <hr className="clearfix w-100 d-md-none" />

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



                </div>
            </div>





            <div class="text-center py-3">
                <ul class="list-unstyled list-inline mb-0">
                    <li class="list-inline-item">
                        <h5 class="mb-1">Register for free</h5>
                    </li>
                    <li class="list-inline-item">
                        <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
                    </li>
                </ul>
            </div>

            <br />


            <div class="text-center">
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



            <div class="py-3 text-center">© 2018 Copyright:
        <a href=""> ExcuseMeOfficer</a>
            </div>


        </footer>
  )
}

export default Footer;