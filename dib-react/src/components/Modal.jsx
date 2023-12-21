function Modal({link}) {

    return(
        <div className="modal">
            <div className="modal-content">
                <img 
                    src={link}
                />
            </div>
        </div>
    )
}

export default Modal;