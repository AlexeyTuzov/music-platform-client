import * as PlayerActions from './playerActions';
import * as TracksActions from './tracksActions';
import * as CommentActions from './commentsActions';

export default {
	...PlayerActions,
	...TracksActions,
	...CommentActions
};
