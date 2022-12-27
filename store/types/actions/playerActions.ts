import { ITrack } from '../../../types/types';
import ActionTypes from '../../enums/playerActionTypes';

interface PlayAction {
	type: ActionTypes.PLAY;
}

interface PauseAction {
	type: ActionTypes.PAUSE;
}

interface SetVolumeAction {
	type: ActionTypes.SET_VOLUME;
	payload: number;
}

interface SetActiveAction {
	type: ActionTypes.SET_ACTIVE;
	payload: ITrack;
}

interface SetDurationAction {
	type: ActionTypes.SET_DURATION;
	payload: number;
}

interface SetCurrentTimeAction {
	type: ActionTypes.SET_CURRENT_TIME;
	payload: number;
}

interface Hydrate {
	type: ActionTypes.HYDRATE;
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
