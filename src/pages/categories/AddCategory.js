import Button from "../../components/buttons/Button";
import Card from "../../components/cards/Card";
import FormInput from "../../components/forms/FormInput";
import FormTextarea from "../../components/forms/FormTextarea";

const AddCategory = () => {
    return (
        <div className="m-auto" style={{maxWidth:'600px'}}>
            <Card title="Add New Category" fs="5" icons={["fa fa-icons"]}>
                <div className="py-2">
                    <form>
                        <FormInput type="file" id="icon" name="icon" label="Icon" />
                        <FormInput id="name" name="name" label="Name" />
                        <FormTextarea id="description" name="description" label="Description" />

                        <Button type="submit" text="Create" color="primary" icons={['fa fa-save']} onClickHandler={undefined} />
                    </form>
                </div>
            </Card>
        </div>
    );
}

export default AddCategory;