import React from 'react';
import {withRouter} from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchBody: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.history.push({ pathname: '/search', search: `search=${this.state.searchBody}`})
    }

    render () {
        return (
            <div className='search-bar-container'>
                <form onSubmit ={this.handleSubmit}>
                    <input className='search-bar' type ='text' placeholder ='Search' onChange={this.update("searchBody")} value = {this.state.searchBody}/>
                    <button onClick={this.handleSubmit} className="search-btn"><i className="fas fa-search"></i></button>
                </form>
            </div>
        )
    }


}

export default withRouter(SearchBar);