import React, { useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, styled } from '@mui/material'
import { API } from '../service/api';
import { DataContext } from '../context/DataProvider';
// import set  from 'mongoose';
// import { signupser } from '../../../server/controller/user-controller';


const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`


const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0',
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction:column;
    & > div, & > button, & >p{
        margin-top:20px;
    }     
`

const Loginbutton = styled(Button)`
    text-transform:none;
    background:#FB641B;
    height:42px;
    border-radius:2px;
    // font-size:16px;
`

const Signupbutton = styled(Button)`
    text-transform:none;
    background:#fff;
    height:42px;
    color:2874f0;
    border-radius:2px;
    box-shadow: 0px 2px 4px 0px rgb(0 0 0/20%);
`

const Error = styled(Typography)`
    font-size:10px;
    line-height:0;
    margin-top:10px;
    color:#ff6161;
    font-weight:600;
`

const Text = styled(Typography)`
    color:#878787;
    font-size:14px; 
`
const loginInitialValues = {
    username: '',
    password: '',
}

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
}


const Login = ({ isUserAuthenticated }) => {
    const [Account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState('');
    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const toggleSignup = () => {
        Account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            setError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        }
        else {
            setError('something went wrong please try again later');
        }
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            setError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

            setAccount({ username: response.data.username, name: response.data.name });
            isUserAuthenticated(true);
            navigate('/')
        }
        else {
            setError('Something went wrong! please try again later');

        }

    }
    return (
        <Component>
            <Box>
                <Image src={imageURL} alt="login" />
                {
                    Account === 'login' ?
                        <Wrapper>
                            <TextField variant='standard' value={login.username} onChange={(e) => onValueChange(e)} name="username" label="Enter a username" />
                            <TextField variant='standard' value={login.password} onChange={(e) => onValueChange(e)} name="password" label="Enter a password" />
                            {error && <Error>{error}</Error>}
                            <Loginbutton variant='contained' onClick={() => loginUser()}>Login</Loginbutton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <Signupbutton onClick={() => toggleSignup()}>create an account</Signupbutton>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant='filled' onChange={(e) => onInputChange(e)} name="name" label="Enter a Name" />
                            <TextField variant='filled' onChange={(e) => onInputChange(e)} name="username" label="Enter a Username" />
                            <TextField variant='filled' onChange={(e) => onInputChange(e)} name="password" label="Enter a Password" />
                            {error && <Error>{error}</Error>}
                            <Signupbutton onClick={() => signupUser()}>Sign up</Signupbutton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <Loginbutton variant='contained' onClick={() => toggleSignup()}>Already have an account</Loginbutton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
}


export default Login;