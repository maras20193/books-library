import classes from './Loader.module.css';
import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => {
    return ({
        spinTop: {
            borderTopColor: `${theme.palette.secondary.main} !important`,
        },
        spinBottom: {
            borderBottomColor: `${theme.palette.secondary.main} !important`,
        }
    })
})

const Loader = () => {
    const classesColor = useStyle();

    return (
        <div className={classes.spinnerWrapper}>
            <div className={`${classes.spinnerOne} ${classesColor.spinTop}`}></div>
            <div className={`${classes.spinnerTwo} ${classesColor.spinBottom}`}></div>
        </div>
    )
}

export default Loader
