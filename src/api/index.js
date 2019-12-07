import { accounts } from './db';

const endpoints = {
  accounts: [accounts[1], accounts[2]],
};

export const fetchEndpoint = async (name) => {
  const timeout = Math.floor(Math.random() * 2000);
  let response;

  await setTimeout(() => {
    if (!endpoints[name]) throw Error ('Invalid endpoint');

    response = endpoints[name];
  }, timeout);

  return response;
};
