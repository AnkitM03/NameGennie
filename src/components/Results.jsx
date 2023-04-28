import React from 'react'
import Name from './Name';
import './Results.css'

const Results = ({suggestedname}) => {

// your function to copy here

  


    const name =
        suggestedname.map((n) => {
            return <Name n={n} key={n} />
        });
    
  return  <div className='result-container' > {name} </div>
  
}

export default Results