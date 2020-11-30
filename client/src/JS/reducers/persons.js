//import constants
import {
  GET_PERSONS_LOAD,
  GET_PERSONS_SUCCESS,
  GET_PERSONS_FAIL,
  GET_PERSON,
} from "../constants/persons";

//INITIAL STATE
const initialState = {
  persons: [],
  loadPersons: false,
  errors: null,

  user: {},
};

export const personReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PERSONS_LOAD:
      return { ...state, loadPersons: true };
    case GET_PERSONS_SUCCESS:
      return { ...state, persons: payload.response, loadPersons: false };
    case GET_PERSONS_FAIL:
      return { ...state, loadPersons: false, errors: payload };
    case GET_PERSON:
      return { ...state, user: payload };

    default:
      return state;
  }
};
