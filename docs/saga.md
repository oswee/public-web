# Redux-saga

Dzintars 7:52 PM
Hi. Could someone tell me please the difference between `fork` and `call` in simple words in this context. (edited) 
Untitled 
export default function* rootSaga() {
    yield fork(watchSignup);
    yield fork(watchSignin);
    yield fork(watchSignout);
 }
//======== VS ========
const sagas = [
    watchSignup,
    watchSignin,
    watchSignout,
];
export default function* rootSaga() {
    yield all(sagas.map( s => call(s)));
}
Collapse




captaincodeman 7:53 PM
call would be sequential, fork runs in parallel and can also be cancelled
(assuming redux-saga, which it appears to be)

Lars:owc: 7:53 PM
neither fork nor call is listed in that codesnippet
it could be anything :slightly_smiling_face:

captaincodeman 7:53 PM
oh, I expanded it - there’s more code!

Dzintars 7:54 PM
Ouh... tnx @captaincodeman

captaincodeman 7:54 PM
the bottom rootSaga runs them all in parallel as well, but waits for them all to finish

Dzintars 7:55 PM
So probably that is not what i want.
But you gave me a hint to read on

captaincodeman 7:56 PM
So probably that is not what i want.
let me just put my remote mind-reading helmet on …
damn, out of battery … it all depends what you are wanting it to do

Dzintars 7:57 PM
i was thinking to pass all sagas in applyMiddleware
but... i need to understand how i want to execute them first
need some more learning
was out from JS for a while

captaincodeman 7:58 PM
you typically want a root runner, because otherwise any error in any saga brings the whole pile down, and typically you want to be able to restart things (edited) 
:+1:
1

understanding the fork model is very important to using redux-saga correctly and robustly

Dzintars 7:59 PM
Thank you... i understood the difference. Will read on this now more closely.

captaincodeman 8:04 PM
https://redux-saga.js.org/docs/advanced/ForkModel.html
:+1:
1

Dzintars 8:04 PM
Root runner = sagaMiddleware.run(rootSaga); You mean this one?

captaincodeman 8:05 PM
yes, if your root saga is one line (just ‘call all these’) then it’s almost certainly a landmine waiting to blow up

Dzintars 8:05 PM
Great...
Tnx for pointing that out

captaincodeman 8:06 PM
because an error in a child task will abort the parent, so you need error handling in there
otherwise all your sagas stop if any has an unhandled error

Dzintars 8:06 PM
Got it.
