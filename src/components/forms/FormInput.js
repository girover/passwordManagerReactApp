const FormInput = ({type, id, name, label, value, onChangeHandler}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type={type ?? 'text'} className="form-control" id={id} name={name} value={value} onChange={onChangeHandler} />
        </div>
    );
}

export default FormInput;