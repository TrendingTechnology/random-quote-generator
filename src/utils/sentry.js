import { BrowserClient, Hub } from '@sentry/browser';

const client = new BrowserClient({
  dsn: 'https://be6092e5da004aa9a477831dd4ca62eb@sentry.io/1362464',
});

const hub = new Hub(client);

export default hub;
