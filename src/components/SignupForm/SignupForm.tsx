
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Axios from 'axios';

const SignupForm = (props: any) => {
    const emptyUser = { firstNameInput: '', lastNameInput: '', usernameInput: '', emailInput: '', passwordInput: '' }
    const errorMessage = 'invalid credentials'

    const [formData, setFormData] = useState(emptyUser)
    const [credsAreInvalid, setCredsAreInvalid] = useState('')
    const [firstNameColor, setFirstNameColor] = useState('')
    const [lastNameColor, setLastNameColor] = useState('')
    const [usernameColor, setUsernameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')

    const handleInputChange = (event: any) => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = (event: any) => {
        event.preventDefault()

        let newUser = {
            firstName: formData.firstNameInput,
            lastName: formData.lastNameInput,
            username: formData.usernameInput,
            email: formData.emailInput,
            password: formData.passwordInput
        }
        if (validateUserInput(newUser)) {
            postNewUser(newUser)
            setFormData(emptyUser)
        } else {
            setCredsAreInvalid(errorMessage)
        }
    }

    const validateUserInput = ({ firstName, lastName, username, email, password }: any) => {
        let isValid = true;

        if (!firstName) {
            setFirstNameColor('text-danger')
            isValid = false;
        } else {
            setFirstNameColor('')
        }

        if (!lastName) {
            setLastNameColor('text-danger')
            isValid = false;
        } else {
            setLastNameColor('')
        }

        if (!username) {
            setUsernameColor('text-danger')
            isValid = false;
        } else {
            setUsernameColor('')
        }

        if (!email) {
            setEmailColor('text-danger')
            isValid = false;
        } else {
            setEmailColor('')
        }

        if (!password) {
            setPasswordColor('text-danger')
            isValid = false;
        } else {
            setPasswordColor('')
        }

        return isValid;
    }

    const postNewUser = (newUser: any) => {
        Axios.post('http://localhost:4000/auth/signup', newUser)
            .then(() => {
                // props.history.push('/login')
                console.log('registerd');
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="inputFirstName">
                <Form.Label className={firstNameColor}>FirstName</Form.Label>
                <Form.Control name="firstNameInput" type="text" placeholder="" value={formData.firstNameInput} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="inputLastName">
                <Form.Label className={lastNameColor}>LastName</Form.Label>
                <Form.Control name="lastNameInput" type="text" placeholder="" value={formData.lastNameInput} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="username">
                <Form.Label className={usernameColor}>Username</Form.Label>
                <Form.Control name="usernameInput" type="text" placeholder="" value={formData.usernameInput} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="emailInput">
                <Form.Label className={emailColor}>Email address</Form.Label>
                <Form.Control name="emailInput" type="email" placeholder="Enter email" value={formData.emailInput} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="inputPassword">
                <Form.Label className={passwordColor}>Password</Form.Label>
                <Form.Control name="passwordInput" type="password" placeholder="Password" value={formData.passwordInput} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
                <Form.Text className="text-danger">
                    {credsAreInvalid}
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button className='m-1' onClick={e => {
                e.preventDefault();
                props.history.push('/')
            }}>Home</Button>
        </Form>
    )
}

export default SignupForm;