import { parse } from 'query-string';
import { RouterTypes, RouterActionTypes } from './types';

export const push = (href: string): RouterActionTypes => ({
  type: RouterTypes.ROUTER_PUSH,
  payload: href,
});

export const replace = (href: string): RouterActionTypes => ({
  type: RouterTypes.ROUTER_REPLACE,
  payload: href,
});

export const go = (index: number): RouterActionTypes => ({
  type: RouterTypes.ROUTER_GO,
  payload: index,
});

export const goBack = () => ({
  type: RouterTypes.ROUTER_GO_BACK,
});

export const goForward = () => ({
  type: RouterTypes.ROUTER_GO_FORWARD,
});

export const locationChange = ({ pathname, search, hash }): RouterActionTypes => ({
  type: RouterTypes.ROUTER_LOCATION_CHANGE,
  payload: {
    pathname,
    search,
    queries: parse(search),
    hash,
  },
});