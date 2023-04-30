import {SET_PEOPLE, SET_PLANETS} from "../../constants";

const initialState = {
  people: [],
  planets: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE: {
      return {
        ...state,
        people: state.people.concat(action.payload)
      }
    }
    case SET_PLANETS: {
      return {
        ...state,
        planets: state.planets.concat(action.payload)
      }
    }
    default:
      return state
  }
}

export default reducer
