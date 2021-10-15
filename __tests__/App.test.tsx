/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {
  render,
  cleanup,
  waitFor
  //  act
} from '@testing-library/react-native';

afterEach(cleanup);

it('renders hello correctly', async () => {
  const tree = render(<App />);

  const listTree = await waitFor(() => tree);
  expect(listTree).toBeTruthy();
});
