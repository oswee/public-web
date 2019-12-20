export enum LAUNCHER {
	TOGGLE = 'LAUNCHER_TOGGLE',
	SHOW = 'LAUNCHER_SHOW',
	HIDE = 'LAUNCHER_HIDE',
	SHOWN = 'LAUNCHER_SHOWN',
	HIDDEN = 'LAUNCHER_HIDDEN',
}

export interface LauncherState {
	isVisible: boolean;
}

interface ToggleLauncherAction {
	readonly type: LAUNCHER.TOGGLE;
}

interface ShowLauncherAction {
	readonly type: LAUNCHER.SHOW;
}

interface HideLauncherAction {
	readonly type: LAUNCHER.HIDE;
}

interface LauncherShownAction {
	readonly type: LAUNCHER.SHOWN;
}

interface LauncherHiddenAction {
	readonly type: LAUNCHER.HIDDEN;
}

export type LauncherActionTypes =
	| LauncherShownAction
	| LauncherHiddenAction
	| HideLauncherAction
	| ShowLauncherAction
	| ToggleLauncherAction;