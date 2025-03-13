import axios from 'axios';

const URL = 'http://localhost:8000/api/trades';

export const fetchTradeDetails = async () => {
    try {
        const response = await axios.get(`${URL}/fetchTrades`);
        console.log("Trade fetched successfully: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Errort fetching data: ", error)
        return [];
    }
}