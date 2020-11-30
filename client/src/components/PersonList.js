import React, { useEffect } from "react";
import { getPersons } from "../JS/actions/persons";
import { useDispatch, useSelector } from "react-redux";
import Person from "./Person";

const PersonList = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.personReducer.persons);
  const loadPersons = useSelector((state) => state.personReducer.loadPersons);
  // console.log(persons, loadPersons);
  useEffect(() => {
    dispatch(getPersons());
  }, []);
  return (
    <div className="cardStyle">
      {loadPersons ? (
        <h2>Loading</h2>
      ) : (
        persons.map((el) => <Person key={el._id} person={el} />)
      )}
    </div>
  );
};

export default PersonList;
