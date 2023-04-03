import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/reportvehicle.css';
import { deleteVehicle, getVehicle } from "../../Main/redux/actions";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";

const ReportVehicle = () => {
  const { loader: vehicles } = useSelector(state => state.vehicles);


  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicle());
  }, [dispatch]);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteVehicle(id));
    }
  };


  return (
    <div>
      {

        <HeaderAdmin />

      }


      <div className="container-fluid mt-5 ">
        <div className="jumbotron">
          <h1 className="text-center m-5 text-light">
            Rikshaw Registration Report
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <table className=" vehregtable table table-bordered table-striped">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th scope="col" className="vehregth text-light">No.</th>
                  <th scope="col" className="vehregth text-light">Name</th>
                  <th scope="col" className="vehregth text-light">Contact No.</th>
                  <th scope="col" className="vehregth text-light">Emergency No.</th>
                  <th scope="col" className="vehregth text-light">Vehicle No.</th>
                  <th scope="col" className="vehregth text-light">Vehicle pic.</th>
                  <th scope="col" className="vehregth text-light">Vehicle type</th>
                  <th scope="col" className="vehregth text-light">State</th>
                  <th scope="col" className="vehregth text-light">City</th>
                  <th scope="col" className="vehregth text-light">Area</th>
                  <th scope="col" className="vehregth text-light">Area Pincode</th>
                  <th scope="col" className="vehregth text-light">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(vehicles).map((id, index) => {
                  return (
                    <tr key={id} className="text-center">
                      <td scope="row" className="vehregtd text-light">{index + 1}</td>
                      <td className="vehregtd text-light">{vehicles[id].name}</td>
                      <td className="vehregtd text-light">{vehicles[id].contact}</td>
                      <td className="vehregtd text-light">{vehicles[id].emergency}</td>
                      <td className="vehregtd text-light">{vehicles[id].vehicleno}</td>
                      <td className="vehregtd text-light"><img src={vehicles[id].vehiclepic} height={80} width={80} /></td>
                      <td className="vehregtd text-light">{vehicles[id].vehicle}</td>
                      <td className="vehregtd text-light">{vehicles[id].statename}</td>
                      <td className="vehregtd text-light">{vehicles[id].cityname}</td>
                      <td className="vehregtd text-light">{vehicles[id].areaname}</td>
                      <td className="vehregtd text-light">{vehicles[id].areapincode}</td>
                      <td className="vehregtd text-light">
                        <Link to={`/vehicleRegistration/Registration/update/${id}` || {}}>
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
                        <Link to={`/vehicleRegistration/ReportVehicle/view/${id}`}>
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

export default ReportVehicle;
