import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';


function Modal(props) {
    const {errors, renderErrors, modal, closeModal, handleSubmit, update, state, handleFile} = props
    debugger
    if (!modal) {
        return null;
    }
    
    debugger


    const preview = state.videoUrl ? <video width='300' height='120' src={state.videoUrl} /> : null;

    return (
        <div className = "modal-background" onClick = {closeModal}>
            <div className = "modal-child" onClick = {e => e.stopPropagation()}>
                <div className = "modal-header">
                    <h1>Upload videos</h1>
                    <span className = "close-modal-btn" onClick = {closeModal}>x</span>
                </div>
                <div className = "modal-content">
                    <form className = "modal-form" onSubmit={handleSubmit}>
                        <div className="upload-img">
                            <label htmlFor="file-input">
                                <i className="fas fa-file-upload"></i>
                            </label>
                            <input onChange={handleFile} id="file-input" type="file"/>
                        </div>
                        <div className = "modal-video-info">
                            <input placeholder="Title" type="text" onChange={update('title')} value = {state.title}/>
                            <textarea placeholder="Description" onChange={update('description')} value = {state.description}></textarea>
                            {renderErrors()}
                        </div>
                        <div className = "model-video-preview">
                            {preview}
                        </div>
                        <button>Upload Video</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

const mSTP = state => {
    debugger
    return {
        modal: state.ui.modal
    };
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal)