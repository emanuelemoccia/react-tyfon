import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = 'http://tyfon.io';
console.log(axios.defaults.headers.post);
const _ = {
  init: () => {
    return new Promise((resolve, reject) => {
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
      }).then(response => {
        localStorage.setItem("ty_a", response.data.access_token)
        localStorage.setItem("ty_b", response.data.refresh_token)
        resolve(response.data)
      }).catch(err => {
        reject(err);
      });
    })
  },
  checkAuth: () => {
    return new Promise((resolve, reject) => {
      const at = localStorage.getItem('ty_a');
      if(at !== undefined){
        axios({
          method: 'get',
          url: '/api/menu?access_token='+localStorage.getItem('ty_a')
        })
        .then(function (response) {
          resolve(true)
          //resolve(response.data)
        })
        .catch(function (error) {
          reject(error);
        });
      } else {
        reject(new Error("at cannot be undefined"));
      }
      
    })
  },
  refreshAuth: () => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: '/oauth/token',
        data: qs.stringify({
          grant_type: 'refresh_token',
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          refresh_token: localStorage.getItem('ty_b')
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(response => {
        localStorage.setItem("ty_a", response.data.access_token)
        localStorage.setItem("ty_b", response.data.refresh_token)
        resolve(response.data)
      }).catch(err => {
        reject(err);
      });
    })
  }
}

export default _;
