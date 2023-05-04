import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';

function Home() {
    
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
                                <a className = "nav-link text-uppercase text-dark" href = "#header">home</a>
                            </li>
                            <li className = "nav-item px-2 py-2">
                                <a className = "nav-link text-uppercase text-dark" href = "#collection">collection</a>
                            </li>
                            <li className = "nav-item px-2 py-2">
                                <a className = "nav-link text-uppercase text-dark" href = "#special">specials</a>
                            </li>
                            <li className="nav-item px-2 py-2 dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUCT</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="bedsheet.html">Bedsheet</a></li>
                        <li><a className="dropdown-item" href="curtains.html">Curtains</a></li>
                        </ul>
                    </li>
                            <li className = "nav-item px-2 py-2">
                                <a className = "nav-link text-uppercase text-dark" href = "#about">about us</a>
                            </li>
                            <li className = "nav-item px-2 py-2 border-0">
                                <a className = "nav-link text-uppercase text-dark" href = "#popular">popular</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header id = "header" className = "vh-100 carousel slide" data-bs-ride = "carousel" style = "padding-top: 104px;">
                <div className = "container h-100 d-flex align-items-center carousel-inner">
                    <div className = "text-center carousel-item active">
                        <h2 className = "text-capitalize text-white">best collection</h2>
                        <h1 className = "text-uppercase py-2 fw-bold text-white">new arrivals</h1>
                        <a href = "#" className = "btn mt-3 text-uppercase">shop now</a>
                    </div>
                    <div className = "text-center carousel-item">
                        <h2 className = "text-capitalize text-white">best price & offer</h2>
                        <h1 className = "text-uppercase py-2 fw-bold text-white">new season</h1>
                        <a href = "#" className = "btn mt-3 text-uppercase">buy now</a>
                    </div>
                </div>

                <button className = "carousel-control-prev" type = "button" data-bs-target="#header" data-bs-slide = "prev">
                    <span className = "carousel-control-prev-icon"></span>
                </button>
                <button className = "carousel-control-next" type = "button" data-bs-target="#header" data-bs-slide = "next">
                    <span className = "carousel-control-next-icon"></span>
                </button>
            </header>

            <Section id = "collection" className = "py-5">
                <div className = "container">
                    <div className = "title text-center">
                        <h2 className = "position-relative d-inline-block">New Collection</h2>
                    </div>

                    <div className = "row g-0">
                        <div className = "d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                            <a href="all_Products.html" className="btn m-2 text-dark active-filter-btn" role="button">All</a>
                            <a href="bestsellers.html" className="btn m-2 text-dark " role="button">Best Sellers</a>
                            <a href="new_arrival.html" className="btn m-2 text-dark " role="button">New Arrival</a>


                        </div>

                        <div className = "collection-list mt-4 row gx-0 gy-3">
                            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                <div className = "collection-img position-relative">
                                    <img src = "images/Grey_Canadian.jpg" className = "w-100"/>
                                    <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                </div>
                                <div className = "text-center">
                                    <div className = "rating mt-3">
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                    </div>
                                    <p className = "text-capitalize my-1">Grey Canadian</p>
                                    <span className = "fw-bold">$ 5.00</span>
                                </div>
                            </div>

                            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                <div className = "collection-img position-relative">
                                    <img src = "images/Onepiece1.jpg" className = "w-100"/>
                                    <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                </div>
                                <div className = "text-center">
                                    <div className = "rating mt-3">
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                    </div>
                                    <p className = "text-capitalize my-1">One Piece Full Set</p>
                                    <span className = "fw-bold">$ 20.00</span>
                                </div>
                            </div>

                            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                                <div className = "collection-img position-relative">
                                    <img src = "images/naruto.jpg" className = "w-100"/>
                                    <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                </div>
                                <div className = "text-center">
                                    <div className = "rating mt-3">
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                    </div>
                                    <p className = "text-capitalize my-1">Naruto BedSheet Only</p>
                                    <span className = "fw-bold">$ 15.50</span>
                                </div>
                            </div>

                            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                <div className = "collection-img position-relative">
                                    <img src = "images//solo-leveling.jpg" className = "w-100"/>
                                    <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                </div>
                                <div className = "text-center">
                                    <div className = "rating mt-3">
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                    </div>
                                    <p className = "text-capitalize my-1">solo-leveling Full Set</p>
                                    <span className = "fw-bold">$15.00 </span>
                                </div>
                            </div>

                            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                <div className = "collection-img position-relative">
                                    <img src = "images/samurai1.jpg" className = "w-100"/>
                                    <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                </div>
                                <div className = "text-center">
                                    <div className = "rating mt-3">
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                    </div>
                                    <p className = "text-capitalize my-1">Samurai Bedsheet And Pillow Case</p>
                                    <span className = "fw-bold">$ 10.50</span>
                                </div>
                            </div>

                            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                                <div className = "collection-img position-relative">
                                    <img src = "images/evelyn.jpg" className = "w-100"/>
                                    <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                </div>
                                <div className = "text-center">
                                    <div className = "rating mt-3">
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                    </div>
                                    <p className = "text-capitalize my-1">Evelyn Bedsheet</p>
                                    <span className = "fw-bold">$ 12.50</span>
                                </div>
                            </div>

                            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                <div className = "collection-img position-relative">
                                    <img src = "images/demonslayer.jpg" className = "w-100"/>
                                    <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                </div>
                                <div className = "text-center">
                                    <div className = "rating mt-3">
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                    </div>
                                    <p className = "text-capitalize my-1">Demon Slayer Full Set</p>
                                    <span className = "fw-bold">$ 25.50</span>
                                </div>
                            </div>

                            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                <div className = "collection-img position-relative">
                                    <img src = "images/buko1.jpeg" className = "w-100"/>
                                    <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                </div>
                                <div className = "text-center">
                                    <div className = "rating mt-3">
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                    </div>
                                    <p className = "text-capitalize my-1">Buko No Hero Academia Full Set</p>
                                    <span className = "fw-bold">$ 25.50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id = "special" className = "py-5">
                <div className = "container">
                    <div className = "title text-center py-5">
                        <h2 className = "position-relative d-inline-block">Special Section</h2>
                    </div>

                    <div className = "special-list row g-0">
                        <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                            <div className = "special-img position-relative overflow-hidden">
                                <img src = "images/zoro1.jpeg" className = "w-100"/>
                                <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                    <i className = "fas fa-heart"></i>
                                </span>
                            </div>
                            <div className = "text-center">
                                <p className = "text-capitalize mt-3 mb-1">Zoro Onepiece Limited Edition</p>
                                <span className = "fw-bold d-block">$ 30.50</span>
                                <a href = "#" className = "btn btn-primary mt-3">Add to Cart</a>
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
                                <a href = "#" className = "btn btn-primary mt-3">Add to Cart</a>
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
                                <a href = "#" className = "btn btn-primary mt-3">Add to Cart</a>
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
                                <a href = "#" className = "btn btn-primary mt-3">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id = "about" className = "py-5">
                <div className = "container">
                    <div className = "row gy-lg-5 align-items-center">
                        <div className = "col-lg-6 order-lg-1 text-center text-lg-start">
                            <div className = "title pt-3 pb-5">
                                <h2 className = "position-relative d-inline-block ms-4">About Us</h2>
                            </div>
                            <p className = "lead text-muted">We are a new sewing shop.</p>
                            <p>This shop runs by Fajardo Family that started during pandemic while our Sari Sari store addedd some sewing machine and we decide to become sari sari store and sewing shop that always available.</p>
                        </div>
                        <div className = "col-lg-6 order-lg-0">
                            <img src = "images/sew2.jpeg" alt = "" className = "img-fluid"/>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id = "popular" className = "py-5">
                <div className = "container">
                    <div className = "title text-center pt-3 pb-5">
                        <h2 className = "position-relative d-inline-block ms-4">Popular For This Year</h2>
                    </div>

                    <div className = "row">
                        <div className = "col-md-6 col-lg-4 row g-3">
                            <h3 className = "fs-5">Top Rated</h3>
                                <div className = "d-flex align-items-start justify-content-start"/>
                                        <img src = "images/zoro1.jpeg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Zoro Limited Edition</p>
                                            <span>$ 15.00</span>
                                    </div>
                                </div>

                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/akatsuki.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Naruto Akatsuki Edition</p>
                                            <span>$ 15.50</span>
                                    </div>
                                </div>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/zenitzu.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Zenitsu</p>
                                            <span>$ 10.00</span>
                                    </div>
                                </div>
                        </div>

                        <div className = "col-md-6 col-lg-4 row g-3">
                            <h3 className = "fs-5">Best Selling</h3>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/solo-leveling.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Solo Leveling Full Set</p>
                                            <span>$ 15.00</span>
                                    </div>
                                </div>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/Onepiece1.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">One Piece Full Set</p>
                                            <span>$ 20.00</span>
                                    </div>
                                </div>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/demon1.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Nezuko Demon Slayer</p>
                                            <span>$ 20.50</span>
                                    </div>
                                </div>
                        </div>

                        <div className = "col-md-6 col-lg-4 row g-3">
                            <h3 className = "fs-5">On Sale</h3>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/madara.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Madara</p>
                                            <span>$ 10.00</span>
                                    </div>
                                </div>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/bluegirl1.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Blue Anime Girl</p>
                                            <span>$ 5.00</span>
                                    </div>
                                </div>
                                <div className = "d-flex align-items-start justify-content-start">
                                    <img src = "images/space.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                                    <div>
                                        <p className = "mb-0">Space</p>
                                            <span>$ 8.00</span>
                                    </div>
                                </div>
                        </div>
                </div>
            </Section>

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
    <button className="open-button" onclick="openForm()">Chat</button>

                        <div className="chat-popup" id="myForm">
                            <form action="" className="form-container">
                                <h1>Chat</h1>

                                <label for="msg"><b>Message</b></label>
                                <textarea placeholder="Type message.." name="msg" required></textarea>

                                <button type="submit" className="btn">Send</button>
                                <button type="button" className="btn cancel" onclick="closeForm()">Close</button>
                            </form>
                        </div>

                    <script>
                        function openForm() {
                        document.getElementById("myForm").style.display = "block";
                        }

                        function closeForm() {
                        document.getElementById("myForm").style.display = "none";
                        }


                        function myFunction() {
                        var element = document.body;
                        element.classList.toggle("dark-mode");
                        }
                    </script>
*/

export default Home;