import { AppBar, Avatar, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import React from 'react'
import { useHistory, useLocation } from 'react-router';
import { format } from 'date-fns'
import FilterNav from './FilterNav';
import ThemeMenu from './ThemeMenu'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#F9F9F9",
      width: "100%",
      minHeight: `calc(100vh-${theme.mixins.toolbar})`,
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2),
      fontFamily: 'arial',
      fontFamily: 'Gloria Hallelujah, cursive',
      fontFamily: 'Frijole, cursive',
      textAlign: 'center'
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
});

const menuItems = [
  // {
  //   text: "Notes",
  //   icon: <SubjectOutlined color="primary"/>,
  //   path: '/'
  // },
  {
    text: "Create Note",
    icon: <AddCircleOutlined color="primary"/>,
    path: '/create'
  },
]


const Layout = ({children}) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  

  return (
    <div className={classes.root}>

      <AppBar
        color="secondary"
        className={classes.appBar}
        elevation={0}
        >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the { format(new Date(), 'do MMMM Y') }
          </Typography>
          <ThemeMenu/>
          <Typography>
            Lucas
          </Typography>
          <Avatar 
            className={classes.avatar}
            />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper: classes.drawerPaper}}
      >
        <div>
          <Typography 
            variant="h5"
            className={classes.title}
            color="secondary"
            >
            My notes
          </Typography>

          <List>
            {menuItems.map(item => (
              <ListItem 
                key={item.text}
                button
                onClick={() => history.push(item.path)}
                className={location.pathname == item.path && classes.active}
                >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
              </ListItem>
            ))}
            <Divider/>
          </List>

          <FilterNav/>

        </div>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}>
        </div>
        {children}
      </div>
    </div>
  )
};

export default Layout;
