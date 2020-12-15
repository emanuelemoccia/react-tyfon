import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = 'http://localhost';
//axios.defaults.headers.post['content-type'] = 'application/x-www-form-urlencoded';
console.log(axios.defaults.headers.post);
const _ = {
  init: () => {
    axios({
      method: 'post',
      url: '/oauth/token',
      data: qs.stringify({
        grant_type: process.env.REACT_APP_GRANT_TYPE,
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        username: process.env.REACT_APP_APP_ID,
        password: process.env.REACT_APP_API_KEY
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },
  test: () => {
    console.log("test")
    /* const instance = axios.create();
    instance.get('/longRequest', {
      timeout: 5000
    }); */
  }
}

export default _;
