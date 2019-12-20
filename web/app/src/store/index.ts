import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import createWebSocketMiddleware from './middleware/websocket';
// import logMiddleware from './middleware/log';

import rootReducer from './reducer';
import middleware from './middleware';
import { loadState } from './storage';
import rootSaga from './saga';
import { sagaMiddleware } from './middleware/saga'

// import storage from './storage';

// https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
// https://github.com/zalmoxisus/remote-redux-devtools/issues/129

// Some interesting store wrapping construction - https://youtu.be/Om4Lb8c5Lbg?list=PLMV09mSPNaQlWvqEwF6TfHM-CVM6lXv39&t=790

		// const configureStore = () => {
		// 	const options = {
		// 		name: `Redux`,
		// 		realtime: true,
		// 		trace: true,
		// 		traceLimit: 25,
		// 	};

		// 	const composeEnhancers = composeWithDevTools(options);
		// 	const sagaMiddleware = createSagaMiddleware();
		// 	// const websocketMiddleware = createWebSocketMiddleware();

		// 	const middlewares = [
		// 		storage,
		// 		historyMiddleware,
		// 		routeMiddleware,
		// 		// logMiddleware,
		// 		// websocketMiddleware,
		// 		sagaMiddleware
		// 	];

		// 	const state = loadState();

		// 	const store = createStore(
		// 		rootReducer,
		// 		state,
		// 		composeEnhancers(
		// 			applyMiddleware(...middlewares),
		// 			/* other store enhancers if any */
		// 		),
		// 	);

		// 	sagaMiddleware.run(rootSaga);

		// 	return store;
		// };

		// const store = configureStore();

const options = {
	name: `Redux`,
	realtime: true,
	trace: true,
	traceLimit: 25,
};

const composeEnhancers = composeWithDevTools(options) || compose;

const composedEnhancer = composeEnhancers(applyMiddleware(...middleware));

const preloadedState = loadState();
const store = createStore( rootReducer, preloadedState, composedEnhancer );

sagaMiddleware.run(rootSaga);


export default store;

export { RootState } from './reducer';
export * from './modules/signup';
export * from './modules/session';
export * from './modules/websocket';
export * from './modules/main-launcher';
export * from './modules/system';
export * from './modules/waybills';
