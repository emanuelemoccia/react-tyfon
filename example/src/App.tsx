import React from 'react'
import Tyfon from 'react-tyfon'
import 'react-tyfon/dist/index.css'
const cmr = '4e5b8431a20cbb16946de12ca0196a5dec0b24cae8eb967791760ecbddb7d320';
const App = () => {
  /* Tyfon.init().then(response => {
    console.log(response)
  }).catch(err => {
    console.log(err);
  }); */
  new Promise((resolve, reject) => {
    Tyfon.auth().then(response => {
      resolve(response);
    }).catch(err => {
      reject(err);
      console.log(err);
    });
  }).then(passalapalla => {
    console.log(passalapalla);
    return new Promise((resolve, reject) => {
      Tyfon.getIntDocs(cmr).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
        console.log(err);
      });
    })
  }).then(passa_passalapalla => {
    console.log(passa_passalapalla);
    Tyfon.checkAuth().then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }).catch(err => {
      console.log(err);
  })
  
  return <div/>
}

export default App
