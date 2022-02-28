import { takeEvery, put, all, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_HOME_MULTIDATA } from './constants'
import {
    changeBannersAction,
    changeRecommendAction,
    CHANGE_BANNERS,
    CHANGE_RECOMMEND,
} from './actionCreators'

function* fetchHomeMlltidata(action) {
    const res = yield axios({
        url: 'http://api.zhuzm.icu/coderwhy',
    })
    const { banner, recommend } = res.data.data
    yield all([
        yield put(changeBannersAction(banner?.list)),
        yield put(changeRecommendAction(recommend?.list)),
    ])
}
function* mySaga() {
    yield all([takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMlltidata)])
}
export default mySaga
