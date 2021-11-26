import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import HomePage from '../Pages/HomePage';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import store from '../redux/store';

afterEach(cleanup);

it('renders HomePage page with redux', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
