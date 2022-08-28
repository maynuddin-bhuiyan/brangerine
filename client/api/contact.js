import axios from 'axios';

export const submit = async (data) => {
    const response = await axios.post('http://167.99.2.5:5000/message', data);
    return response;
}