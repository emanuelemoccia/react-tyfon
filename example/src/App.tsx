import React from 'react'
import Tyfon from 'react-tyfon'
import 'react-tyfon/dist/index.css'

const App = () => {
  /* Tyfon.init().then(response => {
    console.log(response)
  }).catch(err => {
    console.log(err);
  }); */
  new Promise((resolve, reject) => {
    Tyfon.init().then(response => {
      resolve(response);
    }).catch(err => {
      reject(err);
      console.log(err);
    });
  }).then(passalapalla => {
    console.log(passalapalla);
    return new Promise((resolve, reject) => {
      Tyfon.checkAuth().then(response => {
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
