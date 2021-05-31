import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import { Avatar } from '@material-ui/core';

import { theme } from '../theme/theme'
import { green, pink} from '@material-ui/core/colors';
import { AppContext } from '../context/AppContext';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { mainTheme, changeTheme } = useContext(AppContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };
  

  // const changeTheme = (id) => {
  //   console.log('ami')
  //   theme.palette.primary = green;
  //   theme.palette.secondary = pink;
  //   console.log(theme.palette.primary)
  // }

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <ColorLensIcon/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} >
          <Avatar id="pink">Pi</Avatar>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar id="green">G</Avatar>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar id="purple">Pu</Avatar>
        </MenuItem>
      </Menu>
    </div>
  );
}