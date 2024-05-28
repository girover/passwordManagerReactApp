import { Link } from "react-router-dom";
import Card from "../../components/cards/Card";
import TableHead from "../../components/tables/TableHead";
import BtnIcon from "../../components/buttons/BtnIcon";
import db from "../../data";

const Categories = () => {

    const categories = db.categories.map(category => {
        return {
            ...category,
            totalPasswords: db.passwords.filter(password => parseInt(password.category) === parseInt(category.id))?.length || 0
        }
    });
    
    return (
        <Card title="Categories" fs="5" icons={["fa fa-icons"]}>
            <div>
                <Link className="btn btn-light shadow-sm" to='/categories/create'>
                    <i className="fa fa-icons"></i>
                    <i className="fa fa-plus"></i>
                    <span className="px-2">Add New Category</span>
                </Link>
            </div>
            <div className="pt-4 py-2">
                <table className="table table-sm table-striped">
                    <TableHead bgColor="blue-300" headers={['#', 'Name', 'Count', 'Description', 'Actions']} />
                    <tbody className="table-group-devider">
                        {categories.map(category =>
                            <tr key={category.id}>
                                <th scope="row">{category.id}</th>
                                <td>{category.name}</td>
                                <td>{category.totalPasswords}</td>
                                <td>{category.description}</td>
                                <td>
                                    <Link className="btn btn-sm me-1" to={{ pathname: '/categories/edit' }} state={category}>
                                        <span className="visually-hidden">{`Edit category ${category.name}`}</span>
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <Link className="btn btn-sm me-1" to={{ pathname: `/categories/${category.id}/passwords` }}>
                                        <span className="visually-hidden">{`Edit category ${category.name}`}</span>
                                        <i className="fa fa-key"></i>
                                    </Link>
                                    <BtnIcon ariaLabel={`delete category ${category.name}`} text="delete category" icons={['fa fa-trash-can']} classes="btn-sm me-1" />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}

export default Categories;