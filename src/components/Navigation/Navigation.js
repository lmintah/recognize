import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
    return (
      <nav style={{display: 'flex',justifyContent: 'flex-end'}}>
         <p className='f4 link dim pa3 pointer'>
         Sign Out</p>
      </nav>
   );
  } else {
    return (
      <nav style={{display: 'flex',justifyContent: 'flex-end'}}>
         <p id="bye" className='f4 link dim pa3 pointer'>
         Sign In</p>
         <p id="pce" className='f4 link dim pa3 pointer'>
         Register</p>
      </nav>
   );
  }
}

export default Navigation;
