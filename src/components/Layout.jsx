import { AppBar, Avatar, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { AddCircleOutlined } from '@material-ui/icons';
import BarChartIcon from '@material-ui/icons/BarChart';
import React from 'react'
import { useHistory, useLocation } from 'react-router';
import { format } from 'date-fns'
import FilterNav from './FilterNav';
import ThemeMenu from './ThemeMenu'
import UserMenu from '../components/UserMenu'
import { useAuth } from '../hooks/useAuth'

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
    email: {
      marginRight: theme.spacing(2)
    }
  }
});

const menuItems = [
  {
    text: "Add Book",
    icon: <AddCircleOutlined />,
    path: '/create'
  },
  {
    text: "Statistics",
    icon: <BarChartIcon />,
    path: '/statistics'
  },
]


const Layout = ({children}) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const { currentUser } = useAuth();

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
          {/* <ThemeMenu/> */}
          <Typography className={classes.email}>
            {currentUser && currentUser.email}
          </Typography>
          <UserMenu/>
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
            Library Books
            {/* Books Library */}
            {/* What've 
            you read */}
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
