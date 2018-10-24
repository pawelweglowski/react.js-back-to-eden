import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    };
    
    
    
    render(){
        return (
            <div className="footer">
                    <p>Copyright 2018 | All Rights Reserved. - Back>to>Eden</p>
                    <div>
                        <img src="./images/flickr.png"></img>
                        <img src="./images/vimeo.png"></img>
                        <img src="./images/facebook.png"></img>
                        <img src="./images/pinterest.png"></img>
                        <img src="./images/twitter.png"></img>
				    </div>  
                </div>
           )
    }
    
};
export default Footer;



