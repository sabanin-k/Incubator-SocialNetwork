import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import store from './store/reduxStore';
import { Provider } from 'react-redux';

test('render App', () => {
  render(
    <React.StrictMode>
      <Provider store={store} >
        <App />
      </Provider>
    </React.StrictMode>
  );
});
