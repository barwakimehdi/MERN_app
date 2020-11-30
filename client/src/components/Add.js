import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useSelector } from "react-redux";

const Add = () => {
  const [user, setUser] = useState({ name: "", age: "", favoritefoods: "" });
  const userReducer = useSelector((state) => state.personReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);

  useEffect(() => {
    edit
      ? setUser(userReducer)
      : setUser({ name: "", age: "", favoritefoods: "" });
  }, [edit, userReducer]);
  return (
    <div>
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input label=" name" placeholder=" name" />
          <Form.Input label="age" placeholder="age" />
          <Form.Input label="favorite food" placeholder="favorite food" />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Add;
