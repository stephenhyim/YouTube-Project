import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class TopNavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
      showMenu2: false
    }

    this.openDropDown = this.openDropDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
    this.openVideoDropDown = this.openVideoDropDown.bind(this);
    this.closeVideoDropDown = this.closeVideoDropDown.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
  }


  openDropDown(e) {
    e.preventDefault();

    if (this.state.showMenu === false) {
      this.setState({ showMenu: true})
    } else {
      this.setState({ showMenu: false })
    }
  }

  closeDropDown() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeDropDown);
    })
  }

  openVideoDropDown(e) {
    e.preventDefault();

    if (this.state.showMenu2 === false) {
      this.setState({ showMenu2: true})
    } else {
      this.setState({ showMenu2: false })
    }
  }

  closeVideoDropDown() {
    this.setState({ showMenu2: false }, () => {
      document.removeEventListener('click', this.closeDropDown);
    })
  }

  

  

  render() {
    // debugger

   


    const display = this.props.currentUser ? (
      <div className = 'top-nav-container'>
        
        <div className = 'left-top-nav'>
          <i className="fas fa-bars"></i>
          <Link className='top-nav-youtube-icon' to = {`/`}><i className="fab fa-youtube"></i></Link>
        </div>
    
        <div className='center-top-nav'>
          <div className='search-bar-container'>
            <ul><input className='search-bar' type ='text' placeholder ='Search' /></ul>
            <ul>
              <li><button className="search-btn"><i className="fas fa-search"></i></button></li>
            </ul>
          </div>
        </div>

        <div className = "top-right-nav">
          <div className = "video-dropdown-container">
            <button onClick = {this.openVideoDropDown} className = "video-btn"><i className="fas fa-video"></i></button>
            {this.state.showMenu2 ? (
              <div className='video-dropdown'>
                  <ul className='video-dropdown-ul'>
                    <li><Link to = '/upload/video' onClick={() => this.props.openModal("openModal") }>Upload video</Link></li>
                  </ul>
              </div>
            ) : (
              null
            )}
          </div> 

          <div className = 'drop-down-container'>
            <button onClick = {this.openDropDown} className='avatar'><i className="fas fa-user"></i></button>
            {this.state.showMenu ? (
              <div className='dropdown'>
                <ul className='dropdown-ul'>
                  <li><Link to ={`/users/${this.props.currentUser}`} >Your channel</Link></li>
                  <li><button className = "logout-btn" onClick={()=>this.props.logout(this.props.currentUser).then(this.props.history.push("/"))}>Sign out</button></li>
                </ul>
              </div>
            ) : (
              null
            )}
          </div>
        </div>
      </div>
    ) : (
      <div className = 'top-nav-container'>

        <div className = 'left-top-nav'>
          <i className="fas fa-bars"></i>
          <Link className='top-nav-youtube-icon' to = {`/`}><i className="fab fa-youtube"></i></Link>
        </div>
    
        <div className='center-top-nav'>
          <div className='search-bar-container'>
            <ul><input className='search-bar' type ='text' placeholder ='Search' /></ul>
            <ul>
              <li><button className="search-btn"><i className="fas fa-search"></i></button></li>
            </ul>
          </div>
        </div>
    
        <div className = 'right-top-nav'>
          <div className = 'signin-container'>
            <ul><i className="fas fa-user"></i></ul>
            <ul><Link className="signin-btn" to="/login">SIGN IN</Link></ul>
          </div>
        </div>
        
      </div>
    );
    
    return(
        <div className='top-nav-bar'>
          <ul className='top-nav-links'>
            <li>{display}</li>
          </ul>
        </div>
      );
  }
  
}



export default withRouter(TopNavBar);