import React from "react";
import data from "../employeedata";
import CardData from "../Components/Card/card";
import {
  Form,
  Segment,
  Checkbox,
  Button,
  Input,
  Card,
} from "semantic-ui-react";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import img1 from "../assets/conatctus.jpeg";
import Accordion from "react-bootstrap/Accordion";

function Contact() {
  return (
    <div>
      <Header />

      <div class="modal-body row">
        <div class="col-md-4">
          <Segment className="m-5">
            <img class="img-fluid" src={img1} />
          </Segment>

          <Segment className="m-5 p-5">
            <div style={{ height: "600px", color:"black"}}>
              <Card>
                <Card.Header>Item 1</Card.Header>
                <Card.Content>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Card.Content>
              </Card>
              <Card>
                <Card.Header>Item 2</Card.Header>
                <Card.Content>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Card.Content>
              </Card>
            </div>
          </Segment>
        </div>
        <div class="col-md-8">
          <Segment className="m-5">
            <h3 style={{ color: "black" }}>Mail us</h3>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" />
              </Form.Field>
              <Form.Field
                id="form-input-control-error-email"
                control={Input}
                label="Email"
                placeholder="joe@schmoe.com"
              />
              <Form.TextArea
                label="About"
                placeholder="Tell us more about you..."
              />
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
          <Segment inverted className="m-5">
            <div style={{ width: "100%" }}>
              <iframe
                width="100%"
                height="300px"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=360%20Huntington%20Ave,%20Boston,%20MA%2002115+(AI%20Solutions)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </Segment>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
