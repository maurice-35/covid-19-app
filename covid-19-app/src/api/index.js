import axios from 'axios';

const url = 'https://covid2019-api.herokuapp.com/v2/current';

export const fetchData = async () => {
	try {
		
		const { data: { confirmed, recovered, deaths, active } } = await axios.get(url);

		return { confirmed, recovered, deaths, active } ;
	} catch (error) {
		return error;
	}
}