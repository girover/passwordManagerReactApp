import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/home" className="btn btn-primary">Go to Home</Link>
        </div>
     );
}
 
export default PageNotFound;