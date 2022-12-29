import { ITrack } from '../../../types/types';
import TrackActionTypes from '../../enums/trackActionTypes';

interface FetchTracksAction {
	type: TrackActionTypes.FETCH_TRACKS;
	payload: ITrack[];
}

interface FetchTracksErrorAction {
	type: TrackActionTypes.FETCH_TRACKS_ERROR;
	payload: string;
}

interface Hydrate {
	type: TrackActionTypes.HYDRATE;
	payload: any;
}

export type TracksActions = FetchTracksAction | FetchTracksErrorAction;
