import TrackActionTypes from "../enums/trackActionTypes";
import { TracksActions } from "../types/actions/tracksActions";
import { TracksState } from "../types/state/tracksState";

const initialState: TracksState = {
    tracks: [],
    error: ''
}

export default (state: TracksState = initialState, action: TracksActions): TracksState => {
    switch (action.type) {
        case TrackActionTypes.FETCH_TRACKS :
            return {...state, tracks: action.payload, error: ''};

        case TrackActionTypes.FETCH_TRACKS_ERROR :
            return {...state, error: action.payload}

        default:
            return state;
    }
}