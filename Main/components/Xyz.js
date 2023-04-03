import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginRegistration from "../../Login/components/LoginRegistration";
import { getArea, getCity, getState, getVehicle, getVehicleType } from "../redux/actions";


const Xyz = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getVehicleType());
        dispatch(getState());
        dispatch(getCity());
        dispatch(getArea());
        dispatch(getVehicle());
        

    }, []);

    return (

        <div>
            <LoginRegistration />
        </div>
    )
}


export default Xyz;