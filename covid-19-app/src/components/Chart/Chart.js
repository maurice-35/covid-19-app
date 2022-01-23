import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";


const Chart = () => {
	const [dailyData, setDailyData] = useState([])

	useEffect(() => {
		const fetchAPI = async () => {
			const response = await fetchDailyData();
			console.log(response);
		}
		
		fetchAPI();

	});

	
	
	return (
		<div className="={style.container">
			<h1>Chart</h1>
		</div>
	)
}

export default Chart;

