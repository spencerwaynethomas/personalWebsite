import React, { Component, } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent, } from 'react-mdl'
import Emma from "./emma.jpeg"

class Contact extends Component {
  render() {
    return(
      <div className="contact-body" >
        <Grid className="contact-grid" >
          <Cell col={6} >
            <h2>Spencer Thomas</h2>
            <img  src={Emma}
            alt="avatar"
            style={{height: '200px'}}
             />
             <h4 style={{width: '75%', margin: 'auto', paddingTop: '1em'}} >
               My goal is to find an entry level job to sharpen my skill and build interesting, and helpful projects 
             </h4>
          </Cell>
          <Cell col={6} >
            <h2>Contact Me</h2>
            <hr />
            <List >

              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Allan'  }} icon="email"  >spencer.w.thomas22@gmail.com</ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Allan'}} icon="phone">(801)574-6540</ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent  style={{fontSize: '25px', fontFamily: 'Allan'}} icon="home">Salt Lake City, Ut</ListItemContent>
              </ListItem>

            </List>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact; 