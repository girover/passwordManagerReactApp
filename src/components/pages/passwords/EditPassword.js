
import { useLocation } from "react-router-dom";

const EditPassword = (props) => {
    const location = useLocation();
    const password = location.state;
    console.log(password);
    return ( 
        <div className="card rounded-1 shadow mb-3 border-0 mx-auto" style={{maxWidth:'600px'}}>
        <div className="card-header bg-blue-300 fs-4 text-dark">
            <i className="fa fa-icons"></i>
            <span className="px-2">Edit login</span>
        </div>
        <div className="card-body bg-blue-50">
            <div className="py-2">
            <form >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={password.name}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={password.username} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password.password} />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input type="text" className="form-control" id="category" value={password.category} />
                </div>
                <button type="submit" className="btn btn-primary">
                    <i className="fa fa-save"></i>
                    <span className="px-2">Update</span>
                </button>
            </form>
            </div>
        </div>
    </div>
     );
}
 
export default EditPassword;