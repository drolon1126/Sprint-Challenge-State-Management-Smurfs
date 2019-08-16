import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {deleteSmurf, formEdit, editSmurf, formEditStart} from '../actions/actions';

const Smurf = props => {
  const [isEditing, setIsEditing] = useState(false);
  const formData = useSelector(state=>state.editFormData);
  const dispatch = useDispatch();

  const updateForm = e => {
    dispatch(formEdit(e.target.name,e.target.value));
  }

  if(!isEditing){
  return(
    <>
    <h2>{props.smurf.name}</h2>
    <h3>{props.smurf.age}</h3>
    <h3>{props.smurf.height}</h3>
    <button onClick={e=>{
      e.preventDefault();
      dispatch(formEdit('name',props.smurf.name));
      dispatch(formEdit('age',props.smurf.age));
      dispatch(formEdit('height',props.smurf.height));
      setIsEditing(true);
    }}>Edit</button>
    <button onClick={e=>{
      e.preventDefault();
      dispatch(deleteSmurf(props.smurf.id));
    }}>Delete</button>
    </>
  );
} else{
  return(
    <form onSubmit={e=>{
      e.preventDefault();
      dispatch(editSmurf(props.smurf.id,formData));
      setIsEditing(false);
      }}>
      <div>
        <label htmlFor='ename'>Name:</label>
      <input
        type='text'
        value={formData.name}
        name='name'
        id='ename'
        onChange={updateForm}
      />
      </div>
      <div>
      <label htmlFor='age'>Age:</label>
      <input
        type='number'
        value={formData.age}
        name='age'
        id='eage'
        onChange={updateForm}
      />
      </div>
      <div>
      <label htmlFor='height'>Height:</label>
      <input
        type='text'
        value={formData.height}
        name='height'
        id='eheight'
        onChange={updateForm}
      />
      </div>
      <button>Edit Smurf</button>
    </form>
  );
}
}

export default Smurf;