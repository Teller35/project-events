import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

function SignUp(props) {
  const [formState, setFormState] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            placeholder="Enter a Username"
            name="username"
            type="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            placeholder="Enter First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            placeholder="Enter Your Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Enter Your Age: </label>
          <input
            placeholder="Enter Your Age"
            name="age"
            type="age"
            id="age"
            value={formState.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Enter Your Email: </label>
          <input
            placeholder="Enter Your Email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pwd">Password: </label>
          <input
            placeholder="Please enter your password"
            name="password"
            type="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <div>Sign Up failed!</div>}
    </div>
  );
}

export default SignUp;
