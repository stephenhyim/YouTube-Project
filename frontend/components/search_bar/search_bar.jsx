import React from 'react';

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

    handleSubmit() {
        this.props.fetchResults
    }

    render () {
        return (
            <div className='search-bar-container'>
                <input className='search-bar' type ='text' placeholder ='Search' onChange={this.update("searchBody")} value = {this.state.searchBody}/>
                <button onClick={this.handleSubmit()} className="search-btn"><i className="fas fa-search"></i></button>
            </div>
        )
    }




}

export default SearchBar;