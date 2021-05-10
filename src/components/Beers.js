import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

class Beers extends React.Component {
    state= {
        beers: [],
        filteredBeers: [],
        searchKeyword:''
    }

    async componentDidMount() {
        const resultAPI = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        this.setState({
            beers: resultAPI.data,
            filteredBeers: resultAPI.data
        })
     }
    
     handleSearch = (event) => {
        this.setState({
          searchKeyword: event.target.value,
          filteredBeers: this.state.beers.filter((beer)=> 
          beer.name.toLowerCase()
          .startsWith(event.target.value.toLowerCase()))
          });
       }

    render () {
        return(
            <>
            <Navbar />
            
            <div> 
            <input onChange={this.handleSearch} placeholder=" 🍻 Search Beers 🍺 " />
            </div>

            <div style={{marginTop:100}}>
                {this.state.filteredBeers.map((beer, index) => {
                    return(
                        <>
                        <img src={beer.image_url} alt="beer" style={{width:'50px', height:'120px'}}/>
                        <h2 key={index}> <NavLink style={{textDecoration: 'none', color:'black'}} to={`beers/${beer._id}`}> {beer.name} </NavLink> </h2>
                        <h3> {beer.tagline}</h3>
                        <p> <strong> Created by:</strong> {beer.contributed_by}</p>
                        <hr/>
                        </>
                    )
                })}
            </div>
            </>
        )
    }
}

export default Beers; 