import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from 'react-redux';
// import { ExitToApp } from "@mui/icons-material";
import { getCity, getMemberReg, getmemberReg, getState, getVehicle } from "../redux/actions";
import HeaderAdmin from "./HeaderAdmin";
import RegistrationVehicle from "../../VehicleRegstration/components/RegistrationVehicle";
import logo from "../image/logo.jpg";

const i = 0;
global.createshopkeeperdb = 0;
const MemberLogin = () => {


  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();


  const { loader: memberReg } = useSelector(state => state.memberReg);



  useEffect(() => {
    dispatch(getMemberReg());
    dispatch(getVehicle());
    dispatch(getState());
    dispatch(getCity());

  }, []);

  const errors = {
    uname: "invalid username"

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    ///////////////////////

    Object.keys(memberReg).map((id, index) => {


      // Compare user info
      if (memberReg) {
        if (memberReg[id].contact === uname.value && memberReg[id].Memberid === pass.value) {
          // Invalid password
          setIsSubmitted(true);
          global.registered_memberName = memberReg[id].MemberName;
          global.registered_memberid = memberReg[id].Memberid;
          global.registered_member_contact = memberReg[id].contact;
          alert('Member login', memberReg[id].Memberid);
          dispatch(getMemberReg());

          //    ExitToApp()
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
          <h1 className='text-center  text-light'> Member Login</h1>

          <div className="mb-3">
            <label className="form-label"> Mobile Number </label>
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

              global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <RegistrationVehicle />

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

export default MemberLogin;