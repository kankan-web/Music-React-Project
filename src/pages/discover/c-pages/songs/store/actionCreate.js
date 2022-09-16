import * as actionTypes from './constant'
import { getSongCategory,getSongCategoryList } from '@/services/songs'
import {handleSongsCategory} from '@/utils/handle-data'
//获取歌曲类型 Action
const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res
})
// 获取歌曲类型 request
export const getCategory = () => {
  return dispatch => {
    getSongCategory().then(res => {
      const categoryData = handleSongsCategory(res);
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

//更改当前歌曲类型的名子 Action
export const changeCurrentCategoryAction = (name) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})

//更改当前歌曲类别的歌曲 Action
const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res
})
//获取当前歌曲类型的歌曲 request
export const getSongList = (page) => {
  return (dispatch, getState) => {
    // 1.获取currentCategory
    const name = getState().getIn(["songList", "currentCategory"]);

    // 2.获取数据
    getSongCategoryList(name, page * actionTypes.PER_PAGE_NUMBER).then(res => {
      dispatch(changeSongListAction(res));
    })
  }
}