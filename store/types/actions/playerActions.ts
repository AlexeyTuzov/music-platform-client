import { ITrack } from '../../../types/types';
import PlayerActionTypes from '../../enums/playerActionTypes';

interface PlayAction {
	type: PlayerActionTypes.PLAY;
}

interface PauseAction {
	type: PlayerActionTypes.PAUSE;
}

interface SetVolumeAction {
	type: PlayerActionTypes.SET_VOLUME;
	payload: number;
}

interface SetActiveAction {
	type: PlayerActionTypes.SET_ACTIVE;
	payload: ITrack;
}

interface SetDurationAction {
	type: PlayerActionTypes.SET_DURATION;
	payload: number;
}

interface SetCurrentTimeAction {
	type: PlayerActionTypes.SET_CURRENT_TIME;
	payload: number;
}

interface Hydrate {
	type: PlayerActionTypes.HYDRATE;
	payload: any;
}

export type PlayerActions =
	| PlayAction
	| PauseAction
	| SetActiveAction
	| SetVolumeAction
	| SetDurationAction
	| SetCurrentTimeAction
	| Hydrate;
