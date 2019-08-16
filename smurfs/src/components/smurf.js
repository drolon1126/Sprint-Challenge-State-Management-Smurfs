import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {deleteSmurf} from '../actions/actions';

const Smurf = props => {
  const editForm  = useSelector(state=>state.editFormData);
  const isEditing  = useSelector(state=>state.isEditing);
  const dispatch = useDispatch();

  return(
    <>
    <h2>{props.smurf.name}</h2>
    <h3>{props.smurf.age}</h3>
    <h3>{props.smurf.height}</h3>
    <button onCLick={e=>{
      e.preventDefault();
    }}>Edit</button>
    <button onClick={e=>{
      e.preventDefault();
      dispatch(deleteSmurf(props.smurf.id));
    }}>Delete</button>
    </>
  );
}

export default Smurf;