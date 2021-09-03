import Reac, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
        if(event.target.value.length < 2) {
            setFirstNameError('First name must be longer than 2 characters')
        } else {
            setFirstNameError('')
        }
    }

    const handleLastName = (event) => {
        setLastName(event.target.value)
        if(event.target.value.length < 2) {
            setLastNameError('Last name must be longer than 2 characters')
        } else {
            setLastNameError('')
        }
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
        if(event.target.value.length < 5) {
            setEmailError('Email must be longer than 5 characters')
        } else {
            setEmailError('')
        }
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
        if(event.target.value.length < 8) {
            setPasswordError('Password must be longer than 8 characters')
        } else {
            setPasswordError('')
        }
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
        if(event.target.value != password) {
            setConfirmPasswordError('Your passwords do not match!')
        } else {
            setConfirmPasswordError('')
        }
    }

    return (
        <div>
            <form className = 'form'>
                <div>
                    <label>First Name: </label>
                    <input type='text' onChange={handleFirstName} name='firstName'/>
                    { firstNameError && firstName.length !== 0 && "Name must have at least 3 characters!"}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type='text' onChange={handleLastName}/>
                    { lastNameError ?
                    <p style={{color:'red'}}>{lastNameError}</p> : ''}
                </div>
                <div>
                    <label>Email: </label>
                    <input type='text' onChange={handleEmail}/>
                    { emailError ?
                    <p style={{color:'red'}}>{emailError}</p> : ''}
                </div>
                <div>
                    <label>Password: </label>
                    <input type='password' onChange={(handlePassword)}/>
                    { passwordError ?
                    <p style={{color:'red'}}>{passwordError}</p> : ''}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type='password' onChange={handleConfirmPassword}/>
                    { confirmPasswordError ?
                    <p style={{color:'red'}}>{confirmPasswordError}</p> : ''}
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