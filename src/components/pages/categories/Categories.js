import { Link } from "react-router-dom";

const Categories = () => {

    const categories = [
        { id: 1, name: 'Social Media', description:'Social Media', count: 5 },
        { id: 2, name: 'Finance', description:'Finance', count: 5 },
        { id: 3, name: 'Email', description:'Email', count: 5 },
        { id: 4, name: 'Other', description:'Other', count: 5 }
    ];
    return ( 
        <div className="card rounded-2 shadow mb-3 border-0 ">
            <div className="card-header bg-blue-300 fs-4 text-dark">
                <i className="fa fa-icons"></i>
                <span className="px-2">Categories</span>
            </div>
            <div className="card-body bg-blue-50">
                {/* <h5 className="card-title">Primary card title</h5> */}
                <div>
                    <Link className="btn btn-light shadow-sm" to='/categories/create'>
                        <i className="fa fa-icons"></i>
                        <i className="fa fa-plus"></i>
                        <span className="px-2">Add New Category</span>
                    </Link>
                </div>
                <div className="pt-4 py-2">
                    <table className="table table-sm table-striped">
                        <thead className="table-primary">
                            <tr className="bg-blue-300">
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Count</th>
                                <th scope="col">Description</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-devider">
                            {categories.map(category =>
                                <tr key={category.id}>
                                    <th scope="row">{category.id}</th>
                                    <td>{category.name}</td>
                                    <td>{category.count}</td>
                                    <td>{category.description}</td>
                                    <td>
                                        <button className="btn btn-sm me-1">
                                            <i className="fa fa-edit"></i>
                                        </button>
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
 
export default Categories;