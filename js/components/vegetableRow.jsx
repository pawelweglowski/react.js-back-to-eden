import React from 'react';
import ReactDOM from 'react-dom';

class VegetableRow extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            vegetables: []
        };
    };
    //ten fetch pokazuje wszystkie znajdujące się w DB pozycje i to wykorzyzstam jak już user będzie miał dodane pozycje do swojego ogródka
    componentDidMount() {
        let url = "http://localhost:3000/vegetables";
        fetch(url)
            .then(resp => resp.json())
            
            .then(data => {
            let raw = data;
            let vegetables = data.map((vegetable, index) => {
                return (
                    <div key={index}>
                        <img src={vegetable.image}></img>
                        <h3>{vegetable.nazwa}</h3>
                        <h5>{vegetable.wymagania}</h5>
                        <p>{vegetable.wysiew.termin}</p>
                    </div>
                )
            })
            this.setState({vegetables: vegetables,
                          raw: raw})
            
        })
        console.log(this.state.vegetables);
        console.log(this.state.raw);
    }
    
    render(){
        return (
            <div className="vegetables">
               {this.state.vegetables}
            </div>
           )
    }
    
};
export default VegetableRow;

/*document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <VegetableRow/>,
        document.getElementById('app')
    );
});*/