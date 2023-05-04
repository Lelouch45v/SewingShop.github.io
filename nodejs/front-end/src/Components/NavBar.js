function NavBar() {
    return (
        <>
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
        </>
    );
}

export default NavBar;