import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getSmurfs} from '../actions/actions';

import Smurf from './smurf';

const SmurfList = () => {
  const smurfs = useSelector(state=>state.smurfs);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getSmurfs());
  },[])
  

  return (
    <>
    <h2>Smurfs in Smurf Village:</h2>
    {smurfs && 
    smurfs.map(smurf=>
      <Smurf key={smurf.id} smurf={smurf} />
    )}
    </>
  );
}

export default SmurfList;