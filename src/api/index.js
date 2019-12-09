import { accounts } from './db';

const endpoints = {
  accounts: () => [accounts[1], accounts[2]],
  account: id => accounts[id],
};

const wait = async (timeout) => {
  await new Promise(resolve => setTimeout(resolve, timeout));
};

export const fetchEndpoint = async (name, args) => {
  const timeout = Math.floor(Math.random() * 1000);

  if (!endpoints[name]) throw Error ('Invalid endpoint');

  await wait(timeout);
  return endpoints[name](args);
};
