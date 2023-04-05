import React from "react";
import { Card, Segment, Message } from "semantic-ui-react";
import data from "../../employeedata";
import { Button } from "react-bootstrap";

export default function CardData() {
  return (
    <>
      <Message className="m-5">
        <Message.Header>About Our Team</Message.Header>
      </Message>

      {data.map((user) => (
        <div
          style={{
            textAlign: "center",
          }}
          className="mb-3"
        >
          <Card>
            <Card.Content className="m-5">
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta className="p-2 bold">
                <h5>{user.role}</h5>
              </Card.Meta>
              <h6 classname="m-5" style={{ color: "black" }}>
                Description
              </h6>
              <Card.Description>{user.jobdescription}</Card.Description>
            </Card.Content>
            <Segment>
              <Button variant="success">Mail us</Button>
            </Segment>
          </Card>
        </div>
      ))}
    </>
  );
}
