import React, { Component, } from 'react'
import { Grid, Cell } from 'react-mdl'
import profilePic from './profilepic.jpeg'

class About extends Component {
  render() {
    return(
      <div className='aboutme-body' >
        <Grid className='aboutme-grid' >
          <Cell col={6} >
            <h1>About me</h1>
            <hr />
            <br />
            <img src={profilePic} alt='profile pic' width='620px' height='610px' />
          </Cell>
          <Cell col={6} >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1> I like coding, traveling   </h1> 
            <h1>AND
              <h1> having a positive attitude</h1>
            </h1>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About 