import { Dispatch } from "redux";
import { CommentActions } from "../types/actions/commentActions";
import axios from "axios";
import CommentActionTypes from "../enums/commentActionTypes";

export const uploadComment = () => async (dispatch: Dispatch<CommentActions>) => {
    try {
        const hostAddress = process.env.SERVER_HOST || 'http://localhost:5000';
        const response = await axios.get(`${hostAddress}/tracks/comment`);
        dispatch({type: CommentActionTypes.UPLOAD_COMMENT, payload: response.data});
    } catch (err) {
        dispatch({type: CommentActionTypes.UPLOAD_COMMENT_ERROR, payload: 'Error uploading comment!'});
    }
}