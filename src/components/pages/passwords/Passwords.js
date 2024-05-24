import { Link } from "react-router-dom";

const Passwords = () => {

    const date = new Date();
    const passwords = [
        {
            id: 1,
            name: 'Facebook',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username1',
            password: '*******',
            category: 'Social Media'
        },
        {
            id: 2,
            name: 'Instagram',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username2',
            password: '*******',
            category: 'Social Media'
        },
        {
            id: 3,
            name: 'Twitter',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username3',
            password: '*******',
            category: 'Social Media'
        },
        {
            id: 4,
            name: 'LinkedIn',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username4',
            password: '*******',
            category: 'Social Media'
        }
    ];
    return (
        <div className="card rounded-1 shadow mb-3 border-0 ">
            <div className="card-header bg-blue-400 fs-4 text-white">
                <i className="fa fa-key"></i>
                <span className="px-2">Passwords</span>
            </div>
            <div className="card-body bg-blue-50">
                {/* <h5 className="card-title">Primary card title</h5> */}
                <div>
                    <button className="btn btn-light shadow-sm">
                        <i className="fa fa-plus"></i>
                        <i className="fa fa-key"></i>
                        <span className="px-2">Create New Password</span>
                    </button>
                </div>
                <div className="pt-4 py-2">
                    <table className="table table-sm table-striped">
                        <thead className="table-primary">
                            <tr className="bg-blue-300">
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Last used</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">Category</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-devider">
                            {passwords.map(password =>
                                <tr key={password.id}>
                                    <th scope="row">{password.id}</th>
                                    <td>{password.name}</td>
                                    <td>{password.lastUsed}</td>
                                    <td>
                                        {password.username}
                                        <button className="btn btn-sm">
                                            <i className="fa-regular fa-copy"></i>
                                        </button>
                                    </td>
                                    <td>
                                        {password.password}
                                        <button className="btn btn-sm">
                                            <i className="fa-regular fa-eye"></i>
                                        </button>
                                        <button className="btn btn-sm">
                                            <i className="fa-regular fa-copy"></i>
                                        </button>
                                    </td>
                                    <td>{password.category}</td>
                                    <td>
                                        <Link className="btn btn-sm me-1" to={{pathname: '/passwords/edit'}} state={password}>
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                        <button className="btn btn-sm me-1">
                                            <i className="fa fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Passwords;