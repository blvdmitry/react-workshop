import React from 'react';
import { fetchEndpoint } from '../api';

const cache = {};

const useApi = (endpoint, args) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const argsKey = args ? JSON.stringify(args) : 'default';

    if (cache[endpoint] && cache[endpoint][argsKey]) {
      setData(cache[endpoint][argsKey]);
      return;
    }

    fetchEndpoint(endpoint, args)
      .then((response) => {
        setData(response);

        if (!cache[endpoint]) cache[endpoint] = {};
        cache[endpoint][argsKey] = response;
      });
  }, [endpoint, args]);

  return data;
};

export default useApi;
