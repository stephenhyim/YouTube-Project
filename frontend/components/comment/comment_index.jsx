import React from 'react';

class CommentIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchComments(this.props.videoId)

    }

    render() {
        if (!this.props.comments) {
            return null
        }

        
        return (
            <div>
                <h1>COMMENT INDEX</h1>
            </div>
        )
        
    }

    
}

export default CommentIndex;