import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebaseDb from "../../firebase";
import Header from "../../Main/components/Header";
import "../../Main/css/style.css";
import HeaderAdmin from "../../Main/components/HeaderAdmin";


const Viewarea = () => {
  const currentId = useParams();
  const [areas, setAreas] = useState({});
  const { id } = currentId;

  useEffect(() => {
    firebaseDb.ref("area").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setAreas({
          ...snapshot.val(),
        });
      } else {
        setAreas({});
      }
    });
  }, [id]);
  return (

    <div>

      {

        global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

      }

      <div className="container mt-5 w-75">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        {Object.keys(areas).map((userId) => {
          if (userId === id) {
            return (
              <div className="card text-center contain text-light">
                <div className="card-header lead"><h2> Area Detail</h2></div>
                <div className="card-body">
                  <p className="card-text"><h6>State: {areas[id].statename}</h6></p>
                  <p className="card-text"><h6>City: {areas[id].cityname}</h6></p>
                  <p className="card-text"><h6>Area: {areas[id].areaname}</h6></p>
                  <Link to="/arearegistration/reportarea">
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

export default Viewarea;