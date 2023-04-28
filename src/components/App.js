import { useState } from 'react';
import './App.css';
import Header from './Header';
import Searchbar from './Searchbar';
import Results from './Results';

function App() {
  const name = require('@rstacruz/startup-name-generator');
  const[headerexp, setHeaderexp] = useState(true);
  const[suggestedname, setSuggestedname] = useState([]);
  
  function changeHandler (text) {
    setSuggestedname(text ? name(text) : []);
    setHeaderexp(!text);
  };

  return (
    <div>
      <Header headerexp={headerexp}/>
      <Searchbar changeHandler={changeHandler}/>
      <Results suggestedname={suggestedname}/>
    </div>
  );
}

export default App;
