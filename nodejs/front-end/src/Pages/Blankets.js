function Blankets() {
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

                    <div className="container pager">
                        <ul class="pager">
                            <li><a href="#">Previous</a></li>
                            <li><a href="#">Next</a></li>
                        </ul>
                    </div>

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

export default Blankets;