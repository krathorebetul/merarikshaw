import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteCity, getCity } from "../../Main/redux/actions";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import "../css/reportcity.css";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";


const ReportCity = () => {
  const { loader: Loadcity } = useSelector(state => state.Loadcity);

  let dispatch = useDispatch();



  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteCity(id));
    }
  };


  return (

    <div>
      {

        global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

      }

      <div className="container mt-5">
        <div className="jumbotron">
          <h1 className="text-center m-5 text-light">
            City Report
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <table className="table table-bordered table-striped citytable">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th scope="col" className="text-light cityth">No.</th>
                  <th scope="col" className="text-light cityth">State</th>
                  <th scope="col" className="text-light cityth">City</th>
                  <th scope="col" className="text-light cityth">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(Loadcity).map((id, index) => {
                  return (
                    <tr key={id} className="text-center">
                      <td scope="row" className="text-light citytd">{index + 1}</td>
                      <td className="text-light citytd">{Loadcity[id].statename}</td>
                      <td className="text-light citytd">{Loadcity[id].cityname}</td>
                      <td className="text-light citytd">
                        <Link to={`/cityregistration/RegistrationCity/update/${id}`}>
                          <p className="btn text-primary">
                            <i className="bi bi-pencil" />
                          </p>
                        </Link>

                        <p
                          className="btn text-danger"
                          onClick={() => onDelete(id)}
                        >
                          <i className="bi bi-trash" />
                        </p>
                        <Link to={`/cityregistration/ReportCity/view/${id}`}>
                          <p className="btn text-info">
                            <i className="bi bi-eye" />

                          </p>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportCity;
