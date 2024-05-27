
import { useLocation } from "react-router-dom";
import Card from "../../components/cards/Card";
import Button from "../../components/buttons/Button";
import FormInput from "../../components/forms/FormInput";
import FormSelect from "../../components/forms/FormSelect";
import db from "../../data";

const EditPassword = () => {
    
    const location = useLocation();
    const password = location.state ?? {};

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const categories = db.categories.map(cat => {return{value:cat.id, text:cat.name}});
    
    return (
        <Card title="Edit login" fs="5" icons={["fa fa-key"]} classes='mx-auto' styles={{maxWidth: '600px'}}>
            <div className="py-2">
                <form>
                    <FormInput id="name" name="name" label="Name" value={password.name} />
                    <FormInput id="username" name="username" label="Username" value={password.username} />
                    <FormInput id="password" name="password" label="Password" value={password.password} />
                    <FormSelect options={categories} id="category" name="category" label="Category" selectValue={password.category} />
                    
                    <Button type="submit" text="Update" color="primary" icons={['fa fa-save']} onClickHandler={handleSubmit} />
                </form>
            </div>
        </Card>
    );
}

export default EditPassword;