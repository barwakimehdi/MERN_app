import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { editPerson, postPerson } from "../JS/actions/persons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [favoriteFoods, setfavoriteFoods] = useState(["hrissa"]);

  const userReducer = useSelector((state) => state.personReducer.user);
  console.log(userReducer);
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();

  useEffect(() => {
    if (edit) {
      setName(userReducer.name);
      setage(userReducer.age);
      setfavoriteFoods(userReducer.favoriteFoods);
    } else {
      setName("");
      setage("");
      setfavoriteFoods(["hrissa"]);
    }
  }, [edit, userReducer, favoriteFoods]);

  const handlePerson = (e) => {
    e.preventDefault();
    if (!edit) {
      dispatch(postPerson({ name, age, favoriteFoods }));
    } else {
      dispatch(editPerson(userReducer._id, { name, age, favoriteFoods }));
    }
  };

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };
  const handleClick = (e) => {
    e.preventDefault();
    setfavoriteFoods([...favoriteFoods, ""]);
  };
  const handleFood = (e) => {
    e.preventDefault();
    let index = e.target.name[4];
    let newFoods = favoriteFoods.map((el, i) =>
      i == index ? (el = e.target.value) : el
    );
    setfavoriteFoods(newFoods);
  };
  return (
    <div>
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input
            value={name} //pas la meme couleur que la video 1:38min
            label=" name"
            placeholder=" name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input
            value={age}
            label="age"
            placeholder="age"
            name="age"
            onChange={(e) => setage(e.target.value)}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {favoriteFoods.map((el, i) => (
              <Form.Input
                key={i}
                className="foods"
                value={el}
                label="favoriteFoods"
                placeholder="favoriteFoods"
                name={`food${i}`}
                onChange={handleFood}
              />
            ))}
          </div>
          <Button onClick={handleClick}>+</Button>
        </Form.Group>

        <Button type="submit" onClick={handlePerson}>
          <Link to="/">{edit ? "Edit" : "Save"}</Link>
        </Button>
      </Form>
    </div>
  );
};

export default Add;
