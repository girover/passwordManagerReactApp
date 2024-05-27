import Button from "../../components/buttons/Button";
import Card from "../../components/cards/Card";
import FormInput from "../../components/forms/FormInput";
import FormSelect from "../../components/forms/FormSelect";
import FormTextarea from "../../components/forms/FormTextarea";
import db from "../../data";

const AddPassword = () => {
    
    const categories = db.categories;
    return (
        <div className="m-auto" style={{maxWidth:'600px'}}>
            <Card title="Add New Login" fs="5" icons={["fa fa-icons"]}>
                <div className="py-2">
                    <form>
                        <FormInput id="name" name="name" label="Name" />
                        <FormInput id="username" name="username" label="Username" />
                        <FormInput id="password" name="password" label="Password" />
                        <FormInput id="site" name="site" label="Site" />
                        <FormSelect id="category" name="category" label="Category" options={categories.map(cat=>{return{value:cat.id, text:cat.name}})} />
                        <FormTextarea id="description" name="description" label="Description" />

                        <Button type="submit" classes="bg-blue-700" text="Create" color="primary" icons={['fa fa-save']} onClickHandler={undefined} />
                    </form>
                </div>
            </Card>
        </div>
    );
}

export default AddPassword;