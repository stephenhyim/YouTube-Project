import React from 'react';
const queryString = require('query-string');
import TopNavBarContainer from '../top_nav_bar/top_nav_bar_container';
import LeftNavBarContainer from '../left_nav_bar/left_nav_bar_container';

class SearchIndex extends React.Component {
    componentDidMount() {
        debugger
        const query = (queryString.parse(this.props.location.search).search)
        debugger
        this.props.fetchResults(query)
    }

    componentDidUpdate(prevPops, prevState){
        if(prevPops.location.search !== this.props.location.search){
            this.props.fetchResults(queryString.parse(this.props.location.search).search)
        }
    }


    render() {
        debugger
        if (!this.props.searchResults) {
            return (
                <div>
                    <p>no results</p>
                </div>
            )
        }

        const results = Object.values(this.props.searchResults).map( (result, idx) => {
            debugger
            return (
                <div key={idx}>
                    <video src={result.videoUrl}></video>
                    <p>{result.title}</p>
                    <p>{result.created_at}</p>
                </div>
            )
        })
        return (
            <div>
                <TopNavBarContainer/>
                <LeftNavBarContainer/>
                <ul>{results}</ul>
            </div>
        )
    }
}

export default SearchIndex