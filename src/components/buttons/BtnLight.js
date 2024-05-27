import Button from "./Button";

const BtnLight = ({classes, text, icons, onClickHandler}) => {
    return ( 
        <Button text={text} color="light" icons={icons} classes={classes} onClickHandler={onClickHandler} />
     );
}
 
export default BtnLight;