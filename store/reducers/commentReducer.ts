import CommentActionTypes from '../enums/commentActionTypes';
import { CommentActions } from '../types/actions/commentActions';
import CommentState from '../types/state/commentState';

const initialState: CommentState = {
	comment: null,
	error: ''
};

export default (
	state: CommentState = initialState,
	action: CommentActions
): CommentState => {
	switch (action.type) {
		case CommentActionTypes.UPLOAD_COMMENT:
			return { ...state, comment: action.payload, error: '' };

		case CommentActionTypes.UPLOAD_COMMENT_ERROR:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};
