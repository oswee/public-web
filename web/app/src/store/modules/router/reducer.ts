import { RouterTypes, RouterState, RouterActionTypes } from './types';

const initialState: RouterState = {
    pathname: '/',
    search: '',
    queries: {},
    hash: '',
};

export const routerReducer = (state: RouterState = initialState, action: RouterActionTypes) => {
    switch (action.type) {
        case RouterTypes.ROUTER_LOCATION_CHANGE:
        return {
            ...state,
            ...action.payload,
        };
        default:
        return state;
    }
};