import Button from "./Button";

const BtnIcon = ({id, icons, ariaLabel, text, classes, onClickHandler}) => {
    return ( 
        // <Button icons={icons} classes={classes} onClickHandler={onClickHandler} />
        <button id={id} className={`btn ${classes}`} onClick={onClickHandler} aria-label={ariaLabel}>
            <span className="visually-hidden">{text}</span>
            {icons.map(icon => <i key={Math.random()*10000 + 1} className={icon}></i>)}
        </button>
     );
}
 
export default BtnIcon;