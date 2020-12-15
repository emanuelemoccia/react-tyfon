import React from 'react'
import Tyfon from 'react-tyfon'
import 'react-tyfon/dist/index.css'

const App = () => {
  Tyfon.refreshAuth().then(response => {
    console.log(response)
  }).catch(err => {
    console.log(err);
  });
  
  return <div/>
}

export default App
