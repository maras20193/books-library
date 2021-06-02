import { Box, Button, Divider, Link, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import createTypography from '@material-ui/core/styles/createTypography';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'

const useStyles = makeStyles({
    wrapper: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(245,245,245)',
        padding: '20px 50px'

    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
    pointer: {
        cursor: 'pointer'
    }

});

const Login = ({type}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const classes = useStyles();
    const history = useHistory();

    const {currentUser,
        signup,
        login,
    } = useAuth();

    const variant = {
        title: 'Log in',
        message: "Don't have an account?",
        linkMessage: 'Sign up here :)',
        linkPath: '/signup'
    }
    if (type === 'signup'){
        variant.title = 'Sign up';
        variant.message = 'Already have an account?';
        variant.linkMessage = 'Log in here :)';
        variant.linkPath = '/login'
    }

    async function handleLogin() {
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            history.push('/')
        } catch {
            setError('Failed to log in!')
        }
        setLoading(false)
        
    }

    async function handleSignup() {
        if (password !== confirmPassword) {
            return setError('Passwords do not match!')
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password);
            history.push('/')
        } catch {
            setError('Failed to sign up!')
        }
        setLoading(false)
        

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (type === 'signup') {
            handleSignup()
        } else {
            handleLogin()
        }


    }


    return (
        <Paper className={classes.wrapper}>
            <form 
            onSubmit={handleSubmit}
            className={classes.form}
            action="submit"
            autoComplete='off'>
                <Typography 
                variant='h4'
                color="textSecondary"
                align='center'
                gutterBottom
                >
                    {variant.title}
                </Typography>
                {error && <div>{error}</div>}
                <TextField 
                className={classes.field}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Login" 
                variant="outlined"
                color="primary"
                required
                />

                <TextField 
                className={classes.field}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password" 
                variant="outlined"
                color="primary"
                type='password'
                required
                />
                {type === 'signup'
                    && <TextField 
                    className={classes.field}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    label="Confirm Password" 
                    variant="outlined"
                    color="primary"
                    type='password'
                    required
                    />}
                <Button
                type="submit"
                className={classes.field}
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                color='secondary'
                disabled={loading}
                >
                Submit
                </Button>
            </form>
            <Typography variant='body2'>
                {variant.message} 
            </Typography>
            <Typography varient='body1'>
                <Link 
                className={classes.pointer}
                onClick={() => history.push(variant.linkPath)}
                color='primary'>{variant.linkMessage}</Link>
            </Typography>
        </Paper>
       
    )
}

export default Login
