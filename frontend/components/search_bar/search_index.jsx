import React from 'react';

class SearchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchResults()
    }

    render() {
        const results = this.props.searchBody.map(result => {
            return (
                <div>
                    <video src="result.videoUrl"></video>
                    <p>{result.title}</p>
                    <p>{result.created_at}</p>
                </div>
            )
        })
        return (
            <div>
                <ul>{results}</ul>
            </div>
        )
    }
}

export default SearchIndex