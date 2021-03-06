import { GET_TEACHERS, ADD_TEACHER, DELETE_TEACHER, TEACHERS_LOADING } from "../types";

const initialState = {
  teachers: [],
  loading: false,
  message: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload.data,
        loading: false,
        message: action.payload.message
      };
    case DELETE_TEACHER:
      return {
        ...state,
        teachers: state.teachers.filter(
          teacher => teacher._id !== action.payload
        )
      };
    case ADD_TEACHER:
      return {
        ...state,
        teachers: [action.payload.data, ...state.teachers]
      };
    case TEACHERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
