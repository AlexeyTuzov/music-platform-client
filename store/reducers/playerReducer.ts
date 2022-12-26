import PlayerState from '../types/playerState';
import { PlayerActions } from '../types/playerActions';
import ActionTypes from '../actions/actionTypes';

export const initialState: PlayerState = {
	active: null,
	pause: true,
	currentTime: 0,
	duration: 0,
	volume: 80
};

export default (state: PlayerState = initialState, action: PlayerActions) => {
	switch (action.type) {
		case ActionTypes.PLAY:
			return { ...state, pause: false };

		case ActionTypes.PAUSE:
			return { ...state, pause: true };

		case ActionTypes.SET_ACTIVE:
			return { ...state, active: action.payload, duration: 0, currentTime: 0 };

		case ActionTypes.SET_CURRENT_TIME:
			return { ...state, currentTime: action.payload };

		case ActionTypes.SET_DURATION:
			return { ...state, duration: action.payload };

		case ActionTypes.SET_VOLUME:
			return { ...state, volume: action.payload };

		default:
			return state;
	}
};
