import { LAUNCHER, LauncherActionTypes } from './types';

export const toggleLauncher = (): LauncherActionTypes => ({
	type: LAUNCHER.TOGGLE,
});

export const showLauncher = (): LauncherActionTypes => ({
	type: LAUNCHER.SHOW,
});

export const hideLauncher = (): LauncherActionTypes => ({
	type: LAUNCHER.HIDE,
});

export const launcherShown = (): LauncherActionTypes => ({
	type: LAUNCHER.SHOWN,
});

export const launcherHidden = (): LauncherActionTypes => ({
	type: LAUNCHER.HIDDEN,
});
