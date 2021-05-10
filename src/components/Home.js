import React from 'react';
import {NavLink} from 'react-router-dom';

function Home() {
    return(
        <div style={{marginTop:150, display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            
            <div> 
            <img src="/images/beers.png" alt="" style={{width:'200px', height:'100px', borderRadius:'15px'}}/> 
            <h1> <NavLink style={{textDecoration: 'none'}} exact to='/beers'> All Beers  </NavLink> </h1>
            <p> Check out all our cool Beers ☠️ </p>
            </div>

            <div>
            <img src="/images/new-beer.png" alt="" style={{width:'200px', height:'100px', borderRadius:'15px'}}/> 
            <h1> <NavLink style={{textDecoration: 'none'}} exact to='/random-beer'> Random Beer </NavLink> </h1>
            <p> Looking for inspirations? Get a random beer 💡 </p>
            </div>
            
            <div> 
            <img src="/images/random-beer.png" alt="" style={{width:'200px', height:'100px', borderRadius:'15px'}}/> 
            <h1> <NavLink style={{textDecoration: 'none'}} exact to='/new-beer'> New Beer </NavLink> </h1>
            <p> Here you can also create your own beer, cool right? 🍺 </p>
            </div>
        </div>
    )
}

export default Home;