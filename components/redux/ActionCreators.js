import * as ActionTypes from "./ActionTypes";

export const addPassengerDetail = (addPassenger) => {
    return {
        type: ActionTypes.ADD_PASSENGER_DETAIL,
        payload: addPassenger
    }
}

export const addUrl = (url) => {
    return {
        type: ActionTypes.ADD_URL,
        payload: url
    }
}

export const addAirport = (airport) => {
    return {
        type: ActionTypes.ADD_AIRPORT,
        payload: airport
    }
}