// import React from 'react';

// class Signup extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             nickname: '',
//             email: '',
//             password: ''
//         }
        
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(field) {
//         return (e) => {
//             this.setState({ [field]: e.currentTarget.value})
//         }
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.signup(this.state)
//             .then(() => this.props.history.push('/'))
//     }

//     render() {
//         return (
//             <div classNmae='session-form'>
//                 <h2>Sign Up!</h2>
//                 <form onSubmit = {this.handleSubmit}>
//                     <label>Nickname: 
//                     <input type="text" value = {this.state.nickname} onChange = {this.handleChange('nickname')}/>
//                     </label>
//                     <label>Email: 
//                     <input type="text" value = {this.state.email} onChange = {this.handleChange('email')}/>
//                     </label>
//                     <label>Password:
//                     <input type="password" value = {this.state.password} onChange = {this.handleChange('password')}/>
//                     </label>
//                     <button onSubmit = {this.handleSubmit}>Sign Up</button>
//                 </form>
//             </div>
//         );
//     }
// };

// export default Signup;