import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            // const token = mutationResponse.data.login.token;
            Auth.login(data.login.token);
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
                    <input placeholder="Enter Your Email" name="email" type="email"  onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input placeholder="Enter Your Password" name="password" type="password"  onChange={handleChange} />
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