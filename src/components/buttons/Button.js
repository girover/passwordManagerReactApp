const Button = ({text, type, size, icons}) => {
    return (
        <button className={`btn btn-${size} btn-${type} shadow-sm`}>
            {icons.map(icon => <i key={Date.now()} className={`fa fa-${icon}`}></i>)}
            <span className="px-2">{text}</span>
        </button>
    );
}

export default Button;