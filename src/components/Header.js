import {useAuth} from "../auth/AuthProvider";

const Header = () => {

    const {user} = useAuth();
    
    return (
        <header id="header" className="header fixed-top bg-blue-50 shadow-sm d-flex align-items-center">
            <div className="d-lg-none ms-1">
                <button className="btn btn-primary bg-blue-200 text-dark rounded-1 fs-5 ms-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar" id="sidebar-toggler">
                    <span className="visually-hidden">Toggle sidebar</span>
                    <i className="fa fa-list"></i>
                </button>
            </div>
            {/* <div className="d-flex d-none align-items-center justify-content-between">
                <a className="nav-link logo d-flex align-items-center" href="/">
                    <img id="img-logo" src="/img/logo.png" alt="A logo for the password manager app" />
                    <span className="d-none d-lg-block fs-6">Password Manager</span>
                </a>
                <i className="bi bi-list toggle-sidebar-btn"></i>
            </div> */}

            <nav className="header-nav ms-auto">
                <ul className="nav d-flex align-items-center">

                    <li className="nav-item dropdown pe-3">
                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown" id="dropdownMenuProfile">
                            <img id="img-avatar" src="/img/avatar.png" alt="Avatar" />
                            <span className="d-none d-md-block dropdown-toggle text-dark ps-2">
                                {user ? user.username : 'username'}
                            </span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile bg-blue-200" aria-labelledby="dropdownMenuProfile">
                            <li className="dropdown-header text-dark">
                                <h6>username</h6>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="">
                                    <i className="fa fa-gear"></i>
                                    <span className="ms-1">Account Settings</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="">
                                    <i className="fa fa-question-circle"></i>
                                    <span className="ms-1">Need Help?</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center">
                                    <i className="fa fa-right-from-bracket"></i>
                                    <span className="ms-1">Sign Out</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>

        </header>
    );
}

export default Header;