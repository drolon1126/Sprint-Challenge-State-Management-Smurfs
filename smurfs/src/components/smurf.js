import React from 'react';

const Smurf = props => {

  return(
    <>
    <h2>{props.smurf.name}</h2>
    <h3>{props.smurf.age}</h3>
    <h3>{props.smurf.height}</h3>
    </>
  );
}

export default Smurf;