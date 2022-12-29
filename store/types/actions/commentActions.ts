import CommentActionTypes from '../../enums/commentActionTypes';
import { IComment } from '../../../types/types';

interface UploadCommentAction {
	type: CommentActionTypes.UPLOAD_COMMENT;
	payload: IComment;
}

interface UploadCommentErrorAction {
	type: CommentActionTypes.UPLOAD_COMMENT_ERROR;
	payload: string;
}

interface Hydrate {
	type: CommentActionTypes.HYDRATE;
	payload: any;
}

export type CommentActions = UploadCommentAction | UploadCommentErrorAction;
