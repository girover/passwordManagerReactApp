import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "../../components/cards/Card";
import TableHead from "../../components/tables/TableHead";
import BtnIcon from "../../components/buttons/BtnIcon";
import db from "../../data";
import { useEffect, useState } from "react";

const CategoryPasswords = () => {

    const { id } = useParams();
    const [category, setCategory] = useState({});
    const [passwords, setPasswords] = useState([]);
    const navigate = useNavigate();
     
    

    useEffect(() => {
        let category = db.categories.find(cat => parseInt(cat.id) === parseInt(id));
        
        if (!category) {
            navigate('/not-found');
        }
        setCategory(category);

        setPasswords(db.passwords.filter(password => {
            return parseInt(password.category) === parseInt(id);
        })?.map(password => {
            return {
                ...password,
                category: db.categories.find(cat => cat.id === parseInt(password.category))?.name || 'Uncategorized',
                lastUsed: password.lastUsed ?? 'Never'
            }
        }));

    }, [id]);

    return (
        <Card title={`Passwords under category [ ${category?.name} ]`} icons={["fa fa-key"]} fs="5">
            <div className="pt-4 py-2">
                <table className="table table-sm table-striped">
                    <TableHead bgColor="blue-300" headers={['#', 'Name', 'Last used', 'Username', 'Password', 'Category', 'Actions']} />
                    <tbody className="table-group-devider">
                        {passwords.map(password =>
                            <tr key={password.id}>
                                <th scope="row">{password.id}</th>
                                <td>{password.name}</td>
                                <td>{password.lastUsed}</td>
                                <td>
                                    {password.username}
                                    <BtnIcon ariaLabel={`copy username of ${password.name}`} text="copy username" icons={['fa-regular fa-copy']} classes="btn-sm" />
                                </td>
                                <td>
                                    {'*'.repeat(password.password.length)}
                                    <BtnIcon ariaLabel={`show password of ${password.name}`} text="show password" icons={['fa-regular fa-eye']} classes="btn-sm" />
                                    <BtnIcon  ariaLabel={`copy password of ${password.name}`} text="copy password" icons={['fa-regular fa-copy']} classes="btn-sm" />
                                </td>
                                <td>{password.category}</td>
                                <td>
                                    <Link className="btn btn-sm me-1" to={{ pathname: '/passwords/edit' }} state={password}>
                                        <span className="visually-hidden">{`Edit password for ${password.name}`}</span>
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <BtnIcon ariaLabel={`delete password for ${password.name}`} text="delete password" icons={['fa fa-trash-can']} classes="btn-sm" />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}

export default CategoryPasswords;