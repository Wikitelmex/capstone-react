import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

afterEach(cleanup);

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByTestId('mainApp');
  expect(linkElement).toBeInTheDocument();
});

it('renders App page with redux', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
