import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {addSmurf, formUpdate} from '../actions/actions';

const SmurfForm = () => {
  const formData = useSelector(state=>state.formData);
  const dispatch = useDispatch();

  const updateForm = e => {
    dispatch(formUpdate(e.target.name,e.target.value));
  }

  return(
    <form onSubmit={e=>{
      e.preventDefault();
      dispatch(addSmurf({
        ...formData,
        id: Date.now()
      }));
      }}>
      <div>
        <label htmlFor='name'>Name:</label>
      <input
        type='text'
        value={formData.name}
        name='name'
        id='name'
        onChange={updateForm}
      />
      </div>
      <div>
      <label htmlFor='age'>Age:</label>
      <input
        type='number'
        value={formData.age}
        name='age'
        id='age'
        onChange={updateForm}
      />
      </div>
      <div>
      <label htmlFor='height'>Height:</label>
      <input
        type='text'
        value={formData.height}
        name='height'
        id='height'
        onChange={updateForm}
      />
      </div>
      <button>Add Smurf</button>
    </form>
  );
}

export default SmurfForm;