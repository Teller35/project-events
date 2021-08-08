import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.prevent();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
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
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Enter Your Email" name="email" type="email" id="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input placeholder="Enter Your Password" name="password" type="password" id="pwd" onChange={handleChange} />
                </div>
                {error ? (
                    <div>
                        <p>Please enter the correct account information.</p>
                    </div>
                ): null}
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;