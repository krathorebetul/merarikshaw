//--------------IMPORTS-------------
import * as types from "./actionTypes";

//--------------INITIALSTATE---------------


const initialState = {
    loader: {},
    loading: false,
    error: null,
};


//-----------------------------------------REDUCERS-------------------------------------------
//--------------------LOGIN-REDUCER--------------


export const loginReducer = (state = initialState, action) => {

    switch (action.type) {


        case types.GET_LOGIN:
            return {
                ...state,
                loading: false,
                loader: action.payload,

            };


        case types.DELETE_LOGIN:
        case types.ADD_LOGIN:
        case types.EDIT_LOGIN:

            return {
                ...state,
                loading: false
            }


        default:
            return state;
    }
};


//--------------------MEMBERLOGIN-REDUCER--------------


export const memberRegReducer = (state = initialState, action) => {

    switch (action.type) {


        case types.GET_MEMBER_REG:
            return {
                ...state,
                loading: false,
                loader: action.payload,

            };


        case types.DELETE_MEMBER_REG:
        case types.ADD_MEMBER_REG:
        case types.EDIT_MEMBER_REG:

            return {
                ...state,
                loading: false
            }


        default:
            return state;
    }
};



//--------------------PAYMENT-REDUCER--------------


export const payReducer = (state = initialState, action) => {

    switch (action.type) {


        case types.GET_PAYMENT:
            return {
                ...state,
                loading: false,
                loader: action.payload,

            };


        case types.DELETE_PAYMENT:
        case types.ADD_PAYMENT:
        case types.EDIT_PAYMENT:

            return {
                ...state,
                loading: false
            }


        default:
            return state;
    }
};


//----------------VEHICLE-TYPE-REDUCERS----------------



export const vehicleTypeReducer = (state = initialState, action) => {

    switch (action.type) {


        case types.GET_VEHICLE_TYPE:
            return {
                ...state,
                loading: false,
                loader: action.payload,

            };


        case types.DELETE_VEHICLE_TYPE:
        case types.ADD_VEHICLE_TYPE:
        case types.EDIT_VEHICLE_TYPE:

            return {
                ...state,
                loading: false
            }


        default:
            return state;
    }
};



//-------------------------CITY-REDUCER--------------------



export const stateReducer = (state = initialState, action) => {

    switch (action.type) {


        case types.GET_STATE:
            return {
                ...state,
                loading: false,
                loader: action.payload,

            };


        case types.DELETE_STATE:
        case types.ADD_STATE:
        case types.EDIT_STATE:

            return {
                ...state,
                loading: false
            }


        default:
            return state;
    }
};



//-------------------------CITY-REDUCER--------------------



export const cityReducer = (state = initialState, action) => {

    switch (action.type) {


        case types.GET_CITY:
            return {
                ...state,
                loading: false,
                loader: action.payload,

            };


        case types.DELETE_CITY:
        case types.ADD_CITY:
        case types.EDIT_CITY:

            return {
                ...state,
                loading: false
            }


        default:
            return state;
    }
};


//--------------------------AREA REDUCERS-------------------------


export const areaReducer = (state = initialState, action) => {

    switch (action.type) {


        case types.GET_AREA:
            return {
                ...state,
                loading: false,
                loader: action.payload,

            };


        case types.DELETE_AREA:
        case types.ADD_AREA:
        case types.EDIT_AREA:

            return {
                ...state,
                loading: false
            }


        default:
            return state;
    }
};


//-------------------------------VEHICLE REGISTRATION---------------------


export const vehicleReducer = (state = initialState, action) => {

    switch (action.type) {


        case types.GET_VEHICLE:
            return {
                ...state,
                loading: false,
                loader: action.payload,

            };


        case types.DELETE_VEHICLE:
        case types.ADD_VEHICLE:
        case types.EDIT_VEHICLE:

            return {
                ...state,
                loading: false
            }


        default:
            return state;
    }
};

