import { combineReducers } from 'redux'
import {
  LOAD_POSTS,
  TOGGLE_NEW_POST_MODAL,
  TOGGLE_EDIT_POST_MODAL,
  LOAD_CATEGORIES,
  UPDATE_POST_IN_EDITION,
  UPDATE_POST_IN_LIST
} from '../actions'

function posts(posts = [], action) {
  switch (action.type) {
    case UPDATE_POST_IN_LIST:
      posts = posts.slice(0);
      const i = posts.findIndex(p => p.id === action.post.id);
      if (i < 0) // is a new post
        posts.push(action.post);
      else
        posts[i] = action.post;
      return posts;
    case LOAD_POSTS:
      return action.posts;
    default:
      return posts;
  }
}

function categories(categories = [], action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return action.categories;
    default:
      return categories;
  }
}

function modals(modalsStatus = { isOpenPostForm: false, postInEdition: {} }, action) {
  switch (action.type) {
    case TOGGLE_NEW_POST_MODAL:
      return {
        isOpenPostForm: action.isOpen,
        postInEdition: {},
        isNewPost: action.isOpen
      };
    case TOGGLE_EDIT_POST_MODAL:
      return {
        isOpenPostForm: action.isOpen,
        postInEdition: action.isOpen ? action.post : {},
        isNewPost: false
      }
    case UPDATE_POST_IN_EDITION:
      return {
        postInEdition: action.post,
        isOpenPostForm: action.isOpen
      }
    default:
      return modalsStatus;
  }
}

export default combineReducers({
  posts,
  categories,
  modals
});
