import React, { useContext } from 'react'
import { AppBar, Avatar, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';

import { AppContext } from '../context/AppContext'

const filterItems = [
		{ text: 'All',
		icon: <SubjectOutlined color="primary"/>,
		category: '',
		},
    { text: 'Work',
    icon: <SubjectOutlined color="primary"/>,
    category: 'work',
    },
    { text: 'Home',
    icon: <SubjectOutlined color="primary"/>,
    category: 'home',
    },
    { text: 'Health',
    icon: <SubjectOutlined color="primary"/>,
    category: 'health',
    },
    { text: 'Books',
    icon: <SubjectOutlined color="primary"/>,
    category: 'books',
    },
  
  ]
	const useStyles = makeStyles({
		active: {
			background: '#f4f4f4'
		}
	})



const FilterNav = () => {
	const classes = useStyles();
	const { filter, changeFilter } = useContext(AppContext);

	return (
		<List>
		{filterItems.map(item => (
			<ListItem 
				key={item.text}
				button
				onClick={() => changeFilter(item.category)}
				// className={}
				>
				<ListItemIcon>{item.icon}</ListItemIcon>
				<ListItemText primary={item.text}/>
			</ListItem>
			))}
	</List>
	)
}

export default FilterNav
