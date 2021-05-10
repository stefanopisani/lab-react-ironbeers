import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

class NewBeer extends React.Component {
    state= {
        name: '',
        tagline: '',
        description: '',
        first_brewed: 0,
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''

    }

    handleChange = (event)=> {
        let {name, value, type, checked} = event.target;

        if(type === "checkbox"){
            value = checked;
        }

        this.setState({
           [name]: value
        })
    }

    addBeer = async (event) => {
        event.preventDefault();
        await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
       this.props.history.push('/beers')
    }

    // handleFormSubmit = (event) => {
        
    //     event.preventDefault();
    //     this.addBeer(event)
    // }

    render () {
        const{ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state
        return(
            <>
            <Navbar />
            <div style={{marginTop:50}}> 
                <form onSubmit={this.addBeer} style={{ display:'flex', flexDirection:'column', alignItems:'center', alignContent:'center'}} > 
                    <label>Name</label>
                    <input style={{margin:'10px'}} type="text" name="name" onChange={this.handleChange} value={name}/>

                    <label>Tagline</label>
                    <input style={{margin:'10px'}} type="text" name="tagline" onChange={this.handleChange} value={tagline}/>
                    
                    <label>Description</label>
                    <input style={{margin:'10px'}} type="text" name="description" onChange={this.handleChange} value={description}/>
                    
                    <label>First_brewed</label>
                    <input style={{margin:'10px'}} type="number" name="first_brewed" onChange={this.handleChange} value={first_brewed}/>
                    
                    <label>Brewers_tips</label>
                    <input style={{margin:'10px'}} type="text" name="brewers_tips" onChange={this.handleChange} value={brewers_tips}/>
                    
                    <label> Attenuation_level</label>
                    <input style={{margin:'10px'}} type="number" name="attenuation_level" onChange={this.handleChange} value={attenuation_level}/>
                    
                    <label> Contributed_by </label>
                    <input style={{margin:'10px'}} type="text" name="contributed_by" onChange={this.handleChange} value={contributed_by}/>

                    <button style={{margin:'10px', backgroundColor:'navy', color:'white', padding:'5px 10px', cursor:'pointer'}} type="submit"> ADD NEW </button>
                </form>
            </div>
            </>
        )
    }
}

export default NewBeer; 