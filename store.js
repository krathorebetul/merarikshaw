import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import Header from "../components/Header";
import HeaderAdmin from "../components/HeaderAdmin";
import { loginReducer,
       vehicleTypeReducer,
       cityReducer,
       areaReducer,
       vehicleReducer, 
       stateReducer,
       memberRegReducer,
        payReducer } from "./reducer";

        
const middleware = [thunk];



const rootReducer = combineReducers({
   login:loginReducer,
   memberReg:memberRegReducer,
   pay:payReducer,
   vehicleType:vehicleTypeReducer,
   Loadstate:stateReducer,
   Loadcity:cityReducer,
   Loadarea:areaReducer,
   vehicles:vehicleReducer


   
 });


const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store;
