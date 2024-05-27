import Button from "./Button";

const BtnPrimary = ({classes, text, icons, onClickHandler}) => {
    return ( 
        <Button text={text} color="primary" icons={icons} classes={classes} onClickHandler={onClickHandler} />
     );
}
 
export default BtnPrimary;