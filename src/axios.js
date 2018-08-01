import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-jingyi-burger.firebaseio.com/'
});

export default instance;
