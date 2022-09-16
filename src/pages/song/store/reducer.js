import {Map} from 'immutable';
import * as actionTypes from './constants'

const defaultState =Map({
  showCurrentSongId:'',
  showCurrentSongDetail:{},
  showCurrentSongCommentTotal:0,
  showCurrentSongComment:[],
  showCurrentSongHotComment:[],
  showCurrentSongLyricList:[],//当前展示歌曲的歌词
})

function reducer(state = defaultState,action){
  switch (action.type) {
    case actionTypes.CHANGE_SHOW_CURRENT_SONG_ID:
      return state.set("showCurrentSongId", action.id);
    case actionTypes.CHANGE_SHOW_CURRENT_SONG_DETAIL:
      return state.set("showCurrentSongDetail",action.detail);
    case actionTypes.CHANGE_SHOW_CURRENT_SONG_COMMENT_TOTAL:
      return state.set('showCurrentSongCommentTotal',action.total);
    case actionTypes.CHANGE_SHOW_CURRENT_SONG_COMMENT:
      return state.set('showCurrentSongComment',action.comments);
    case actionTypes.CHANGE_SHOW_CURRENT_SONG_HOT_COMMENT:
      return state.set('showCurrentSongHotComment',action.hotComments);
    case actionTypes.CHANGE_SHOW_CURRENT_SONG_LYRIC_LIST:
      return state.set('showCurrentSongLyricList',action.lyricList);
    default:
      return state;
  }
}
export default reducer;

