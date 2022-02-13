
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useNavigate } from "react-router-dom";
import { login } from '../../store/actions/auth';
import './LoginForm.scss';

const LoginForm = (props: any) => {
    const emptyUser = { usernameInput: '', passwordInput: '' }
    const errorMessage = 'invalid credentials'

    const [formData, setFormData] = useState(emptyUser)
    const [credsAreInvalid, setCredsAreInvalid] = useState('')
    const [usernameColor, setUsernameColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    
    const { message } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleInputChange = (event: any) => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = async (event: any) => {
        event.preventDefault()

        let userData = {
            username: formData.usernameInput,
            password: formData.passwordInput
        }
        if (validateUserInput(userData)) {
            console.log('signed in');
            await dispatch(login(userData));
            setFormData(emptyUser);
            navigate('/books');
        } else {
            setCredsAreInvalid(errorMessage)
        }
    }

    const validateUserInput = ({ username, password }: any) => {
        let isValid = true;

        if (!username) {
            setUsernameColor('text-danger')
            isValid = false;
        } else {
            setUsernameColor('')
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
                <Form.Text className="text-danger warning-text">
                    {message["message"]} 
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Text className="text-danger warning-text">
                    {credsAreInvalid}
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="username">
                <Form.Label className={usernameColor}>Username</Form.Label>
                <Form.Control name="usernameInput" type="text" placeholder="" value={formData.usernameInput} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="inputPassword">
                <Form.Label className={passwordColor}>Password</Form.Label>
                <Form.Control name="passwordInput" type="password" placeholder="Password" value={formData.passwordInput} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="submit">Login
                </Button>
            </Form.Group>
            <Form.Group>
                <Form.Text>
                    You can click also signup by clicking here.
                </Form.Text>
                <Button className='m-1' onClick={e => {
                  e.preventDefault();
                  navigate('/signup');
                }}>Signup</Button>
            </Form.Group>
        </Form>
    )
}

export default LoginForm;