export enum RouterTypes {   
    ROUTER_PUSH = 'ROUTER/PUSH',
    ROUTER_REPLACE = 'ROUTER/REPLACE',
    ROUTER_GO = 'ROUTER/GO',
    ROUTER_GO_BACK = 'ROUTER/GO_BACK',
    ROUTER_GO_FORWARD = 'ROUTER/GO_FORWARD',
    ROUTER_LOCATION_CHANGE = 'ROUTER/LOCATION_CHANGE',
}

export interface RouterState {
	pathname: string;
    search: string;
    queries: any;
    hash: string;
}

interface PushAction {
	readonly type: RouterTypes.ROUTER_PUSH;
	readonly payload: string;
}

interface ReplaceAction {
	readonly type: RouterTypes.ROUTER_REPLACE;
	readonly payload: string;
}

interface GoAction {
	readonly type: RouterTypes.ROUTER_GO;
	readonly payload: number;
}

interface GoBackAction {
	readonly type: RouterTypes.ROUTER_GO_BACK;
}

interface GoForwardAction {
	readonly type: RouterTypes.ROUTER_GO_FORWARD;
}

interface LocationChangeAction {
	readonly type: RouterTypes.ROUTER_LOCATION_CHANGE;
	readonly payload: object;
}

export type RouterActionTypes =
    | PushAction
    | ReplaceAction
    | GoAction
    | GoBackAction
    | GoForwardAction
    | LocationChangeAction;