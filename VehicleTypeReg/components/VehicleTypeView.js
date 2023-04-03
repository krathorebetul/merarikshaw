import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebaseDb from "../../firebase";
// import "../../VehicleTypeReg/css/style.css";
import "../../Main/css/style.css";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";

const VehicleTypeView = () => {
  const currentId = useParams();
  const [vehicleType, setVehicleType] = useState({});
  const { id } = currentId;

  useEffect(() => {
    firebaseDb.ref("vehicle_type").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setVehicleType({
          ...snapshot.val(),
        });
      } else {
        setVehicleType({});
      }
    });
  }, [id]);
  return (
    <div>
      {
        <HeaderAdmin />

      }


      <div className="container mt-5 w-75">
        {Object.keys(vehicleType).map((userId) => {
          if (userId === id) {
            return (
              <div className="card text-center contain text-light">
                <div className="card-header lead"><h2>Vehicle Type Detail</h2></div>
                <div className="card-body">
                  <p className="card-text"> <h6>Vehicle : {vehicleType[id].vehicle}</h6></p>
                  <Link to="/vehicletype/ReportVehicleType">
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

export default VehicleTypeView;