import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebaseDb from "../../firebase";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";


const CityView = () => {
  const currentId = useParams();
  const [cities, setCities] = useState({});
  const { id } = currentId;

  useEffect(() => {
    firebaseDb.ref("city").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setCities({
          ...snapshot.val(),
        });
      } else {
        setCities({});
      }
    });
  }, [id]);
  return (

    <div>

      {

        global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

      }

      <div className="container mt-5 w-75">
        {Object.keys(cities).map((userId) => {
          if (userId === id) {
            return (
              <div className="card text-center contain text-light">
                <div className="card-header lead"><h2>City Detail</h2></div>
                <div className="card-body">
                  <p className="card-text"><h6> State : {cities[id].statename} </h6></p>
                  <p className="card-text"><h6>City : {cities[id].cityname}</h6></p>

                  <Link to="/cityregistration/ReportCity">
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

export default CityView;