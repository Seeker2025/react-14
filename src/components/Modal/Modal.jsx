import css from './Modal.module.css';

const Modal = ({ children, closeModal }) =>{
    return (
        <div className={css.modal}>
            <div className="modalDialog">
                <div  className="modalContent">
                    <div  className="modalHeader">
                        <h5  className="modalTitle">Modal</h5>
                        <button
                            type="button"
                            className={css.btnClose}
                            arial-label="Close"
                            onClick={closeModal}
                        >&#10006;</button>
                    </div>
                    <div className="modalBody">{children}</div>
                </div>
            </div>    
        </div>
    )
}

export default Modal;