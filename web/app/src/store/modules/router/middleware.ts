import { RouterTypes } from './types';

const routerMiddleware = (history) => () => (next) => (action) => {
  switch (action.type) {
    case RouterTypes.ROUTER_PUSH:
      history.push(action.payload);
      break;
    case RouterTypes.ROUTER_REPLACE:
      history.replace(action.payload);
      break;
    case RouterTypes.ROUTER_GO:
      history.go(action.payload);
      break;
    case RouterTypes.ROUTER_GO_BACK:
      history.goBack();
      break;
    case RouterTypes.ROUTER_GO_FORWARD:
      history.goForward();
      break;
    default:
      return next(action);
  }
};

export { routerMiddleware };