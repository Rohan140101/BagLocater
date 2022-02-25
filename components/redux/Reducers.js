import * as ActionTypes from "./ActionTypes";

const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    flightNumber: "",
    baggageNumber: "",
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    arrivalDate: "",
}

const PassengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_URL:
            var url = action.payload.url;
            console.log("URL: ", url);
            return {...state, url};
        case ActionTypes.ADD_PASSENGER_DETAIL:
            var name = action.payload.Name;
            var email = action.payload.Email;
            var phoneNumber = action.payload.Phone_No;
            var flightNumber = action.payload.Flight_No;
            var baggageNumber = action.payload.Baggage_No;
            var departureAirport = action.payload.From;
            var arrivalAirport = action.payload.To;
            var departureDate = action.payload.Departure_Date;
            var arrivalDate = action.payload.Arrival_Date;
            return {...state, name, email, flightNumber, baggageNumber, departureAirport, arrivalAirport, phoneNumber, departureDate, arrivalDate}
        default:
            return state;
    }
}

export default PassengerReducer;