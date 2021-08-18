import { makeStyles } from '@material-ui/core'
import React from 'react'

const backgroundUrl = "url('img/background1.jpg')"

const useStyles = makeStyles({
    background: {
        position: 'fixed',
        backgroundImage: backgroundUrl,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        opacity: 0.6,
    }
});



const LayoutLogin = ({children}) => {
  const classes = useStyles();

  return (
    <div className="root">
        <div className={classes.background}></div>
        <div>{children}</div>
    </div>
  )
};

export default LayoutLogin;
