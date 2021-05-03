import React from 'react';
import TopNavBarContainer from '../top_nav_bar/top_nav_bar_container';
import { Link } from 'react-router-dom';
const queryString = require('query-string');

class SearchIndex extends React.Component {
    componentDidMount() {
        const query = (queryString.parse(this.props.location.search).search)
        this.props.fetchResults(query)
    }

    componentDidUpdate(prevPops, prevState){
        if(prevPops.location.search !== this.props.location.search){
            this.props.fetchResults(queryString.parse(this.props.location.search).search)
        }
    }

    formatDate(uploadDate) {
        let now;

        now = new Date();
        const formatedCreate = new Date(uploadDate)

        if (now.getFullYear() - formatedCreate.getFullYear() === 1) {
            const oneyearAgo = now.getFullYear() - formatedCreate.getFullYear()
            return (`${oneyearAgo} year ago`)
        } else if (now.getFullYear() - formatedCreate.getFullYear() > 0) {
            const yearsAgo = now.getFullYear() - formatedCreate.getFullYear()
            return (`${yearsAgo} years ago`)
        } else if (now.getMonth() - formatedCreate.getMonth() === 1) {
            const oneMonthAgo = now.getMonth() - formatedCreate.getMonth()
            return (`${oneMonthAgo} month ago`)
        } else if (now.getMonth() - formatedCreate.getMonth() > 0) {
            const monthsAgo = now.getMonth() - formatedCreate.getMonth()
            return (`${monthsAgo} months ago`)
        } else if (now.getDate() - formatedCreate.getDate() === 1) {
            const oneDayAgo = now.getDate() - formatedCreate.getDate()
            return (`${oneDayAgo} day ago`)
        } else if (now.getDate() - formatedCreate.getDate() > 0) {
            const daysAgo = now.getDate() - formatedCreate.getDate()
            return (`${daysAgo} days ago`)
        } else if (now.getHours() - formatedCreate.getHours() === 1) {
            const oneHourAgo = now.getHours() - formatedCreate.getHours()
            return (`${oneHourAgo} hour ago`)
        } else if (now.getHours() - formatedCreate.getHours() > 0) {
            const hoursAgo = now.getHours() - formatedCreate.getHours()
            return (`${hoursAgo} hours ago`)
        } else if (now.getMinutes() - formatedCreate.getMinutes() === 1) {
            const oneMinuteAgo = now.getMinutes() - formatedCreate.getMinutes()
            return (`${oneMinuteAgo} minute ago`)
        } else if (now.getMinutes() - formatedCreate.getMinutes() > 0) {
            const minutesAgo = now.getMinutes() - formatedCreate.getMinutes()
            return (`${minutesAgo} minutes ago`)
        } else if (now.getSeconds() - formatedCreate.getSeconds() > 1) {
            const secondsAgo = now.getSeconds() - formatedCreate.getSeconds()
            return (`${secondsAgo} seconds ago`)
        } else {
            return ("1 second ago")
        }

    }


    render() {
        if (!this.props.searchResults) {
            return null;
        }
        
        const results = Object.values(this.props.searchResults).map( (result, idx) => {
            const viewDate = this.formatDate(result.created_at)
            return (
                <div className = "single-search-result" key={idx}>
                    <Link to ={`/videos/${result.id}`}><video height="200px" width="360px" src={result.videoUrl}></video></Link>
                    <div className = "single-search-wrapper">
                        <Link to ={`/videos/${result.id}`}><p className = "search-title">{result.title}</p></Link>
                        <div className = "single-search-metrics">
                            <p>Views Coming</p>
                            <p>&middot;</p>
                            <p>{viewDate}</p>
                        </div>
                        <div className = "single-search-user-info">
                            <Link to={`/users/${result.user_id}`}><i className="fas fa-user"></i></Link>
                            <Link to={`/users/${result.user_id}`}><p className = "single-search-user">{result.nickname}</p></Link>
                        </div>
                        <p className="single-search-description">{result.description}</p>
                    </div>
                </div>
            )
        })
    



        return (
            <div className = "search-index-container">
                <TopNavBarContainer/>
                <div className = "search-index-page">
                    {results.length !== 0 ? (
                    <div className = "search-results">{results}</div>
                     ) : (
                         <p className = "no-search-results">No Results Found</p>
                     )}
                </div>
            </div>
        )
    }
}

export default SearchIndex