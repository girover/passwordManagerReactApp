import CardHeader from "./CardHeader";

const Card = ({bgColor, textColor, title, fs, icons, classes, styles, children}) => {
    return ( 
        <div className={`card rounded-1 shadow mb-3 border-0 ${classes??''}`} style={styles}>
            <CardHeader title={title} icons={icons} bgColor={bgColor} textColor={textColor} fs={fs} />
            <div className="card-body bg-blue-50">
                {children}
            </div>
        </div>
     );
}
 
export default Card;