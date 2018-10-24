import React from 'react';
import ReactDOM from 'react-dom';
import VegetableRow from './vegetableRow.jsx';

class Content extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            search: "",
        }
    };
    
    handleClick = (e, button) => {
        console.log("kliknięto Search");
        // odpal funkcję search
    }
    
    inputSearch = e => {
		this.setState({
			search: e.target.value,
		});
        console.log("dodano search do state");
        console.log(this.state.search);
	}
    
    render(){
        let search = this.state.search;
        return (
            <div className="content">
                    <header>
                        <h2>Grow Your Food 4 Your Health</h2>
                        <input className="search" type="text" name="search" placeholder="What do you want grow today ?" onChange={e=>this.inputSearch(e)}></input>
                        <button className="button" onClick={ e => this.handleClick(e, 3) }>Search!</button>
                    </header>
                    <VegetableRow search={search}/>
                    <footer>
                        <h2>Vegetable choice of a day</h2>
                        <h1>{this.state.vegetables}</h1>
                    </footer>
                </div>
           )
    }
    
};
export default Content;


