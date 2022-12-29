import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit';
import playerReducer from './reducers/playerReducer';
import tracksReducer from './reducers/tracksReducer';
import commentReducer from './reducers/commentReducer';
import { Context, HYDRATE, createWrapper } from 'next-redux-wrapper';
import { PlayerActions } from './types/actions/playerActions';
import thunk from 'redux-thunk';
import { TracksActions } from './types/actions/tracksActions';
import { CommentActions } from './types/actions/commentActions';

const combinedReducers = combineReducers({
	playerReducer,
	tracksReducer,
	commentReducer
});

const reducer = (
	state: ReturnType<typeof combinedReducers> | undefined,
	action: PlayerActions | TracksActions | CommentActions
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

const makeStore = (context: Context) =>
	configureStore({ reducer, middleware: [thunk] });

type Store = ReturnType<typeof makeStore>;

export type RootState = ReturnType<Store['getState']>;

export const wrapper = createWrapper(makeStore, { debug: true });
