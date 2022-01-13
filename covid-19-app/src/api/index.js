import axios from 'axios';

const url = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true';

export const fetchData = async () => {
	try {
		
		const { data: { confirmed, recovered, deaths, active } } = await axios.get(url);
		
		return { confirmed, recovered, deaths, active } ;
	} catch (error) {
		return error;
	}
}