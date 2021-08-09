import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

function SignUp(props) {
    const [formState, setFormState] = useState({ email: '', password: '', firstName: "", lastName: "", age: "" });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { mutationResponse } = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
                age: formState.age,
            },
        });
        // const token = mutationResponse.data.addUser.token;
        Auth.login(mutationResponse.addUser.token);

        } catch (error) {
            console.log(error)
        }

        setFormState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            age: "",
        })
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
                    <label htmlFor="firstName">First Name: </label>
                    <input placeholder="Enter First Name" name="firstName" type="firstName" id="firstName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input placeholder="Enter Your Last Name" name="lastName" type="lastName" id="lastName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="age">Enter Your Age: </label>
                    <input placeholder="Enter Your Age" name="age" type="age" id="age" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Enter Your Email: </label>
                    <input placeholder="Enter Your Email" name="email" type="email" id="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="pwd">Password: </label>
                    <input placeholder="Please enter your password" name="password" type="password" id="pwd" onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;