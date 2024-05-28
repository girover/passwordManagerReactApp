import { useState, useEffect } from "react";
import Button from "../../components/buttons/Button";
import Card from "../../components/cards/Card";
import FormInput from "../../components/forms/FormInput";
import FormSelect from "../../components/forms/FormSelect";
import FormTextarea from "../../components/forms/FormTextarea";
import db from "../../data";
import SuccessMessage from "../../components/messages/SuccessMessage";
import ErrorMessage from "../../components/messages/ErrorMessage";

const AddPassword = () => {

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        site: '',
        category: '',
        description: ''
    });

    const [errorMassage, setErrorMassage] = useState('');

    const [submitting, setSubmitting] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const categories = db.categories;

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        if (formData.name === '' ||formData.category === '' || formData.username === '' || formData.password === '' || formData.site === '' || formData.description === '') {
            setErrorMassage('All fields are required');
            setShowErrorMessage(true);
            return;
        }
        
        setSubmitting(true);
        db.addPassword(formData);
        setShowSuccessMessage(true);
    };

    useEffect(() => {
        
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [submitting, showSuccessMessage, showErrorMessage]);

    return (
        <div className="m-auto" style={{ maxWidth: '600px' }}>
            <Card title="Add New Login" fs="5" icons={["fa fa-icons"]}>
                <div className="py-2">
                    <form>
                        <FormInput id="name" name="name" label="Name" onChangeHandler={onChangeHandler} />
                        <FormInput id="username" name="username" label="Username" onChangeHandler={onChangeHandler} />
                        <FormInput id="password" name="password" label="Password" onChangeHandler={onChangeHandler} />
                        <FormInput id="site" name="site" label="Site" onChangeHandler={onChangeHandler} />
                        <FormSelect id="category" name="category" label="Category" options={categories.map(cat => { return { value: cat.id, text: cat.name } })} onChangeHandler={onChangeHandler} />
                        <FormTextarea id="description" name="description" label="Description" onChangeHandler={onChangeHandler} />

                        <Button type="submit" classes="bg-blue-700" text="Create" color="primary" icons={['fa fa-save']} onClickHandler={onSubmitHandler} />
                    </form>
                </div>
            </Card>
            <SuccessMessage title="New Login" content="Login was added successfully" showSuccessMessage={showSuccessMessage} onClickHandler={() => setShowSuccessMessage(false)} />
            <ErrorMessage title="Error" content={errorMassage} showErrorMessage={showErrorMessage} onClickHandler={() => setShowSuccessMessage(false)} />
        </div>

    );
}

export default AddPassword;