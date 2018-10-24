import React from 'react';
import ReactDOM from 'react-dom';

class SignInInputs extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: "",
            password: "",
            city: "",
            isValid: false,
        };
    };
    
    
    
    render(){
        return (
            <div className="signInInputs">
                       <div className="userName">
                            <p>Podaj User Name</p>
                            <input id="userName" 
                                type="text" 
                                name="userName" 
                                placeholder="User name" 
                                onChange={this.props.handleSignInInput}               value={this.props.userName}></input>
                        </div>
                        <div className="password">     
                            <p>Podaj Password</p>
                            <input id="password" 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                onChange={this.props.handleSignInInput}               value={this.props.password}></input>
                        </div>
                        <div className="city">          
                            <p>Podaj Your City</p>
                            <input id="city" 
                            type="text" 
                            name="city" 
                            placeholder="Which City are You from" 
                            onChange={this.props.handleSignInInput}               value={this.props.city}></input>
                        </div>
                    </div>
           )
    }
    
};
export default SignInInputs;

/*document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <SignInInputs/>,
        document.getElementById('app')
    );
});*/