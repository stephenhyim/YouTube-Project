import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchBody: ""
        }
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        
    }

    render () {
        return (
            <div className='search-bar-container'>
                <input className='search-bar' type ='text' placeholder ='Search' onChange={this.update("searchBody")} value = {this.state.searchBody}/>
                {console.log(this.state.searchBody)}
                <button className="search-btn"><i className="fas fa-search"></i></button>
            </div>
        )
    }




}

export default SearchBar;