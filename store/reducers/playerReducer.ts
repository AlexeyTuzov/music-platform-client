import PlayerState from '../types/state/playerState';
import { PlayerActions } from '../types/actions/playerActions';
import PlayerActionTypes from '../enums/playerActionTypes';

export const initialState: PlayerState = {
	active: null,
	pause: true,
	currentTime: 0,
	duration: 0,
	volume: 80
};

export default (state: PlayerState = initialState, action: PlayerActions): PlayerState => {
	switch (action.type) {
		case PlayerActionTypes.PLAY:
			return { ...state, pause: false };

		case PlayerActionTypes.PAUSE:
			return { ...state, pause: true };

		case PlayerActionTypes.SET_ACTIVE:
			return { ...state, active: action.payload, duration: 0, currentTime: 0 };

		case PlayerActionTypes.SET_CURRENT_TIME:
			return { ...state, currentTime: action.payload };

		case PlayerActionTypes.SET_DURATION:
			return { ...state, duration: action.payload };

		case PlayerActionTypes.SET_VOLUME:
			return { ...state, volume: action.payload };

		default:
			return state;
	}
};
