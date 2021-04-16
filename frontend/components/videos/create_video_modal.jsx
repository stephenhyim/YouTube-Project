import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';




function Modal(props) {
    const { resetState, handleEdit, renderErrors, modal, closeModal, handleSubmit, update, state, handleFile} = props
    // debugger
    if (!modal) {
        return null;
    }
    
    debugger

    function reset() {
        resetState();
        closeModal();
    }

    const preview = state.videoUrl ? <video width='300' height='150' src={state.videoUrl} /> : <img width='300' height='150' className='play_image' src={window.videoplayer} />;
    
    switch (modal) {
        case "openModal":
            return (
                <div className = "modal-background" onClick = {reset}>
                    <div className = "modal-child" onClick = {e => e.stopPropagation()}>
                        <div className = "modal-header">
                            <h1>Upload videos</h1>
                            <div className = "close-modal-btn" onClick = {reset}>x</div>
                        </div>
                        <div className = "modal-content">
                            <form className = "modal-form" onSubmit={handleSubmit}>
                                <div className="upload-img">
                                    <label htmlFor="file-input">
                                        <i id = "upload-icon" className="fas fa-file-upload"></i>
                                    </label>
                                    <input className="handle-file-input" onChange={handleFile} id="file-input" type="file"/>
                                </div>
                                <div className = "modal-video-info">
                                    <div className = "modal-left">
                                        <div className = "model-video-title-wrapper">
                                            <label htmlFor="video-title-modal-id">Video Title:</label>
                                            <input className="video-title-modal" id="video-title-modal-id" maxLength="100" placeholder="Title (required)" type="text" onChange={update('title')} value = {state.title}/>
                                        </div>
                                        <div className="video-title-description-wrapper">
                                            <label htmlFor="modal-textarea-description">Video Description:</label>
                                            <textarea className="modal-textarea" id="modal-textarea-description" placeholder="Description (required)&#10;Tell Viewers About Your Video" maxlength="5000" onChange={update('description')} value = {state.description}></textarea>
                                        </div>
                                        {renderErrors()}
                                    </div>
                                    <div className = "model-video-preview">
                                        <h1>Video Preview:</h1>
                                        {preview}
                                    </div>
                                </div>
                                <div className = "upload-video-btn-container">
                                    <button className = "upload-video-btn">Upload Video</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            )
            
        case "openEditModal":
            debugger
            return (
                <div className = "modal-background" onClick = {reset}>
                    <div className = "modal-child" onClick = {e => e.stopPropagation()}>
                        <div className = "modal-header">
                            <h1>Edit videos</h1>
                            <div className = "close-modal-btn" onClick = {reset}>x</div>
                        </div>
                        <div className = "modal-content">
                            <form className = "modal-form" onSubmit={handleEdit}>
                                <div className="upload-img">
                                    <label htmlFor="file-input">
                                        <i id = "upload-icon" className="fas fa-file-upload"></i>
                                    </label>
                                    <input className="handle-file-input" onChange={handleFile} id="file-input" type="file"/>
                                </div>
                                <div className = "modal-video-info">
                                    <div className = "modal-left">
                                        <div className = "model-video-title-wrapper">
                                            <label htmlFor="video-title-modal-id">Video Title:</label>
                                            <input className="video-title-modal" id="video-title-modal-id" maxLength="100" placeholder="Title (required)" type="text" onChange={update('title')} value = {state.title} autoFocus/>
                                        </div>
                                        <div className="video-title-description-wrapper">
                                            <label htmlFor="modal-textarea-description">Video Description:</label>
                                            <textarea className="modal-textarea" id="modal-textarea-description" placeholder="Description (required)&#10;Tell Viewers About Your Video" maxlength="5000" onChange={update('description')} value = {state.description}></textarea>
                                        </div>
                                            {/* <textarea placeholder="Description" onChange={update('description')} value = {state.description}></textarea> */}
                                        {renderErrors()}
                                    </div>
                                    <div className = "model-video-preview">
                                        <h1>Video Preview:</h1>
                                        {preview}
                                    </div>
                                </div>
                                <div className = "upload-video-btn-container">
                                    <button className = "upload-video-btn">Edit Video</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            )
    }
}

const mSTP = state => {
    // debugger
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