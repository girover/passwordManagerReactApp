import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const location = useLocation();

    const handleOnLinkClicked = (pageName) => {
        setActiveLink(pageName);
    }

    useEffect(() => {

        if (location.pathname === '/') {
            setActiveLink('home');
        } else {
            setActiveLink(location.pathname.substring(1)); // remove the first character '/'        
        }

    }, []);


    return (
        <aside className="offcanvas offcanvas-start bg-blue-100" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
            <div className="offcanvas-header" id="offcanvas-sidebar-header">
                <img id="img-logo" src="img/logo.png" alt="" />
                <span className="fs-6">Password Manager</span>
                <button type="button" className="btn-close text-dark d-lg-none border border-1 border-secondary-subtle" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column">
                <ul className="navbar-nav justify-content-start flex-grow-1">
                    <li className={`nav-item position-relative mb-2 p-2 rounded-2 ${activeLink == 'home' ? 'active' : 'bg-blue-300'}`}>
                        <Link className="nav-link d-flex justify-content-between align-items-center" to="/home" aria-current="page" onClick={() => handleOnLinkClicked('home')}>
                            <i className="fa fa-home"></i> <span>Home</span>
                        </Link>
                    </li>
                    <li className={`nav-item position-relative mb-2 p-2 rounded-2 ${activeLink == 'passwords' ? 'active' : 'bg-blue-300'}`}>
                        <Link className="nav-link d-flex justify-content-between align-items-center" to="/passwords" aria-current="page" onClick={() => handleOnLinkClicked('passwords')}>
                            <i className="fa fa-key"></i> <span>Passwords</span>
                        </Link>
                    </li>
                    <li className={`nav-item position-relative mb-2 p-2 rounded-2 ${activeLink == 'categories' ? 'active' : 'bg-blue-300'}`}>
                        <Link className="nav-link d-flex justify-content-between align-items-center" to="/categories" aria-current="page" onClick={() => handleOnLinkClicked('categories')}>
                            <i className="fa fa-icons"></i> <span>Categories</span>
                        </Link>
                    </li>
                    <li className={`nav-item position-relative mb-2 p-2 rounded-2 ${activeLink == 'account' ? 'active' : 'bg-blue-300'}`}>
                        <Link className="nav-link d-flex justify-content-between align-items-center" to="/account" aria-current="page" onClick={() => handleOnLinkClicked('account')}>
                            <i className="fa fa-address-card"></i> <span>Account</span>
                        </Link>
                    </li>
                    <li className="nav-item position-relative dropdown bg-blue-300 mb-2 p-2 rounded-2">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                {/* <form className="d-flex mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-success" type="submit">Search</button>
                </form> */}
                <ul className="navbar-nav justify-content-start">
                    <li className="nav-item position-relative bg-danger text-white mt-2 mb-2 px-3 rounded-pill">
                        <a className="nav-link d-flex justify-content-between align-items-center">
                            <i className="fa fa-right-from-bracket"></i> <span>Signout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;