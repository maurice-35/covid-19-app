import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';


const Cards = ({ data:  infected, tested, recovered, deceased, lastUpdatedSource  }) => {
	if (!infected) {
		return 'Loading ... ';
	}
	

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography gutterBottom variant="h5">
							Infected
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={infected.value} duration={2.5} separator="," />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
							{new Date(lastUpdatedSource).toDateString()}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of infected cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.tested)}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							Tested
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={tested} duration={2.5} separator=',' />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
							{new Date(lastUpdatedSource).toDateString()}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of tested cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							Recovered
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={recovered} duration={2.5} separator=',' />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
							{new Date(lastUpdatedSource).toDateString()}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deceased)}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							Deceased
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={deceased} duration={2.5} separator=',' />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
							{new Date(lastUpdatedSource).toDateString()}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of deaths from COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	)
}

export default Cards;
