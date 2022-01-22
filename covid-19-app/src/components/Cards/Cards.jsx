import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';
import { fetchData } from '../../api';


const Cards = () => {
	const [cardinfo, setCardinfo] = useState({
		confirmed: '',
		recovered: '',
		deaths: '',
		active: ''
	})

	useEffect(() => {
		const getData = async () => {
			try {
				const  cardInfo  = await fetchData()
				// console.log(cardInfo)
				setCardinfo(cardInfo)
			} catch (err) {
				console.log(err)
			}
		}
		getData()
	}, []);
	

	return (
		<div className={styles.container} >
			<Grid container spacing={3} justifyContent="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.confirmed)}>
					<CardContent>
						<Typography gutterBottom variant="h5">
							Confirmed
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={cardinfo.confirmed} duration={2.5} separator="," />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of confirmed cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							Recovered
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={cardinfo.recovered} duration={2.5} separator=',' />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							Deaths
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={cardinfo.deaths} duration={2.5} separator=',' />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of deaths from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.active)}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							Active
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={cardinfo.active} duration={2.5} separator=',' />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	)
}

export default Cards;