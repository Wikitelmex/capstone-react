import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import WorldPage from '../Pages/WorldPage';

import store from '../redux/store';

afterEach(cleanup);

it('renders World page with redux', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        <WorldPage />
      </Router>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
