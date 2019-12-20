import { LAUNCHER, LauncherActionTypes, LauncherState } from './types';

const initialState: LauncherState = {
	isVisible: false,
};

export const mainLauncherReducer = (state: LauncherState = initialState, action: LauncherActionTypes) => {
	switch (action.type) {
		case LAUNCHER.TOGGLE:
			return { ...state, isVisible: !state.isVisible };
		case LAUNCHER.SHOW:
			return { ...state, isVisible: true };

		case LAUNCHER.SHOWN:
			return { ...state, isVisible: true };

		case LAUNCHER.HIDE:
			return { ...state, isVisible: false };

		case LAUNCHER.HIDDEN:
			return { ...state, isVisible: false };

		default:
			return state;
	}
};
