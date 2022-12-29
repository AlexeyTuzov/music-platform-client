import { IComment } from "../../../types/types";

interface CommentState {
    comment: null | IComment;
    error?: string;
}

export default CommentState;