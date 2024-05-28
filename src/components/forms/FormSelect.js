const FormSelect = ({id, name, label, options, selectValue, onChangeHandler}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <select className="form-select" id={id} name={name} onChange={onChangeHandler}>
                <option value="">Select...</option>
                {options.map((option) => {
                    if (selectValue === option.value) {
                        return <option key={option.value} value={option.value} selected>{option.text}</option>
                    }
                    return <option key={option.value} value={option.value}>{option.text}</option>
                })}
            </select>
        </div>
    );
}

export default FormSelect;