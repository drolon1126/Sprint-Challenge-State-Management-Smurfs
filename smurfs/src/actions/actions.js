import axios from 'axios';

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

export const ADD_SMURF_DATA_START = 'ADD_SMURF_DATA_START';
export const ADD_SMURF_DATA_SUCCESS = 'ADD_SMURF_DATA_SUCCESS';
export const ADD_SMURF_DATA_FAILURE = 'ADD_SMURF_DATA_FAILURE';

export const UPDATE_FORM = 'UPDATE_FORM';




export const addSmurf = smurf =>{
  return dispatch => {
    dispatch({ type: ADD_SMURF_DATA_START });
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        console.log(res);
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
        console.log(res);
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