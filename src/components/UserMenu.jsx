import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar, makeStyles } from '@material-ui/core';
import { useAuth } from '../hooks/useAuth'
import { useHistory } from 'react-router';
import { useData } from '../hooks/useData';

const useStyles = makeStyles({
    pointer: {
        cursor: 'pointer',
    }
})

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes  = useStyles();
  const { currentUser, logout } = useAuth();
  const { setBooks } = useData();
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleLogout() {
    setAnchorEl(null);
    setBooks([])
    try{
      await logout()
      history.push('/login')
    } catch {

    }
  }

  return (
    <div>
      <Avatar 
      aria-controls="simple-menu" aria-haspopup="true" 
      onClick={handleClick}
      className={classes.pointer}>
        </Avatar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Update Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}