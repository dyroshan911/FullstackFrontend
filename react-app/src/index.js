import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './static/less/todo.less'
import Head from './components/Head';
import Body from './components/Body';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from "./store";
import FlipTimer from './components/Timer';


let root = document.getElementById('root');

render(<Provider store={store}>
    {/* <main className='panel panel-default'>
        <Head />
        <Body />
        <Footer />
        <FlipTimer />
    </main> */}
    <FlipTimer />
</Provider>, root);