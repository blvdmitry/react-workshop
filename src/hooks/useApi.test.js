import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, act } from '@testing-library/react';
import useApi from './useApi';
import * as api from '../api';

jest.mock('../api');

const Test = () => {
  const data = useApi('accounts');

  if (!data) return 'Loading';
  return <div>{ data[0].id }</div>;
};

test('shows loader', async () => {
  const fetchMock = jest.spyOn(api, 'fetchEndpoint');
  fetchMock.mockResolvedValue([{ id: '1' }]);

  let el;

  await act(async () => {
    const { queryByText } = render(<Test />);
    el = queryByText('Loading');
  });

  expect(el).toBeInTheDocument();
  expect(fetchMock.mock.calls.length).toBe(1);
});

jest.unmock('../api');
