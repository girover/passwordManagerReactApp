import Button from "../../components/buttons/Button";
import Card from "../../components/cards/Card";
import FormInput from "../../components/forms/FormInput";
import FormTextarea from "../../components/forms/FormTextarea";
import { useLocation } from "react-router-dom";

const EditCategory = () => {

    const location = useLocation();
    const category = location.state ?? {};

    return (
        <div className="m-auto" style={{maxWidth:'600px'}}>
            <Card title="Edit category" fs="5" icons={["fa fa-icons"]}>
                <div className="py-2">
                    <form>
                        <FormInput type="file" id="icon" name="icon" label="Icon" />
                        <FormInput id="name" name="name" label="Name" value={category.name} />
                        <FormTextarea id="description" name="description" label="Description" value={category.description} />

                        <Button type="submit" text="Update" color="primary" icons={['fa fa-save']} onClickHandler={undefined} />
                    </form>
                </div>
            </Card>
        </div>
    );
}

export default EditCategory;