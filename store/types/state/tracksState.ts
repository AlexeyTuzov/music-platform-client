import { ITrack } from '../../../types/types';

export interface TracksState {
	tracks: ITrack[];
	error?: string;
}
