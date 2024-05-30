import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BtnIcon from './buttons/BtnIcon';

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
        <aside className="offcanvas offcanvas-start bg-blue-200-linear" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="offcanvasSidebar" aria-labelledby="offcanvas-sidebar-header">
            <div className="offcanvas-header" id="offcanvas-sidebar-header">
                <img id="img-logo" src="/img/logo.png" alt="A logo for the password manager app" />
                <span className="text-sky-900 fs-5 fw-bold">Password Manager</span>
                <button type="button" className="btn-close text-dark d-lg-none border border-1 border-secondary-subtle" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column">
                <ul className="navbar-nav justify-content-start flex-grow-1 text-blue-950">
                    <li className={`nav-item hover-bg-blue-200 position-relative mb-2 p-2 rounded-2 ${activeLink == 'home' ? 'active' : 'bg-blue-300'}`}>
                        <Link className="nav-link d-flex justify-content-between align-items-center" to="/home" aria-current="page" onClick={() => handleOnLinkClicked('home')}>
                            <i className="fa fa-home"></i> <span>Home</span>
                        </Link>
                    </li>
                    <li className={`nav-item hover-bg-blue-200 position-relative mb-2 p-2 rounded-2 ${activeLink == 'passwords' ? 'active' : 'bg-blue-300'}`}>
                        <Link className="nav-link d-flex justify-content-between align-items-center" to="/passwords" aria-current="page" onClick={() => handleOnLinkClicked('passwords')}>
                            <i className="fa fa-key"></i> <span>Passwords</span>
                        </Link>
                    </li>
                    <li className={`nav-item hover-bg-blue-200 position-relative mb-2 p-2 rounded-2 ${activeLink == 'categories' ? 'active' : 'bg-blue-300'}`}>
                        <Link className="nav-link d-flex justify-content-between align-items-center" to="/categories" aria-current="page" onClick={() => handleOnLinkClicked('categories')}>
                            <i className="fa fa-icons"></i> <span>Categories</span>
                        </Link>
                    </li>
                    <li className={`nav-item hover-bg-blue-200 position-relative mb-2 p-2 rounded-2 ${activeLink == 'account' ? 'active' : 'bg-blue-300'}`}>
                        <Link className="nav-link d-flex justify-content-between align-items-center" to="/account" aria-current="page" onClick={() => handleOnLinkClicked('account')}>
                            <i className="fa fa-address-card"></i> <span>Account</span>
                        </Link>
                    </li>
                </ul>
                <div className='d-flex justify-content-between '>
                    <Link className="btn btn-danger btn-sm rounded-pill" to="/logout">
                        <span className="visually-hidden">Signout</span>
                        <i className="fa fa-sign-out-alt"></i>
                    </Link>
                    {/* <BtnIcon ariaLabel="Signout" text="Signout" icons={['fa fa-sign-out-alt']} classes='btn-danger btn-sm rounded-pill' /> */}
                    <BtnIcon ariaLabel="Settings" text="Settings" icons={['fa fa-gear']} classes='btn-primary bg-blue-600 btn-sm rounded-pill'/>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;