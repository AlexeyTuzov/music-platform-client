import { Dispatch } from 'react';
import { TracksActions } from '../types/actions/tracksActions';
import TrackActionTypes from '../enums/trackActionTypes';
import axios from 'axios';

export const fetchTracks = () => async (dispatch: Dispatch<TracksActions>) => {
	try {
		const hostAddress = process.env.SERVER_HOST || 'http://localhost:5000';
		const response = await axios.get(`${hostAddress}/tracks`);
		dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
	} catch (err) {
		dispatch({
			type: TrackActionTypes.FETCH_TRACKS_ERROR,
			payload: 'Error loading tracks!'
		});
	}
};

export const searchTracks =
	(query: string) => async (dispatch: Dispatch<TracksActions>) => {
		try {
			console.log('search tracks called!');
			const hostAddress = process.env.SERVER_HOST || 'http://localhost:5000';
			const response = await axios.get(
				`${hostAddress}/tracks/search?query=${query}`
			);
			dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
		} catch (err) {
			dispatch({
				type: TrackActionTypes.FETCH_TRACKS_ERROR,
				payload: 'Error loading tracks!'
			});
		}
	};
