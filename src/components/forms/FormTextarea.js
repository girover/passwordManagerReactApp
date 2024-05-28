const FormTextarea = ({id, name, label, value, rows, cols, onChangeHandler}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <textarea className="form-control" id={id} name={name} rows={rows ?? 4} cols={cols??undefined} onChange={onChangeHandler}>
                {value}
            </textarea>
        </div>
    );
}

export default FormTextarea;