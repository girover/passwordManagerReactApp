const NavItem = ({icons, text, classes}) => {
    return (
        <li className={`nav-item position-relative mb-1 rounded-2 ${classes}`}>
            <a className="nav-link d-flex justify-content-between align-items-center bg-blue-200 rounded-1 px-3 mb-1">
                <span>{icons.map(icon => <i className={icon}></i>)}</span>
                <span className="ms-2">{text}</span>
            </a>
        </li>
    );
}

export default NavItem;