import React from 'react'
import ReactDOM from 'react-dom'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import TrafficLight from './components/Home';

ReactDOM.render(<TrafficLight/>, document.querySelector('#app'));
