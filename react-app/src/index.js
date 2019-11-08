import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './static/less/todo.less'
import Head from './components/Head';
import Body from './components/Body';
import Footer from './components/Footer';


let root = document.getElementById('root');

render(<main className='panel panel-default'>
    <Head />
    <Body />
    <Footer />
</main>, root);

