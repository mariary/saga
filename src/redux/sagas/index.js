import {put, takeEvery, call, fork} from 'redux-saga/effects'
import {LOAD_DATA, SET_PEOPLE, SET_PLANETS} from "../../constants";


async function swapApi(pattern) {
  const request = await fetch(`https://swapi.dev/api/${pattern}`)

  return await request.json()
}

export function* loadPeople() {
  const people = yield call(swapApi, 'people')

  yield put({type: SET_PEOPLE, payload: people.results})
}

export function* loadPlanets() {
  const planets = yield call(swapApi, 'planets')

  yield put({type: SET_PLANETS, payload: planets.results})
}

export function* workerSaga() {
  yield fork(loadPeople)
  yield fork(loadPlanets)
}

export function* watchLoadDataSaga() {
  yield takeEvery(LOAD_DATA, workerSaga)
}

export default function* rootSaga() {
  yield fork(watchLoadDataSaga)
}