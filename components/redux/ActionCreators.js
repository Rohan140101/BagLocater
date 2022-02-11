import * as ActionTypes from "./ActionTypes";

export const addName = (name) => {
    return {
        type: ActionTypes.PASSENGER_NAME,
        payload: name
    }
}

export const addEmail = (email) => {
    return {
        type: ActionTypes.EMAIL,
        payload: email
    }
}

export const addFlightNumber = (flightNumber) => {
    return {
        type: ActionTypes.FLIGHT_NUMBER,
        payload: flightNumber
    }
}

export const addBaggageNumber = (baggageNumber) => {
    return {
        type: ActionTypes.BAGGAGE_NUMBER,
        payload: baggageNumber
    }
}

export const addDepartureAirport = (departureAirport) => {
    return {
        type: ActionTypes.DEPARTURE_AIRPORT,
        payload: departureAirport
    }
}

export const addArrivalAirport = (arrivalAirport) => {
    return {
        type: ActionTypes.ARRIVAL_AIRPORT,
        payload: arrivalAirport
    }
}

export const addPassengerDetail = (addPassenger) => {
    return {
        type: ActionTypes.ADD_PASSENGER_DETAIL,
        payload: addPassenger
    }
}