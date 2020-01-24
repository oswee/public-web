import {
  createBrowserHistory,
  routerReducer,
  routerMiddleware,
  startListener,
  push,
} from './modules/router';
import { Store } from 'redux';

const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

declare global {
  interface Event {
    readonly composed: boolean;
    readonly composedPath: () => Array<HTMLElement>;
  }
}

export const routeMiddleware = (store: Store) => {
  // startListener(history, store);

  window.document.documentElement.addEventListener('click', (e: MouseEvent) => {
    if (
      (e.button && e.button !== 0) ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.defaultPrevented === true
    ) {
      return;
    }

    const origin = window.location.origin
      ? window.location.origin
      : window.location.protocol + '//' + window.location.host;

    const path = e.composedPath();
    for (let i = 0; i < path.length; i++) {
      const el = path[i];
      if (el instanceof HTMLAnchorElement) {
        const anchor = <HTMLAnchorElement>el;
        if (anchor.href.indexOf(origin) === 0) {
          console.log('From router!');
          e.preventDefault();
          store.dispatch(push(anchor.href.substr(origin.length)));
        }
        return;
      }
    }
  });

  return next => action => next(action);
};

export { historyMiddleware, routerMiddleware, routerReducer, push };
