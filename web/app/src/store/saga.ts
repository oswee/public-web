import { all, call, fork } from 'redux-saga/effects';
import { mySaga } from './modules/system';
import { watchSignupSubmit } from './modules/signup';
import { watchSigninSubmit, watchSignoutSubmit } from './modules/session';
// import { watchSignoutSubmit } from './modules/session';
import { watchOrdersLoad } from './modules/waybills';

// TODO: Fix Saga composition and imports
export default function* rootSaga() {
	yield fork(mySaga);
	yield fork(watchSignupSubmit);
	yield fork(watchSigninSubmit);
	yield fork(watchSignoutSubmit);
	yield fork(watchOrdersLoad);
}

// const sagas = [
//     ...mySaga,
//     ...watchSignupSubmit,
//     ...watchSigninSubmit,
//     ...watchSignoutSubmit,
//     ...watchOrdersLoad,
// ];

// const sagas = [
//     mySaga,
//     watchSignupSubmit,
//     watchSigninSubmit,
//     watchSignoutSubmit,
//     watchOrdersLoad,
// ];

// export default function* rootSaga() {
//     yield all(sagas.map( s => call(s)));
// }