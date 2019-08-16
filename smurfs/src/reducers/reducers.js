import { EDIT_FORM, EDIT_SMURF_DATA_START, EDIT_SMURF_DATA_SUCCESS, EDIT_SMURF_DATA_FAILURE,DELETE_SMURF_DATA_START, DELETE_SMURF_DATA_SUCCESS, DELETE_SMURF_DATA_FAILURE, UPDATE_FORM, FETCH_SMURF_DATA_START, FETCH_SMURF_DATA_SUCCESS, FETCH_SMURF_DATA_FAILURE, ADD_SMURF_DATA_START, ADD_SMURF_DATA_SUCCESS, ADD_SMURF_DATA_FAILURE } from '../actions/actions';


const initialState = {
  isLoading: false,
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    },
  ],
  error: '',
  formData: {
    name: '',
    age: 0,
    height: ''
  },
  editFormData: {
    name: '',
    age: 0,
    height: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_FORM:
      return{
        ...state,
        editFormData: {
          ...state.editFormData,
          [action.payload.key]:action.payload.value
        }
      };
    case UPDATE_FORM:
      return{
        ...state,
        formData: {
          ...state.formData,
          [action.payload.key]:action.payload.value
        }
      };
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case FETCH_SMURF_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ''
      };
      case FETCH_SMURF_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
      case ADD_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case ADD_SMURF_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: [...state.smurfs, action.payload],
        error: ''
      };
      case ADD_SMURF_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
      case DELETE_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
      case DELETE_SMURF_DATA_SUCCESS:
      return{
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error:''
      }
      case DELETE_SMURF_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
  case EDIT_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
      case EDIT_SMURF_DATA_SUCCESS:
      return{
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error:''
      }
      case EDIT_SMURF_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  };
};

export default reducer;