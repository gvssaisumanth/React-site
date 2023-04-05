import React, { useState } from "react";
import { Form, Input, Button, Segment, Message } from "semantic-ui-react";
import axios from "axios";
import "./login.css";
import { Route, useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [islogged, setLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");

  function nameValidations(name) {
    const validPattern = /^[a-zA-Z0-9._%+-]+@northeastern+\.edu$/;

    if (name.trim().match(validPattern)) {
      return true;
    } else {
      let message = "Enter valid email adress";
      setError(message);
      return false;
    }
  }

  function changePassword(e) {
    let pass = e.target.value;
    setPassword(pass);
  }

  function changeName(e) {
    let user = e.target.value;
    if (nameValidations(user)) {
      setUserName(user);
    }
  }

  function changeError() {
    setError("");
  }

  async function checkUser() {
    const userDetails = {
      name: userName,
      password: password,
    };

    let findUser = await axios.post(
      "http://localhost:3001/user/findUser",
      userDetails
    );
    console.log("findUser", findUser.data.user);
    try {
      if (findUser.data.user) {
        setLogged(true);
        setIsLoggedIn(true);
        navigate("/home");
      } else {
        console.log(findUser.data.user);
        setError("User Not Found");
      }
    } catch (err) {
      if (err.response) {
        console.error("Request failed with status code:", err.response.status);
        console.error("Response data:", err.response.data);
        // You can set the error message based on the status code or response data
        setError("An error occurred while fetching the user");
      } else {
        console.error("Error:", err.message);
        setError("An unexpected error occurred");
      }
    }
  }
  return (
    <div className="centered">
      <Form>
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="joe@northeastern.edu"
          onChange={changeName}
          onFocus={changeError}
        />
        {err === "Enter valid email adress" ? (
          <Message
            style={{ border: "1px solid red" }}
            header="Could you check email Address!"
            list={["That e-mail is not a northeastern e-mail Id."]}
          />
        ) : (
          " "
        )}

        <Form.Field
          id="form-input-control-password"
          control={Input}
          label="Password"
          placeholder="Password"
          type="password"
          onChange={changePassword}
        />

        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Submit"
          onClick={checkUser}
        />
      </Form>
      {err === "User Not Found" ? (
        <Message
          style={{ border: "1px solid red" }}
          header="User is not registered"
        />
      ) : (
        " "
      )}
    </div>
  );
};

export default Login;
