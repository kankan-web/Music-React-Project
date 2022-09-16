import { combineReducers } from 'redux-immutable'

import {reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import {reducer as playerReducer } from '@/pages/player/store'
import {reducer as rankingReducer } from '@/pages/discover/c-pages/ranking/store'
import {reducer as songListReducer } from '@/pages/discover/c-pages/songs/store'
import {reducer as artistReducer } from '@/pages/discover/c-pages/artist/store'
import {reducer as songReducer } from '@/pages/song/store'
import {reducer as songListDetailReducer } from '@/pages/song-list/store'
import {reducer as singerReducer } from '@/pages/singer/store'
import {reducer as loginReducer } from '@/components/model-login/store'
import {reducer as albumReducer } from '@/pages/album/store'
const cReducer = combineReducers({
  recommend:recommendReducer,
  player:playerReducer,
  ranking:rankingReducer,
  songList:songListReducer,
  artist:artistReducer,
  song:songReducer,
  songListDetail:songListDetailReducer,
  singer:singerReducer,
  loginState: loginReducer,
  album:albumReducer
})
export default cReducer;