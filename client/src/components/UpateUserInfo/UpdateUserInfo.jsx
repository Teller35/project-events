import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_USER } from "../../utils/mutations";


const UpdateUserInfo = () => {
    const [formState, setFormState] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: "",
    })
    const [updateUser, { error }] = useMutation(UPDATE_USER);
    const [showAlert, setShowAlert] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await updateUser({
            variables: { ...formState },
          });
         
          Auth.login(data.updateUser.token);
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
          <h2>Update User Information</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="username">Update Username: </label>
              <input
                placeholder="Username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="firstName">Update First Name: </label>
              <input
                placeholder="First Name"
                name="firstName"
                type="firstName"
                id="firstName"
                value={formState.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Update Last Name: </label>
              <input
                placeholder="Last Name"
                name="lastName"
                type="lastName"
                id="lastName"
                value={formState.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="age">Update Age: </label>
              <input
                placeholder="Age"
                name="age"
                type="age"
                id="age"
                value={formState.age}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Update Email: </label>
              <input
                placeholder="Email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="pwd">Update Password: </label>
              <input
                placeholder="password"
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
          {error && <div>Update failed!</div>}
        </div>
      );
}
export default UpdateUserInfo;