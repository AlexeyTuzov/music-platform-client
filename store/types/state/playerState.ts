import { ITrack } from '../../../types/types';

interface PlayerState {
	active: null | ITrack;
	pause: boolean;
	volume: number;
	duration: number;
	currentTime: number;
}

export default PlayerState;
