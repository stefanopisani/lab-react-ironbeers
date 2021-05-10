import React from 'react';
// import {NavLink} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

class RandomBeer extends React.Component {
    state= {
        image: '',
        name: '',
        tagline:'',
        first_brewed: 0,
        attenuation_level: 0,
        description: '',
        contributed_by:'' 
    }

    async componentDidMount() {
        const beerFromAPI = await axios.get(
            `https://ih-beers-api2.herokuapp.com/beers/random`
        );
        this.setState({
            image: beerFromAPI.data.image_url,
            name: beerFromAPI.data.name,
            tagline: beerFromAPI.data.tagline,
            first_brewed: beerFromAPI.data.first_brewed,
            attenuation_level: beerFromAPI.data.attenuation_level,
            description: beerFromAPI.data.description,
            contributed_by: beerFromAPI.data.contributed_by
        })
        }   

    render () {

        const{image, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state

        return(
            <>
            <Navbar />
            <div style={{marginTop:100}}>
            <img src={image} alt="beer" style={{width:'50px', height:'120px'}}/>
            <h2> {name} </h2>
            <h3> {tagline}</h3>
            <p> <strong> Created by:</strong> {contributed_by}</p>
            <p> <strong> Attenuation Level:</strong> {attenuation_level}</p>
            <p> <strong> First brewed:</strong> {first_brewed}</p>
            <p> {description}</p>
            </div>
            </>
        )
    }
}

export default RandomBeer; 