import axios from 'axios';

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

export const ADD_SMURF_DATA_START = 'ADD_SMURF_DATA_START';
export const ADD_SMURF_DATA_SUCCESS = 'ADD_SMURF_DATA_SUCCESS';
export const ADD_SMURF_DATA_FAILURE = 'ADD_SMURF_DATA_FAILURE';

export const UPDATE_FORM = 'UPDATE_FORM';
export const EDIT_FORM = 'EDIT_FORM';

export const DELETE_SMURF_DATA_START = 'DELETE_SMURF_DATA_START';
export const DELETE_SMURF_DATA_SUCCESS = 'DELETE_SMURF_DATA_SUCCESS';
export const DELETE_SMURF_DATA_FAILURE = 'DELETE_SMURF_DATA_FAILURE';

export const EDIT_SMURF_DATA_START = 'EDIT_SMURF_DATA_START';
export const EDIT_SMURF_DATA_SUCCESS = 'EDIT_SMURF_DATA_SUCCESS';
export const EDIT_SMURF_DATA_FAILURE = 'EDIT_SMURF_DATA_FAILURE';




export const addSmurf = smurf =>{
  return dispatch => {
    dispatch({ type: ADD_SMURF_DATA_START });
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        console.log('hi',res);
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
      });
  };
};

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log('hi2',res);
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
      });
  };
};

export const formUpdate = (key,value) => {
  return {
    type: UPDATE_FORM,
    payload: {key:key,value:value}
  }
}

export const formEdit = (key,value) => {
  return {
    type: EDIT_FORM,
    payload: {key:key,value:value}
  }
}

export const deleteSmurf = (id) => {
  return dispatch => {
    dispatch({ type: DELETE_SMURF_DATA_START });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log('hi3',res);
        dispatch({ type: DELETE_SMURF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: DELETE_SMURF_DATA_FAILURE, payload: err.response });
      });
  };
}

export const editSmurf = (id, smurfData) => {
  return dispatch => {
    dispatch({ type: EDIT_SMURF_DATA_START });
    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurfData)
      .then(res => {
        console.log('hi4',res);
        dispatch({ type: EDIT_SMURF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: EDIT_SMURF_DATA_FAILURE, payload: err.response });
      });
  };
}