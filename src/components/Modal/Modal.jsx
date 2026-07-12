import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component{
    state ={

    }

    componentDidMount(){
        window.addEventListener('keydown', this.handlePressEsc )
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handlePressEsc )
    }

    handlePressEsc = (e) => {
        console.log('object >>', Date.now());
        
        if(e.code === 'Escape') this.props.closeModal();
    }

    render(){
        const{ closeModal, children } = this.props;
         return (
        <div className={css.modal}>
            <div>
                <div>
                    <div>
                        <h5>Modal</h5>
                        <button
                            type="button"
                            className={css.btnClose}
                            arial-label="Close"
                            onClick={closeModal}
                        >&#10006;</button>
                    </div>
                    <div>{children}</div>
                </div>
            </div>    
        </div>
    )

    }

}

export default Modal;