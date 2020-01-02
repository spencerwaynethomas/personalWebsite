import React, { Component, } from 'react'
import { Grid, Cell, } from 'react-mdl'
import Emma from "./emma.jpeg"



class Landing extends Component {
  render() {
    return(
      <div style={{ width: '100%', margin: 'auto' }} >
         <Grid className="landing-grid" >
           <Cell col={12} >
             <img 
             src={Emma}
             alt="avatar"
             className="avatar-img"
             />

              <div className="banner-text" >
                <h1> Spencer Thomas Web Development </h1>

                <hr /> 
                <p> | HTML/CSS | Ruby on rails | Javascript | React | </p>
                
                <div className="social-links" >

                    {/* github */}
                  <a href="https://github.com/spencerwaynethomas" rel="noopener noreferrer" target="_blank" >
                    <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                    {/* freecodecamp */}
                  <a href="https://www.freecodecamp.org/spencer-wayne-thomas" rel="noopener noreferrer" target="_blank" >
                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                    </a>

                    {/* linkedin */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                </div>
              </div>

           </Cell>
           </Grid> 
      </div>
    )
  }
}

export default Landing 