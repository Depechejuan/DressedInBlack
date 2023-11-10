import { useEffect, useState } from "react";



const Modal = ({type, visible, autoCloseTimeout}) => {
    const [showDefault, setShowDefault] = useState(true);
    const [modalVisible, setModalVisible] = useState(visible)

    const closeModal = () => {
        setModalVisible(false)
    }

    useEffect(() => {
        let timer;

        if (visible) {
            if (autoCloseTimeout) {
                timer = setTimeOut(() => {
                    closeModal();
                }, autoCloseTimeout);
            }
        }

        return () => clearTimeout(timer);
    }, [autoCloseTimeout, visible])

    const renderContent = () => {
        switch(type) {
            case "delete":
                return(
                        <p>¿Estás seguro que deseas eliminar el post?</p>
                );
            case "miau":
                return(
                    <p>Miau</p>
                );
            default:
                return (
                    <>
                        {showDefault && (
                                <h2>Tributo a Depeche Mode</h2>
                        )}
                    </>
                )
        }
    }

    return (
        <>
        {modalVisible && (
            <div className="modal">
                <div className="modal-content">
                    {renderContent()}
                </div>
            </div>
        )}
        </>
    );
}

export default Modal;