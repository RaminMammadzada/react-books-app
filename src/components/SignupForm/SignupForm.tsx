
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useNavigate } from "react-router-dom";
import { register } from '../../store/actions/auth';;

const SignupForm = (props: any) => {
    const emptyUser = { usernameInput: '', emailInput: '', passwordInput: '' }
    const errorMessage = 'invalid credentials'

    const [formData, setFormData] = useState(emptyUser)
    const [credsAreInvalid, setCredsAreInvalid] = useState('')
    const [usernameColor, setUsernameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    
    const { message } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleInputChange = (event: any) => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = (event: any) => {
        event.preventDefault()

        let newUser = {
            username: formData.usernameInput,
            email: formData.emailInput,
            password: formData.passwordInput
        }
        if (validateUserInput(newUser)) {
            console.log('registerd');
            dispatch(register(newUser));
            setFormData(emptyUser);
            navigate('/login');
        } else {
            setCredsAreInvalid(errorMessage)
        }
    }

    const validateUserInput = ({ username, email, password }: any) => {
        let isValid = true;

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

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group>
                <Form.Text className="text-danger warning">
                    {credsAreInvalid}
                </Form.Text>
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

            <Form.Group className='mt-3 d-flex justify-content-between'>
              <Button variant="primary" type="submit">Register</Button>
              <div>
                <Form.Text>
                      Have an account already ?
                </Form.Text>
                <Button className='m-1' onClick={e => {
                    e.preventDefault();
                    navigate('/login');
                }}>Login</Button>
              </div>
            </Form.Group>
        </Form>
    )
}

export default SignupForm;