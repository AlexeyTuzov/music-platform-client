import { ITrack } from '../../types/types';
import { PlayerActions } from '../types/actions/playerActions';
import PlayerActionTypes from '../enums/playerActionTypes';

export const playTrack = (): PlayerActions => {
	return { type: PlayerActionTypes.PLAY };
};

export const pauseTrack = (): PlayerActions => {
	return { type: PlayerActionTypes.PAUSE };
};

export const setVolume = (volume: number): PlayerActions => {
	return { type: PlayerActionTypes.SET_VOLUME, payload: volume };
};

export const setActive = (track: ITrack): PlayerActions => {
	return { type: PlayerActionTypes.SET_ACTIVE, payload: track };
};

export const setDuration = (duration: number): PlayerActions => {
	return { type: PlayerActionTypes.SET_DURATION, payload: duration };
};

export const setCurrentTime = (currentTime: number): PlayerActions => {
	return { type: PlayerActionTypes.SET_CURRENT_TIME, payload: currentTime };
};
