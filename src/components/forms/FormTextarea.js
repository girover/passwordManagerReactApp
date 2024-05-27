const FormTextarea = ({id, name, label, value, rows, cols}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <textarea className="form-control" id={id} name={name} rows={rows ?? 4} cols={cols??undefined}>
                {value}
            </textarea>
        </div>
    );
}

export default FormTextarea;