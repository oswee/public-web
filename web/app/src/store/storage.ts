import { MiddlewareAPI, Dispatch, Action } from 'redux';
import { RootState } from './reducer';

const storageKey = 'system-state';

export const loadState = () : RootState => {
    try {
        const serializedState = localStorage.getItem(storageKey);

        if (serializedState === null) {
            return undefined;
        }

        return <RootState>JSON.parse(serializedState);

        } catch(err) {
            console.error(err);
            return undefined;
        }
}

export default ({ getState }: MiddlewareAPI<Dispatch, RootState>) => {
    return (next: Dispatch) => (action: Action) => {
        const value = next(action);
        const state = getState();
        try {
            const serializedState = JSON.stringify({
                // only store whatever branch of the state should be persisted
                selected: state
            });
            localStorage.setItem(storageKey, serializedState);
        }
        catch (err) {
            console.error(err);
        }
        return value;
    };
}