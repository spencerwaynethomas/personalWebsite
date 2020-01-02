import React, { Component, } from 'react'
import Logo from "./resumePic.png"

class Resume extends Component {
  render() {
    return(
      <div className="resume-img"style={{width: '75%', margin: 'auto', paddingTop: '1em'}} >
        <img  id="myResume" src={Logo} alt="resume" />
        
      </div>
    )
  }
}

export default Resume 
