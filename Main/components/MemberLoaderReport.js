import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addVehicle, deleteVehicle, getVehicle } from "../redux/actions";
import Header from "./Header";
import "../css/MemberLoaderReport.css";
// var i = 0;
const MemberLoaderReport = () => {



  const initialState =
  {
    name: "",
    vehiclepic: "",
    contact: '',
    vehicletype: "",
    address: "",
    MemberName: "",
    Memberid: ""
  };

  const { loader: vehicles } = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);
  const LoadUserDatabyMembers = [];
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

    ((vehicles[key].MemberName == global.registered_memberName)) ? LoadUserDatabyMembers.push({ key, value: (vehicles[key]) }) : console.log("");

  }

  )




  return (
    <>

      <div>

        <div>
          {
            <Header />

          }
        </div>
        <div className="container-fluid mt-5 ">
          <div className="jumbotron">
            <h1 className="text-center m-5 text-light">
              Member Loader Report
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                  <tr className="text-center">
                    <th scope="col" className="text-light">No.</th>
                    <th scope="col" className="text-light">Vehicle Pic</th>
                    <th scope="col" className="text-light bg-warning">Registred By</th>
                    <th scope="col" className="text-light">Loader Name</th>
                    <th scope="col" className="text-light">Loader Password</th>
                    <th scope="col" className="text-light">Contact No.</th>
                    <th scope="col" className="text-light">Address</th>
                    <th scope="col" className="text-light">Area Pincode</th>
                    <th scope="col" className="text-light">Vehicle No.</th>
                    <th scopr="col" className="text-light">Vehicle Type</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.keys(LoadUserDatabyMembers).map(( id ,index) => {
                      // { i = i + 1 }
                      return (
                        <tr key={id} className="text-center">
                          <td scope="row" className="text-light">{index+1}</td>
                          <td className="text-light"><img src={LoadUserDatabyMembers[id].value.vehiclepic} height={80} width={80} /></td>
                          <td className="text-warning">{LoadUserDatabyMembers[id].value.MemberName || ""}</td>
                          <td className="text-light">{LoadUserDatabyMembers[id].value.name || ""}</td>
                          <td className="text-light">{LoadUserDatabyMembers[id].value.contactid || ""} </td>
                          <td className="text-light">{LoadUserDatabyMembers[id].value.contact || ""}</td>
                          <td className="text-light">{LoadUserDatabyMembers[id].value.address || ""}</td>
                          <td className="text-light">{LoadUserDatabyMembers[id].value.areapincode || ""}</td>
                          <td className="text-light">{LoadUserDatabyMembers[id].value.vehicleno || ""}</td>
                          <td className="text-light">{LoadUserDatabyMembers[id].value.vehicle || ""}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default MemberLoaderReport;