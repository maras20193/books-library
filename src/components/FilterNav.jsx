import React, { useContext } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, makeStyles,} from '@material-ui/core'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import WorkIcon from '@material-ui/icons/Work';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import WeekendIcon from '@material-ui/icons/Weekend';
import BuildIcon from '@material-ui/icons/Build';
import { green, indigo, pink, amber, purple, red, brown, blueGrey } from '@material-ui/core/colors';


import { AppContext } from '../context/AppContext'
import { useHistory, useLocation } from 'react-router';

const filterItems = [
	{ text: 'All Books',
	icon: <MenuBookIcon color='primary'/>,
	category: '',
	},
    { text: 'Economics',
    icon: <WorkIcon style={{color: indigo[500]}}/>,
    category: 'economics',
    },
    { text: 'Health',
    icon: <FitnessCenterIcon style={{color: green[600]}}/>,
    category: 'health',
    },
    { text: 'Self-grow',
    icon: <AccessibilityNewIcon style={{color: amber[500]}}/>,
    category: 'self-grow',
    },
    { text: 'Fiction',
    icon: <BeachAccessIcon style={{color: purple[500]}}/>,
    category: 'fiction',
    },
	{ text: 'Popular-science',
    icon: <BuildIcon style={{color: brown[500]}}/>,
    category: 'popular-science',
    },
	{ text: 'Philosophy',
    icon: <WeekendIcon style={{color: blueGrey[500]}}/>,
    category: 'philosophy',
    },
	{ text: 'Biography',
    icon: <FingerprintIcon style={{color: pink[400]}}/>,
    category: 'biography',
    },
	{ text: 'Political',
    icon: <RecordVoiceOverIcon style={{color: red[500]}}/>,
    category: 'political',
    },
  ]

	const useStyles = makeStyles({
		active: {
			background: '#f4f4f4'
		},
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
				>
				<ListItemIcon 
					className={classes.icon}
				>{item.icon}</ListItemIcon>
				<ListItemText primary={item.text}/>
			</ListItem>
			))}
	</List>
	)
}

export default FilterNav
