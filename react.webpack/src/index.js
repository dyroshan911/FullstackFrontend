import name from './base';
import React from 'react';
import ReactDOM from 'react-dom';
import result from 'ajax';
 console.log('result->', result);
ReactDOM.render(
    <h1>{name}</h1>, document.getElementById('root')
);
console.log('hello react webpack')
console.log(name);