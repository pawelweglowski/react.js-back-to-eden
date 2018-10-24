import React from 'react';
import ReactDOM from 'react-dom';
import SignInInputs from './signininputs.jsx';

class Header extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            userName: "",
            password: "",
            city: "",
            id: null
        }
    };
    
    handleSignInInput = e => {
            this.setState({
                [e.target.id]: e.target.value,
            })
    };
    
    handleClick = (e, button) => {
        e.preventDefault();
        if( button === 1 ){
            console.log("kliknięto sign in");
            //console.log(this.state.name);
            //odpal funkcję signIn
            //pojawia sie formularz
            //ona postuje wpisane w formularzu dane do DB users
            
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName: this.state.userName,
                    password: this.state.password,
                    city: this.state.city
                })
                }).then(request => request.json()).then(resp => {

                this.setState({
                    id: resp.id,
                    userName: "",
                    password: "",
                    city: "",
                })
            })
            
            
        } else if( button === 2 ) {
            console.log("kliknięto log in");
            //odpal funkcję logIn
            //pojawia sie form
            //porównuje form.val() z DB i puszcza czyli wyświetla content dla usersa

        } else {
            //odpal
        }
    };
    
    render(){
        const {userName, password, city, id} = this.state;
        return (
            <div className="header" >
                    <h1>Back>to>Eden</h1>
                    <button className="signIn button" onClick={ e => this.handleClick(e, 1) }>Sign in</button>
                    <button className="logIn button" onClick={ e => this.handleClick(e, 2) }>Log in</button>   
                    <SignInInputs handleSignInInput={this.handleSignInInput}
                      userName={userName}
                      password={password}
                      city={city} />
            </div>
           )
    }
    
};
export default Header;

//document.addEventListener('DOMContentLoaded', function(){
//    ReactDOM.render(
//        <Header/>,
//        document.getElementById('app')
//    );
//});
