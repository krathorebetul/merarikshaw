import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebaseDb from "../../firebase";
import "../../Main/css/style.css";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";

const StateView = () => {
  const currentId = useParams();
  const [vehicleType, setVehicleType] = useState({});
  const { id } = currentId;

  useEffect(() => {
    firebaseDb.ref("state").on("value", (snapshot) => {
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

        global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

      }


      <div className="container mt-5 w-75">
        {Object.keys(vehicleType).map((userId) => {
          if (userId === id) {
            return (
              <div className="card text-center contain text-light">
                <div className="card-header lead"><h2>State Detail</h2></div>
                <div className="card-body">
                  <p className="card-text"> <h6>State: {vehicleType[id].statename}</h6></p>
                  <Link to="/stateregistration/ReportState">
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

export default StateView;