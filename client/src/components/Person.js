import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { deletePerson, getPerson } from "../JS/actions/persons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTrue } from "../JS/actions/edit";

const Person = ({ person }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>{person.name}</Card.Header>
          <Card.Meta>{person.age}</Card.Meta>
          <Card.Description>
            <ul>
              {" "}
              {person.favoriteFoods.map((el) => (
                <li style={{ listStyle: "none" }}>{el}</li>
              ))}
            </ul>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Link className="ui two buttons" to={`/edit/${person._id}`}>
              <Button
                basic
                color="green"
                onClick={() => {
                  dispatch(getPerson(person._id));
                  dispatch(toggleTrue());
                }}
                //54.49 video mern 2-
              >
                EDIT
              </Button>
            </Link>
            <Button
              basic
              color="red"
              onClick={() => dispatch(deletePerson(person._id))}
            >
              DELETE
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Person;
