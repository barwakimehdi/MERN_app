import {
  GET_PERSONS_LOAD,
  GET_PERSONS_SUCCESS,
  GET_PERSONS_FAIL,
  GET_PERSON,
} from "../constants/persons";
import axios from "axios";

export const getPersons = () => async (dispatch) => {
  dispatch({ type: GET_PERSONS_LOAD });
  try {
    let result = await axios.get("/api/person/");
    dispatch({ type: GET_PERSONS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_PERSONS_FAIL, payload: error });
  }
};
export const deletePerson = (id) => (dispatch) => {
  axios
    .delete(`/api/person/${id}`)
    .then((res) => dispatch(getPersons()))
    .catch((err) => console.log(err));
};

export const getPerson = (id) => (dispatch) => {
  axios
    .get(`/api/person/${id}`)
    .then((res) => dispatch({ type: GET_PERSON, payload: res.data.response }))
    .catch((err) => console.log(err));
};

export const postPerson = (user) => (dispatch) => {
  axios
    .post(`/api/person/`, user)
    .then((res) => dispatch(getPersons()))
    .catch((err) => console.log(err));
};

export const editPerson = (id, user) => (dispatch) => {
  axios
    .put(`/api/person/${id}`, user)
    .then((res) => dispatch(getPersons()))
    .catch((err) => console.log(err));
};
