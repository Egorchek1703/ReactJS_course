import { renderEntireTree } from './render';
import state, { addPostIdea, updateNewPostIdea, addMessage, updateNewMessage } from './redux/state';

renderEntireTree(state, addPostIdea, updateNewPostIdea, addMessage, updateNewMessage)
