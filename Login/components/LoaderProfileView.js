import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import firebaseDb from "../../firebase";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";
import { addVehicle } from "../../Main/redux/actions";
var i = 0;

const LoaderProfileView = () => {

  const initialState =
  {
    name: "",
    vehiclepic: "",
    contact: '',
    emerygency:'',
    vehicletype: "",
    address: "",
    MemberName: "",
    Memberid: ""
  };

  const { loader: vehicles } = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);
  const LoaderProfile = [];
  console.log(vehicles);
  const send = (e) => {
    dispatch(addVehicle(e));
  }
  useEffect(() => {

    setState(vehicles);
  }, []);

  /* now destructure the id  from url*/
  const { id } = useParams();


  const eid = id;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };


  Object.keys(vehicles).forEach(key => {

    ((vehicles[key].contact == global.registered_contact)) ? LoaderProfile.push({ key, value: (vehicles[key]) }) : console.log("");

  }

  )


  return (
    <>

      <div>


        <div className="container mt-5 w-75 border border-dark">

          {
            Object.keys(LoaderProfile).map((element, id, index) => {
              { i = i + 1 }
              return (
                <div key={id} className="card text-center contain text-light">
                  <div className="jumbotron">

                    <img className="m-3 rounded-cricle rounded-lg border border-light border"
                      style={{ height: "80px", weight: "50px", borderRadius: "50px" }}
                      src={LoaderProfile[element].value.vehiclepic} height={100} width={100} />
                  </div>
                  <div className="card-body">
                    {/* <p scope="row" className="text-light">{index + 1}</p> */}
                    <p className="text-warning"><h3> {LoaderProfile[element].value.name || ""}</h3></p>
                    <p className="card-text "><h6>Contact number: {LoaderProfile[element].value.contact || ""}</h6></p>
                    <p className="card-text"><h6>Emergency number: {LoaderProfile[element].value.emergency || ""}</h6></p>
                    <p className="card-text"><h6>Vehicle no. : {LoaderProfile[element].value.vehicleno || ""}</h6></p>
                    <p className="card-text"><h6>Vehicle Type: {LoaderProfile[element].value.vehicle || ""}</h6></p>
                    <p className="card-text"><h6>State: {LoaderProfile[element].value.statename || ""}</h6></p>
                    <p className="card-text"><h6>City: {LoaderProfile[element].value.cityname || ""}</h6></p>
                    <p className="card-text"><h6>Area: {LoaderProfile[element].value.areaname || ""}</h6></p>
                    <p className="card-text"><h6>Addres: {LoaderProfile[element].value.address || ""}</h6></p>
                    <p className="card-text"><h6>Area Pincode: {LoaderProfile[element].value.areapincode || ""}</h6></p>


                    <Link to="/terms&condition">
                      <p>Terms & Conditions </p>
                    </Link>

                    <Link to="/login">
                      <button className="btn btn-info">Log Out </button>
                    </Link>
                  </div>

                </div>


              );
            })}
        </div>
      </div>

    </>
  )
};

export default LoaderProfileView;