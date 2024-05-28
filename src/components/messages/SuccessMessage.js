
const SuccessMessage = ({title, content, showSuccessMessage, onClickHandler}) => {

    return (
        <div className="toast-container top-0 end-0 p-3">
            <div className={`toast ${showSuccessMessage ? 'show' : ''} bg-success text-white`} id="toastSuccess" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header bg-success text-white">
                    <strong className="me-auto">{title}</strong>
                    <button type="button" className="btn-close" onClick={onClickHandler} aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default SuccessMessage;