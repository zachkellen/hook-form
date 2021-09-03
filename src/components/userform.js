import Reac, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type='text' onChange={(event) => setFirstName(event.target.value)}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type='text' onChange={(event) => setLastName(event.target.value)}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type='text' onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type='password' onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type='password' onChange={(event) => setConfirmPassword(event.target.value)}/>
                </div>
            </form>
            <div>
                <p>Your Name is {firstName} {lastName}</p>
                <p>Your Email is {email}</p>
                <p>Your Password is {password}</p>
                <p>Your Confirm Password is {confirmPassword}</p>
            </div>
        </div>

    )
}
export default UserForm;