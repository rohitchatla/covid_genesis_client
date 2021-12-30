import Axios from 'axios';

// const baseURL = 'http://localhost:5000/api';
// const assestsURL = 'http://localhost:5000/assets/';
// const socketCon = 'http://localhost:5000';

const baseURL = 'https://covidgenesis-server.herokuapp.com/api';
const assestsURL = 'https://covidgenesis-server.herokuapp.com/assets/';
const socketCon = 'https://covidgenesis-server.herokuapp.com';

Axios.defaults.baseURL = baseURL;

export default Axios;
export { baseURL, assestsURL, socketCon };
