import React from 'react'

class Anagram extends React.Component {

    render() {
        
            console.log(this.props.anagram)
        return(
          <>
            
             
              <h3 style={{color: 'orange'}}>{this.props.anagram}</h3> 
             
            
            </>
        
        )
      
    }
}

export default Anagram;
