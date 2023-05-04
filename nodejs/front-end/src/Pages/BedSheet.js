function BedSheet() {
    return (
        <div>

            <nav classNameName = "navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
                <div classNameName = "container">
                    <a classNameName = "navbar-brand d-flex justify-content-between align-items-center order-lg-0" href = "index.html">
                        <img src = "images/logo_icon.png" alt = "site icon"/>
                        <span classNameName = "text-uppercase fw-lighter ms-2">Fajardo Tailor</span>
                    </a>

                    <div classNameName = "order-lg-2 nav-btns">
                        <button type = "button" classNameName = "btn position-relative">
                            <i classNameName = "fa fa-shopping-cart"></i>
                            <span classNameName = "position-absolute top-0 start-100 translate-middle badge bg-primary">5</span>
                        </button>
                        <button type = "button" classNameName = "btn position-relative">
                            <i classNameName = "fa fa-heart"></i>
                            <span classNameName = "position-absolute top-0 start-100 translate-middle badge bg-primary">2</span>
                        </button>
                        <button type = "button" classNameName = "btn position-relative">
                            <i classNameName = "fa fa-search"></i>
                        </button>
                        <button onclick="myFunction()">
                            <i classNameName="fa-regular fa-moon"></i>
                        </button>
                        
                    </div> 
                        <button classNameName = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                            <span classNameName = "navbar-toggler-icon"></span>
                        </button>

                    <div classNameName = "collapse navbar-collapse order-lg-1" id = "navMenu">
                        <ul classNameName = "navbar-nav mx-auto text-center">
                            <li classNameName = "nav-item px-2 py-2">
                                <a classNameName = "nav-link text-uppercase text-dark" href = "#header">home</a>
                            </li>
                            <li classNameName = "nav-item px-2 py-2">
                                <a classNameName = "nav-link text-uppercase text-dark" href = "#collection">collection</a>
                            </li>
                            <li classNameName = "nav-item px-2 py-2">
                                <a classNameName = "nav-link text-uppercase text-dark" href = "#special">specials</a>
                            </li>
                            <li classNameName="nav-item px-2 py-2 dropdown">
                                <a classNameName="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUCT</a>
                        <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a classNameName="dropdown-item" href="bedsheet.html">Bedsheet</a></li>
                        <li><a classNameName="dropdown-item" href="curtains.html">Curtains</a></li>
                        </ul>
                    </li>
                            <li classNameName = "nav-item px-2 py-2">
                                <a classNameName = "nav-link text-uppercase text-dark" href = "#about">about us</a>
                            </li>
                            <li classNameName = "nav-item px-2 py-2 border-0">
                                <a classNameName = "nav-link text-uppercase text-dark" href = "#popular">popular</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    
                <Section id = "new-collection" className = "py-5">
                    <div className = "container">
                        <div className = "title text-center">
                            <h2 className = "position-relative d-inline-block">Most Popular</h2>
                        </div>
            
                        <div className = "row g-0">
                            <div className = "d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                                <a href="#" className="btn m-2 text-dark active-filter-btn" role="button">All</a>
                                <a href="bestsellers.html" className="btn m-2 text-dark " role="button">Best Sellers</a>
                                <a href="new_arrival.html" className="btn m-2 text-dark " role="button">New Arrival</a>
                            </div>
            
                            <div className = "collection-list mt-4 row gx-0 gy-3">
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/5in1d.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Black Out Canadian 5in1 set red and white combination</p>
                                            <span className = "fw-bold">$ 23.00</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/5in1e.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Black Out Canadian 5in1 set</p>
                                            <span className = "fw-bold">$ 30.00</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/demon1.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Nezuko Demon Slayer Full set </p>
                                            <span className = "fw-bold">$ 20.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images//zenitzu.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Zenitsu Full Set</p>
                                            <span className = "fw-bold">$10.00 </span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/zoro1.jpeg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Zoro Limited Edition</p>
                                            <span className = "fw-bold">$ 30.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/rune1.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">LEAGUE OF LEGENDS RUNETERA </p>
                                            <span className = "fw-bold">$ 22.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/whitefeather.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">White Feather Design</p>
                                            <span className = "fw-bold">$ 12.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/space.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Space Design Full Set</p>
                                            <span className = "fw-bold">$ 11.00</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Section>
    
                <Section id = "simple-style-collection" className = "py-5">
                    <div className = "container">
                        <div className = "title text-center">
                            <h2 className = "position-relative d-inline-block">Simple Style</h2>
                        </div>
            
                            <div className = "collection-list mt-4 row gx-0 gy-3">
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/simple1.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1"> triangle Grey Canadian</p>
                                            <span className = "fw-bold">$ 5.00</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/simple2.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">White Bird Design</p>
                                            <span className = "fw-bold">$ 10.00</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/simple3.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Grey and white stripes</p>
                                            <span className = "fw-bold">$ 15.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images//simple4.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">All blue Design</p>
                                            <span className = "fw-bold">$15.00 </span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/simple5.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Pink Fan Design</p>
                                            <span className = "fw-bold">$ 10.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/simple6.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">pure grey color</p>
                                            <span className = "fw-bold">$ 12.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/simple8.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Peach And white Design</p>
                                            <span className = "fw-bold">$ 12.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/blue-white1.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">blue and white flower design 2t</p>
                                            <span className = "fw-bold">$ 25.50</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Section>
    
                <Section id = "anime-collection" className = "py-5">
                    <div className = "container">
                        <div className = "title text-center">
                            <h2 className = "position-relative d-inline-block">Game Designs</h2>
                        </div>
            
                            <div className = "collection-list mt-4 row gx-0 gy-3">
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/games1.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">God of War</p>
                                            <span className = "fw-bold">$ 10.00</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/games2.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">xiao Genshin impact</p>
                                            <span className = "fw-bold">$ 20.00</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/games3.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Resident Evil Logo Bedsheet</p>
                                            <span className = "fw-bold">$ 15.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images//games4.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Soraka League of Legends</p>
                                            <span className = "fw-bold">$10.00 </span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/games5.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Lucian League of legends  Design bedsheet</p>
                                            <span className = "fw-bold">$ 10.99</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/games6.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Green Bedsheet Design</p>
                                            <span className = "fw-bold">$ 12.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
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
                                        <p className = "text-capitalize my-1">Evelyn League of legends</p>
                                            <span className = "fw-bold">$ 25.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/games7.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Call of duty Design</p>
                                            <span className = "fw-bold">$ 11.50</span>
                                    </div>
                                </div>
                            </div>

                    </div>
                </Section>
    
                <Section id = "games-collection" className = "py-5">
                    <div className = "container">
                        <div className = "title text-center">
                            <h2 className = "position-relative d-inline-block">Anime</h2>
                        </div>
            
                            <div className = "collection-list mt-4 row gx-0 gy-3">
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
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
                                        <p className = "text-capitalize my-1">Buko no Hero Academia</p>
                                            <span className = "fw-bold">$ 5.00</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/madara.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Madara Bedsheet</p>
                                            <span className = "fw-bold">$ 20.00</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/zoro1.jpeg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Zoro Limited Edition</p>
                                            <span className = "fw-bold">$ 15.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className = "collection-img position-relative">
                                        <img src = "images//naruto.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Naruto Sage Mode design</p>
                                            <span className = "fw-bold">$15.00 </span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className = "collection-img position-relative">
                                        <img src = "images/sasuke.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Naruto and Sasuke Design</p>
                                            <span className = "fw-bold">$ 10.50</span>
                                    </div>
                                </div>
            
                                <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
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
                                        <p className = "text-capitalize my-1">One Piece Bedsheet</p>
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
                                        <img src = "images/demon1.jpg" className = "w-100"/>
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
                                        <p className = "text-capitalize my-1">Nezuko Bedsheet</p>
                                            <span className = "fw-bold">$ 25.50</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Section>
    
            <footer classNameName = "bg-dark py-5">
                <div classNameName = "container">
                    <div classNameName = "row text-white g-4">
                        <div classNameName = "col-md-6 col-lg-3">
                            <a classNameName = "text-uppercase text-decoration-none brand text-white" href = "index.html">Fajardo Tailor</a>
                            <p classNameName = "text-white text-muted mt-3">This shop runs by Fajardo Family that started during pandemic while our Convenience store addedd some sewing machine and we decide to become Convenience store and sewing shop that always available</p>
                        </div>

                        <div classNameName = "col-md-6 col-lg-3">
                            <h5 classNameName = "fw-light">Links</h5>
                            <ul classNameName = "list-unstyled">
                                <li classNameName = "my-3">
                                    <a href = "#" classNameName = "text-white text-decoration-none text-muted">
                                        <i classNameName = "fas fa-chevron-right me-1"></i> Home
                                    </a>
                                </li>
                                <li classNameName = "my-3">
                                    <a href = "#" classNameName = "text-white text-decoration-none text-muted">
                                        <i classNameName = "fas fa-chevron-right me-1"></i> Collection
                                    </a>
                                </li>
                                
                                
                                <li classNameName = "my-3">
                                    <a href = "#" classNameName = "text-white text-decoration-none text-muted">
                                        <i classNameName = "fas fa-chevron-right me-1"></i> About Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div classNameName = "col-md-6 col-lg-3">
                            <h5 classNameName = "fw-light mb-3">Contact Us</h5>
                            <div classNameName = "d-flex justify-content-start align-items-start my-2 text-muted">
                                <span classNameName = "me-3">
                                    <i classNameName = "fas fa-map-marked-alt"></i>
                                </span>
                                <span classNameName = "fw-light">
                                    187 Don.t. herrera, Sta. Quiteria Caloocan City,Philippines
                                </span>
                            </div>
                            <div classNameName = "d-flex justify-content-start align-items-start my-2 text-muted">
                                <span classNameName = "me-3">
                                    <i classNameName = "fas fa-envelope"></i>
                                </span>
                                <span classNameName = "fw-light">
                                    Fajardo_SewingShop@gmail.com
                                </span>
                            </div>
                            <div classNameName = "d-flex justify-content-start align-items-start my-2 text-muted">
                                <span classNameName = "me-3">
                                    <i classNameName = "fas fa-phone-alt"></i>
                                </span>
                                <span classNameName = "fw-light">
                                    +639204340677
                                </span>
                            </div>
                        </div>

                        <div classNameName = "col-md-6 col-lg-3">
                            <h5 classNameName = "fw-light mb-3">Follow Us</h5>
                            <div>
                                <ul classNameName = "list-unstyled d-flex">
                                    <li>
                                        <a href = "https://www.facebook.com/profile.php?id=100064281574087" classNameName = "text-white text-decoration-none text-muted fs-4 me-4">
                                            <i classNameName = "fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href = "#" classNameName = "text-white text-decoration-none text-muted fs-4 me-4">
                                            <i classNameName = "fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href = "#" classNameName = "text-white text-decoration-none text-muted fs-4 me-4">
                                            <i classNameName = "fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href = "#" classNameName = "text-white text-decoration-none text-muted fs-4 me-4">
                                            <i classNameName = "fab fa-pinterest"></i>
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
            var element = document.div;
            element.classNameList.toggle("dark-mode");
    }
    
    </script> 
*/

export default BedSheet;