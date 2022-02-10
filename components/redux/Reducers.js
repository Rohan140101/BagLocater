import * as ActionTypes from "./ActionTypes";

const initialState = {
    name: "",
    email: "",
    flightNumber: "",
    baggageNumber: "",
    departureAirport: "",
    arrivalAirport: ""
}

const PassengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PASSENGER_NAME:
            return {...state, name: action.payload}
        case ActionTypes.EMAIL:
            return {...state, email: action.payload}
        case ActionTypes.FLIGHT_NUMBER:
            return {...state, flightNumber: action.payload}
        case ActionTypes.BAGGAGE_NUMBER:
            return {...state, baggageNumber: action.payload}
        case ActionTypes.DEPARTURE_AIRPORT:
            return {...state, departureAirport: action.payload}
        case ActionTypes.ARRIVAL_AIRPORT:
            return {...state, arrivalAirport: action.payload}
        case ActionTypes.ADD_PASSENGER_DETAIL:
            var name = action.payload.Name;
            var email = action.payload.Email;
            var flightNumber = action.payload.Flight_No;
            var baggageNumber = action.payload.Baggage_No;
            var departureAirport = action.payload.From;
            var arrivalAirport = action.payload.To;
            return {...state, name, email, flightNumber, baggageNumber, departureAirport, arrivalAirport}
        default:
            return state;
    }
}

export default PassengerReducer;