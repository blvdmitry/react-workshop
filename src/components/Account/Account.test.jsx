import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render, fireEvent } from '@testing-library/react';
import Account from './Account';

afterEach(cleanup);

test('renders elements', () => {
  const { getByText } = render(
    <Router><Account title="Title" accountNumber="123" balance={2000} /></Router>
  );

  expect(getByText('Title')).toBeDefined();
  expect(getByText('123')).toBeDefined();
  expect(getByText('2000')).toBeDefined();
});

test('calls on transfer', () => {
  const handleTransfer = jest.fn(() => {});

  const { queryByText } = render(
    <Router><Account title="Title" accountNumber="123" balance={2000} onTransfer={handleTransfer}/></Router>
  );

  fireEvent.click(queryByText('Transfer'));
  expect(handleTransfer).toBeCalled();
});


