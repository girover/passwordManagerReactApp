const Button = ({type, text, color, classes, icons, onClickHandler}) => {
    
    return (
        <button type={`${type ?? ''}`} className={`btn btn-${color} ${classes ?? ''}`} onClick={onClickHandler}>
            {icons.map(icon => <i key={Math.random()*10000 + 1} className={icon}></i>)}
            {text && <span className="px-2">{text}</span>}
        </button>
    );
}

export default Button;