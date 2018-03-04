import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import {createStore} from 'redux';
import reducer from '../reducers/index';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  let store = createStore(reducer);
  const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
