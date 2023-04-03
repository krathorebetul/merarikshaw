import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteVehicleType, getVehicleType } from "../../Main/redux/actions";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../VehicleTypeReg/css/vehicletype.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";

const ReportVehicleType = () => {
  const { loader: vehicleType } = useSelector(state => state.vehicleType);


  let dispatch = useDispatch();


  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteVehicleType(id));
    }
  };
  return (
    <div>
      {

        <HeaderAdmin />

      }


      <div className="container mt-5 ">
        <div className="jumbotron">
          <h1 className="text-center m-5  text-light">
            Vehicle Type Report
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <table className="table table-bordered table-striped vttable">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th scope="col" className="text-light vtth">No. </th>
                  <th scope="col" className="text-light vtth">Vehicle Type</th>
                  <th scope="col" className="text-light vtth">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(vehicleType).map((id, index) => {
                  return (
                    <tr key={id} className="text-center">
                      <td scope="row" className="text-light vttd">{index + 1}</td>
                      <td className="text-light vttd">{vehicleType[id].vehicle}</td>
                      <td className="text-light vttd">
                        <Link to={`/vehicletype/RegVehicleType/update/${id}`}>
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
                        <Link to={`/vehicletype/ReportVehicleType/view/${id}`}>
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

export default ReportVehicleType;
