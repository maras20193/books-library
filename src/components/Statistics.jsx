import { makeStyles, Paper, Typography, Grid, Container } from '@material-ui/core'
import React from 'react'
import DonutChart from './DonutChart'
import { useData } from '../hooks/useData'
import { green, indigo, pink, amber, purple, red, brown, blueGrey } from '@material-ui/core/colors';
import id from 'date-fns/esm/locale/id/index.js';

const useStyles = makeStyles(theme => {
	return ({
		paper: {
			// width: 100,
			padding: theme.spacing(2),
		},
		paddingTop: {
			paddingTop: theme.spacing(1)
		},
	})
});




	


const Statistics = () => {
	const classes = useStyles();
	const { books } = useData();

	const statsPaper = [
		{title: 'All reads',
		number: 25},
		{title: 'This Year (2021)',
		number: 12},
		{title: 'This Month (June)',
		number: 2},
	]
	const CHART_DATA = [
		{
			category: 'Economics',
			color: indigo[500],
			numberOfBooks: 0,
		},
		{
			category: 'Health',
			color: green[600],
			numberOfBooks: 0,
		},
		{
			category: 'Self-grow',
			color: amber[500],
			numberOfBooks: 0,
		},
		{
			category: 'Fiction',
			color: purple[500],
			numberOfBooks: 0,
		},
		{
			category: 'Popular-science',
			color: brown[500],
			numberOfBooks: 0,
		},
		{
			category: 'Philosophy',
			color: blueGrey[500],
			numberOfBooks: 0,
		},
		{
			category: 'Biography',
			color: pink[400],
			numberOfBooks: 0,
		},
		{
			category: 'Political',
			color: red[500],
			numberOfBooks: 0,
		},
	]

	const updateStats = () => {
		const series = {
			economics: 0,
			health: 0, 
			['self-grow']: 0,
			fiction: 0,
			['pupular-science']: 0,
			philosophy: 0,
			biography: 0,
			political: 0,

		}

		books.map(book => {
			CHART_DATA.map(item => {
				if(book.data().primaryCategory === item.category.toLowerCase()){
					item.numberOfBooks ++
				}
			})
		})

		console.log(CHART_DATA)
		console.log(CHART_DATA.map(item => item.numberOfBooks))

	}

	updateStats()








	// books.map(book => console.log(book.data()))

		return (
		<div>
			<Container>
				<Grid container spacing={3} wrap='wrap'>
					{statsPaper.map(paper => (
						<Grid key={paper.title} item xs={12} md={6} lg={4}>
							<Paper 
							elevation={1} 
							className={classes.paper}>
								<Typography variant='h6' color='textSecondary'
								align='center'
								>{paper.title}
								</Typography>
								<Typography variant='h4' color='textSecondary'
								align='center' className={classes.paddingTop}
								>{paper.number}
								</Typography>
							</Paper>
					</Grid>
					))}
				</Grid>
			</Container>
				<DonutChart data={CHART_DATA}/>
		</div>
	)
}

export default Statistics
