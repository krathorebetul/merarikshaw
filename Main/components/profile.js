import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebaseDb from "../../firebase";
import { useSelector, useDispatch } from 'react-redux';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";
import Header from "./Header";
import HeaderAdmin from "./HeaderAdmin";

const Profile = () => {
  const currentId = useParams();
  const [vehicles, setVehicle] = useState({});
  const { id } = currentId;

  useEffect(() => {
    firebaseDb.child("vehicle_reg").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setVehicle({
          ...snapshot.val(),
        });
      } else {
        setVehicle({});
      }
    });
  }, [id]);
  return (
    <div>
      {

        global.registered_contact === '8109276836' ? <HeaderAdmin /> : <Header />

      }
      <div className="container mt-5 w-75">
        {Object.keys(vehicles).map((userId) => {
          if (userId === id) {
            return (
              <div className="card text-center contain text-light">
                <div className="card-header lead"><h2>Vehicle Registration Detail</h2></div>
                <div className="card-body">
                  <p className="card-text">Name : {vehicles[id].name}</p>
                  <p className="card-text">Contact number : {vehicles[id].contact}</p>
                  <p className="card-text">Emergency number : {vehicles[id].emergency}</p>
                  <p className="card-text">Vehicle no. : {vehicles[id].vehicleno}</p>
                  <p className="card-text">Vehicle pic : <br /> <img src={vehicles[id].vehiclepic} height={80} width={80} /></p>
                  <p className="card-text">Vehicle type : {vehicles[id].vehicle}</p>
                  <p className="card-text">State : {vehicles[id].statename}</p>
                  <p className="card-text">City : {vehicles[id].cityname}</p>
                  <p className="card-text">Area : {vehicles[id].areaname}</p>
                  <Link to="/vehicleRegistration/ReportVehicle">
                    <button className="btn btn-info">Go Back</button>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>

  );
};

export default Profile;

