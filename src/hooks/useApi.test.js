import React from 'react';
import { render, act } from '@testing-library/react';
import useApi from './useApi';

jest.mock('../api');

const Test = () => {
  const data = useApi('accounts');

  if (!data) return 'Loading';
  return <div>{ data[0].id }</div>;
};

test('makes api call', async () => {
  let el;

  await act(async () => {
    const { queryByText } = render(<Test />);
    el = queryByText('Loading');
  });

  expect(el).toBeInTheDocument();
});

jest.unmock('../api');
