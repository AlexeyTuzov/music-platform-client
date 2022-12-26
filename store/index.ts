import { configureStore, combineReducers } from '@reduxjs/toolkit';
import playerReducer from './reducers/playerReducer';
import { Context, HYDRATE, createWrapper } from 'next-redux-wrapper';
import { PlayerActions } from './types/playerActions';

const combinedReducers = combineReducers({
	playerReducer
});

const reducer = (
	state: ReturnType<typeof combinedReducers> | undefined,
	action: PlayerActions
) => {
	if (action.type === HYDRATE) {
		const nextState: ReturnType<typeof combinedReducers> = {
			...state, // use previous state
			...action.payload // apply delta from hydration
		};
		return nextState;
	} else {
		return combinedReducers(state, action);
	}
};

const makeStore = (context: Context) => configureStore({ reducer });

type Store = ReturnType<typeof makeStore>;

export type RootState = ReturnType<Store['getState']>;

export const wrapper = createWrapper(makeStore, { debug: true });
