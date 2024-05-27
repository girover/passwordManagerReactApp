const FormInput = ({type, id, name, label, value}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type={type ?? 'text'} className="form-control" id={id} value={value} />
        </div>
    );
}

export default FormInput;