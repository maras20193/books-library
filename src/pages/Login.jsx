import { Box, Button, Link, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import createTypography from '@material-ui/core/styles/createTypography';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

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
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const classes = useStyles();
    const history = useHistory();

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


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login);
        console.log(password);
        console.log(confirmPassword);
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

                <TextField 
                className={classes.field}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
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
