const Card = ({title, button, icon, body}) => {
    return ( 
        <div className="card rounded-1 shadow mb-3 border-0 ">
            <div className="card-header bg-blue-400 fs-4 text-white">
                <i className={`fa fa-${icon}`}></i>
                <span className="px-2">{title}</span>
            </div>
            <div className="card-body bg-blue-50">
                <div>
                    {button}
                </div>
                <div className="py-2">
                    {body}
                </div>
            </div>
        </div>
     );
}
 
export default Card;