import axios from 'axios'
import querystring from 'querystring'

axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';


const getChina = (params) => axios.get('http://192.168.48.112:8080/findByArea',{params:{type:params}})
  .then(response => response.data)
  .catch(error => console.log(error));
const postArea = (params) => axios.post('http://192.168.48.151:8089/findByArea', querystring.stringify(params))
  .then(response => response.data)
  .catch(error => console.log(error));
	const postClass = (params) => axios.post('http://192.168.48.151:8089/findByType', querystring.stringify(params))
	  .then(response => response.data)
	  .catch(error => console.log(error));
const postMovie = (params) => axios.post('http://172.20.10.13:8089/search', querystring.stringify(params))
  .then(response => response.data)
  .catch(error => console.log(error));
	const postBox = (params) => axios.post('http://172.20.10.13:8089/forecastBox', querystring.stringify(params))
	  .then(response => response.data)
	  .catch(error => console.log(error));
  
  export {getChina, postArea, postMovie, postClass, postBox};