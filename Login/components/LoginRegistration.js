import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from 'react-redux';
// import { ExitToApp } from "@mui/icons-material";
import { getArea, getCity, getState, getVehicle } from "../../Main/redux/actions";
import HeaderAdmin from "../../Main/components/HeaderAdmin";
import ReportVehicle from "../../VehicleRegstration/components/ReportVehicle";
import logo from "../../Main/image/logo.jpg";

import { Link } from "react-router-dom";
import LoaderProfileView from "./LoaderProfileView";


const i = 0;
global.registered_contact = 0;
global.registered_contactid = 0;
const LoginRegistration = () => {


  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();


  const { loader: vehicles } = useSelector(state => state.vehicles);


  
  useEffect(() => {
    dispatch(getVehicle());
    dispatch(getState());
    dispatch(getCity());
    dispatch(getArea());


  }, []);

  const errors = {
    uname: "invalid username"

  };



  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];

    Object.keys(vehicles).map((id, index) => {

      // Compare user info
      if (vehicles) {
        if (vehicles[id].contact === uname.value && vehicles[id].contactid === pass.value) {

          setIsSubmitted(true);
          global.registered_contact = vehicles[id].contact;
          global.registered_contactid = vehicles[id].contactid;

          alert('login', vehicles[id].contactid);

          dispatch(getVehicle());


        }

      }
      else {
        // Username not found
        setErrorMessages({ name: "username", message: errors.username });
        alert("Incorrect Mobile Number");

      }

    }
    )

  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (

    <div>

      <div className="container contain p-5  my-5 border text-light  mt-5 back w-75">
        <form onSubmit={handleSubmit}>
          <div className="text-center text-light">
            <img className="rounded-cricle border border-light border-5 m-2" src={logo} alt="logo.png" style={{ height: "150px", weight: "150px", borderRadius: "150px" }} />
          </div>
          <h1 className='text-center  text-light'> Mera Rikshaw </h1>
        
          <h1 className='text-center  text-light'> Login</h1>
          <div className="mb-3">
            <label className="form-label">Mobile Number </label>

            <input
              className="form-control w-100 mt-2"
              type="number"
              name="uname"
              placeholder="Mobile no"
              required />
            {renderErrorMessage("uname")}
          </div>



          <div className="mb-3">
            <label className="form-label" >Password </label>
            <input
              type="password"
              className="form-control w-100 mt-2"
              name="pass"
              placeholder="Password"
              required />
            {renderErrorMessage("pass")}
          </div>


          <div className="text-center mb-2">
            <input className="btn bg-warning mr-3" type="submit" />
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <Link to="/memberlogin" className="btn btn-dark"> Registration </Link>
          </div>
        </form>
      </div>
    </div>

  );


  return (
    <div>
      {
        isSubmitted ?
          <div>
 

            {

              <LoaderProfileView />

            }

          </div>
          :
          <div className="app">
            <div className="login-form">

              {renderForm}
              

            </div>
          </div>
      }
    </div>
  );
}

export default LoginRegistration;