import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

export default function setupLogRocket() {
  LogRocket.init('tmyqjr/random-quote-generator');

  setupLogRocketReact(LogRocket);
}
