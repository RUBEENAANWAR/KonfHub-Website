import axios from 'axios';
import store from '../store/store'
import { setData, setError ,setLoading} from '../store/dataSlice';

export const fetchData = async () => {
  try {
    store.dispatch(setLoading(true))
    const response = await axios.get('https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task');
    store.dispatch(setData(response.data));
    store.dispatch(setLoading(false))
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    store.dispatch(setError(error.message));
    throw error;
  }
};

