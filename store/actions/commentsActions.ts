import { Dispatch } from 'redux';
import { CommentActions } from '../types/actions/commentActions';
import axios from 'axios';
import CommentActionTypes from '../enums/commentActionTypes';
import { IComment } from '../../types/types';

export const uploadComment =
	(comment: IComment) => async (dispatch: Dispatch<CommentActions>) => {
		try {
			const hostAddress = process.env.SERVER_HOST || 'http://localhost:5000';
			const response = await axios.post(`${hostAddress}/tracks/comment`, {
				username: comment.username,
				text: comment.text,
				trackId: comment._id
			});
			dispatch({
				type: CommentActionTypes.UPLOAD_COMMENT,
				payload: response.data
			});
		} catch (err) {
			dispatch({
				type: CommentActionTypes.UPLOAD_COMMENT_ERROR,
				payload: 'Error uploading comment!'
			});
		}
	};
