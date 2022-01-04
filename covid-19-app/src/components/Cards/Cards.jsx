import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// import { styles } from '@material-ui/system';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {
	if(!confirmed) {
		return 'Loading ...'
	}

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{confirmed.value}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							Real Data
						</Typography>
						<Typography gutterBottom variant="h5" component="h2">
							Real Date
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h2">
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Recovered
						</Typography>
						<Typography variant="body2" color="textSecondary">
							Real Data
						</Typography>
						<Typography gutterBottom variant="h5" component="h2">
							Real Date
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h2">
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Deaths
						</Typography>
						<Typography variant="body2" color="textSecondary">
							Real Data
						</Typography>
						<Typography gutterBottom variant="h5" component="h2">
							Real Date
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h2">
							Number of deaths from COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
			<h1>Cards</h1>
		</div>
	)
}

export default Cards;
