import React, { useContext } from 'react'
import { AppBar, Avatar, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { brown, green, indigo, pink, yellow } from '@material-ui/core/colors';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';


import { AppContext } from '../context/AppContext'
import { useHistory, useLocation } from 'react-router';

const filterItems = [
		{ text: 'All Notes',
		icon: <SubjectOutlinedIcon color="primary"/>,
		category: '',
		color: brown[500]
		},
    { text: 'Work',
    icon: <WorkIcon color="primary"/>,
    category: 'work',
	color: indigo[500],
    },
    { text: 'Home',
    icon: <HomeIcon color="primary"/>,
    category: 'home',
	color: pink[400],
    },
    { text: 'Health',
    icon: <FitnessCenterIcon color="primary"/>,
    category: 'health',
	color: green[600],
    },
    { text: 'Books',
    icon: <MenuBookIcon color="primary"/>,
    category: 'books',
	color: yellow[400],
    },
  
  ]

	const useStyles = makeStyles({
		active: {
			background: '#f4f4f4'
		},
		icon: {
			color: (note) => note.color
		}

	})


const FilterNav = () => {
	const classes = useStyles();
	const history = useHistory();
	const location= useLocation();
	const { filter, changeFilter } = useContext(AppContext);

	const handleClick = (category) => {
		changeFilter(category);
		history.push('/');

	}

	return (
		<List>
		{filterItems.map(item => (
			<ListItem 
				key={item.text}
				button
				onClick={() => handleClick(item.category)}
				className={(item.category == filter && location.pathname == '/')  && classes.active}
				
				// className={}
				>
				<ListItemIcon 
					color={item.category}
					className={classes.icon}
				>{item.icon}</ListItemIcon>
				<ListItemText primary={item.text}/>
			</ListItem>
			))}
	</List>
	)
}

export default FilterNav
