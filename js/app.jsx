import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';


class App extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    
    //header ma 2 przyciski sign i log
    //content puki co ma wyszukiwarkę i randoma
    //footer ma copyrights i kontakty
        
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
            
        )
    }
}
    

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});