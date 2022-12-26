import { ITrack } from '../../types/types';
import ActionTypes from './actionTypes';

export const play = () => {
	return { type: ActionTypes.PLAY };
};

export const pause = () => {
	return { type: ActionTypes.PAUSE };
};

export const setVolume = (volume: number) => {
	return { type: ActionTypes.SET_VOLUME, payload: volume };
};

export const setActive = (track: ITrack) => {
	return { type: ActionTypes.SET_ACTIVE, payload: track };
};

export const setDuration = (duration: number) => {
	return { type: ActionTypes.SET_DURATION, payload: duration };
};

export const setCurrentTime = (currentTime: number) => {
	return { type: ActionTypes.SET_CURRENT_TIME, payload: currentTime };
};
