import { ITrack } from '../../types/types';
import { PlayerActions } from '../types/playerActions';
import ActionTypes from './actionTypes';

export const playTrack = (): PlayerActions => {
	return { type: ActionTypes.PLAY };
};

export const pauseTrack = (): PlayerActions => {
	return { type: ActionTypes.PAUSE };
};

export const setVolume = (volume: number): PlayerActions => {
	return { type: ActionTypes.SET_VOLUME, payload: volume };
};

export const setActive = (track: ITrack): PlayerActions => {
	return { type: ActionTypes.SET_ACTIVE, payload: track };
};

export const setDuration = (duration: number): PlayerActions => {
	return { type: ActionTypes.SET_DURATION, payload: duration };
};

export const setCurrentTime = (currentTime: number): PlayerActions => {
	return { type: ActionTypes.SET_CURRENT_TIME, payload: currentTime };
};
