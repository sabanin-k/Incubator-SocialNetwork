import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './components/State/reduxStore';
import { Provider } from 'react-redux';
import './index.css';

const reRender = () => {
    ReactDOM.render(
        <React.StrictMode>
          <Provider store={store} >
            <App />          
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender();

store.subscribe(reRender);
