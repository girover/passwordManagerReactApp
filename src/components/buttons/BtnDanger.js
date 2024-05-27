import Button from "./Button";

const BtnDanger = ({classes, text, icons, onClickHandler}) => {
    return ( 
        <Button text={text} color="danger" icons={icons} classes={classes} onClickHandler={onClickHandler} />
     );
}
 
export default BtnDanger;