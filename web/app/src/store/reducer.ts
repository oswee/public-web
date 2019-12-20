import { combineReducers } from 'redux';

import { routerReducer as router, RouterState } from './modules/router';
import { systemReducer as system, SystemState } from './modules/system';
import { sessionReducer as session, SessionState } from './modules/session';
import { signupReducer as signup, SignupState } from './modules/signup';
import { mainLauncherReducer as launcher, LauncherState } from './modules/main-launcher';
import { waybillsReducer as waybills, WaybillsState } from './modules/waybills';
import { socketReducer as socket, SocketState } from './modules/websocket';


export interface RootState {
	readonly router: RouterState;
	readonly signup: SignupState;
	readonly session: SessionState;
	readonly socket: SocketState;
	readonly launcher: LauncherState;
	readonly system: SystemState;
	readonly waybills: WaybillsState;
}

// Build the root reducer
export default combineReducers<RootState>({
	router,
	signup,
	session,
	socket,
	launcher,
	system,
	waybills,
});
