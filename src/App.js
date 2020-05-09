import React from 'react';
import Profile from './profile/Profile'
import myImage from './ahmed.jpg'

import './App.css';

function App() {
  const commonProps= {FullName:'Ben Alaya Ahmed',
                      Bio:'https://www.linkedin.com/in/ahmed-ben-alaya-26454b193/', 
                      Profession:'Technicien Superieur en Science et Technologies de l’Information et de la Communications'
                     };
const handleName=()=>{
    alert('Ben Alaya Ahmed')
  }

  return (
      <Profile data={commonProps} hand={handleName()} > <img src={myImage} /> </Profile>
  );
}

export default App;
