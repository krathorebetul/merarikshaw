import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebaseDb from "../../firebase";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";


const VehicleView = () => {
  const currentId = useParams();
  const [vehicles, setVehicle] = useState({});
  const { id } = currentId;

  useEffect(() => {
    firebaseDb.ref("vehicle_reg").on("value", (snapshot) => {
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

        global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

      }

      <div className="container mt-5 w-75">
        {Object.keys(vehicles).map((userId) => {
          if (userId === id) {
            return (
              <div className="card text-center contain text-light">
                <div className="card-header lead "><h2>Vehicle Detail</h2> </div>
                <div className="card-body">
                  <p className="card-text"><h6 className="bg-warning">Registered by : {vehicles[id].MemberName}</h6></p>
                  <p className="card-text"><h6>Name: {vehicles[id].name}</h6></p>
                  <p className="card-text"><h6>Contact number: {vehicles[id].contact}</h6></p>
                  <p className="card-text"><h6>Emergency number: {vehicles[id].emerygency}</h6></p>
                  <p className="card-text"><h6>Vehicle no. : {vehicles[id].vehicleno}</h6></p>
                  <p className="card-text"><h6>Vehicle pic : <br /> <img src={vehicles[id].vehiclepic} height={80} width={80} /></h6></p>
                  <p className="card-text"><h6>Vehicle Type: {vehicles[id].vehicle}</h6></p>
                  <p className="card-text"><h6>State: {vehicles[id].statename}</h6></p>
                  <p className="card-text"><h6>City: {vehicles[id].cityname}</h6></p>
                  <p className="card-text"><h6>Area: {vehicles[id].areaname}</h6></p>
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

export default VehicleView;