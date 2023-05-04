import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';

function NewArrival() {
    return (
            <div>
                <nav className = "navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
                    <div className = "container">
                        <a className = "navbar-brand d-flex justify-content-between align-items-center order-lg-0" href = "index.html">
                            <img src = "images/logo_icon.png" alt = "site icon"/>
                            <span className = "text-uppercase fw-lighter ms-2">Fajardo Tailor</span>
                        </a>

                        <div className = "order-lg-2 nav-btns">
                            <button type = "button" className = "btn position-relative">
                                <i className = "fa fa-shopping-cart"></i>
                                <span className = "position-absolute top-0 start-100 translate-middle badge bg-primary">5</span>
                            </button>
                            <button type = "button" className = "btn position-relative">
                                <i className = "fa fa-heart"></i>
                                <span className = "position-absolute top-0 start-100 translate-middle badge bg-primary">2</span>
                            </button>
                            <button type = "button" className = "btn position-relative">
                                <i className = "fa fa-search"></i>
                            </button>
                            <button onclick="myFunction()">
                                <i className="fa-regular fa-moon"></i>
                            </button>
                        </div>

                        <button className = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                            <span className = "navbar-toggler-icon"></span>
                        </button>

                        <div className = "collapse navbar-collapse order-lg-1" id = "navMenu">
                            <ul className = "navbar-nav mx-auto text-center">
                                <li className = "nav-item px-2 py-2">
                                    <a className = "nav-link text-uppercase text-dark" href = "index.html">home</a>
                                </li>
                                <li className = "nav-item px-2 py-2">
                                    <a className = "nav-link text-uppercase text-dark" href = "index.html#collection">collection</a>
                                </li>
                                <li className = "nav-item px-2 py-2">
                                    <a className = "nav-link text-uppercase text-dark" href = "index.html#special">specials</a>
                                </li>
                                <li className="nav-item px-2 py-2 dropdown">
                                    <li className="nav-item px-2 py-2 dropdown">
                                            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                PRODUCT</a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="BedSheet.html">Bedsheet</a></li>
                                            <li><a className="dropdown-item" href="curtains.html">Curtains</a></li>
                                        </ul>
                                    </li>
                                </li>
                                    <li className = "nav-item px-2 py-2">
                                        <a className = "nav-link text-uppercase text-dark" href = "index.html#about">about us</a>
                                    </li>
                                    <li className = "nav-item px-2 py-2 border-0">
                                        <a className = "nav-link text-uppercase text-dark" href = "index.html#popular">popular</a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                    <section id = "special" className = "py-5">
                        <div className = "container">
                            <div className = "title text-center py-5">
                                <h1 className = "position-relative d-inline-block">New Arrival</h1>
                            </div>

                            <div className = "special-list row g-0">
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                                    <div className = "special-img position-relative overflow-hidden">
                                        <img src = "images/space.jpg" className = "w-100"/>
                                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                            <i className = "fas fa-heart"></i>
                                        </span>
                                    </div>
                                    <div className = "text-center">
                                        <p className = "text-capitalize mt-3 mb-1">Space theme Bedsheet</p>
                                        <span className = "fw-bold d-block">$ 12.50</span>
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                                    <div className = "special-img position-relative overflow-hidden">
                                        <img src = "images/demon1.jpg" className = "w-100"/>
                                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                            <i className = "fas fa-heart"></i>
                                        </span>
                                    </div>
                                    <div className = "text-center">
                                        <p className = "text-capitalize mt-3 mb-1">Nezuko Demon Slayer Full Set</p>
                                        <span className = "fw-bold d-block">$ 20.50</span>
                                        
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                                    <div className = "special-img position-relative overflow-hidden">
                                        <img src = "images/akatsuki.jpg" className = "w-100"/>
                                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                            <i className = "fas fa-heart"></i>
                                        </span>
                                    </div>
                                    <div className = "text-center">
                                        <p className = "text-capitalize mt-3 mb-1">Naruto Akatsuki Edition</p>
                                        <span className = "fw-bold d-block">$ 15.50</span>
                                        
                                    </div>
                                </div>

                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                                    <div className = "special-img position-relative overflow-hidden">
                                        <img src = "images/madara.jpg" className = "w-100"/>
                                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                            <i className = "fas fa-heart"></i>
                                        </span>
                                    </div>
                                    <div className = "text-center">
                                        <p className = "text-capitalize mt-3 mb-1">Madara Uchiha Set</p>
                                        <span className = "fw-bold d-block">$ 12.50</span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                <footer className = "bg-dark py-5">
                    <div className = "container">
                        <div className = "row text-white g-4">
                            <div className = "col-md-6 col-lg-3">
                                <a className = "text-uppercase text-decoration-none brand text-white" href = "index.html">Fajardo Tailor</a>
                                <p className = "text-white text-muted mt-3">This shop runs by Fajardo Family that started during pandemic while our Convenience store addedd some sewing machine and we decide to become Convenience store and sewing shop that always available</p>
                            </div>

                            <div className = "col-md-6 col-lg-3">
                                <h5 className = "fw-light">Links</h5>
                                <ul className = "list-unstyled">
                                    <li className = "my-3">
                                        <a href = "#" className = "text-white text-decoration-none text-muted">
                                            <i className = "fas fa-chevron-right me-1"></i> Home
                                        </a>
                                    </li>
                                    <li className = "my-3">
                                        <a href = "#" className = "text-white text-decoration-none text-muted">
                                            <i className = "fas fa-chevron-right me-1"></i> Collection
                                        </a>
                                    </li>

                                    <li className = "my-3">
                                        <a href = "#" className = "text-white text-decoration-none text-muted">
                                            <i className = "fas fa-chevron-right me-1"></i> About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className = "col-md-6 col-lg-3">
                                <h5 className = "fw-light mb-3">Contact Us</h5>
                                <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                                    <span className = "me-3">
                                        <i className = "fas fa-map-marked-alt"></i>
                                    </span>
                                    <span className = "fw-light">
                                        187 Don.t. herrera, Sta. Quiteria Caloocan City,Philippines
                                    </span>
                                </div>
                                <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                                    <span className = "me-3">
                                        <i className = "fas fa-envelope"></i>
                                    </span>
                                    <span className = "fw-light">
                                        Fajardo_SewingShop@gmail.com
                                    </span>
                                </div>
                                <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                                    <span className = "me-3">
                                        <i className = "fas fa-phone-alt"></i>
                                    </span>
                                    <span className = "fw-light">
                                        +639204340677
                                    </span>
                                </div>
                            </div>

                            <div className = "col-md-6 col-lg-3">
                                <h5 className = "fw-light mb-3">Follow Us</h5>
                                <div>
                                    <ul className = "list-unstyled d-flex">
                                        <li>
                                            <a href = "https://www.facebook.com/profile.php?id=100064281574087" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                                <i className = "fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                                <i className = "fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                                <i className = "fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                                <i className = "fab fa-pinterest"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
    );
}

/*
                    <script>
                            function myFunction() {
                                var element = document.body;
                                element.classList.toggle("dark-mode");
                            }
                    </script>
*/

export default NewArrival;
