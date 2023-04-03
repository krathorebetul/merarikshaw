import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteState, deleteVehicleType, getState, getVehicleType } from "../../Main/redux/actions";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../css/reportstate.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";

const ReportState = () => {
  const { loader: Loadstate } = useSelector(state => state.Loadstate);


  let dispatch = useDispatch();



  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteState(id));
    }
  };
  return (
    <div>
      {

        global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

      }


      <div className="container mt-5 ">
        <div className="jumbotron">
          <h1 className="text-center m-5  text-light">
            State Report
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <table className="table table-bordered table-striped statetable">
              <thead className="thead-dark">
                <tr className="text-center ">
                  <th scope="col" className="text-light stateth">No.</th>
                  <th scope="col" className="text-light stateth">State</th>
                  <th scope="col" className="text-light stateth">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(Loadstate).map((id, index) => {
                  return (
                    <tr key={id} className="text-center ">
                      <td scope="row" className="text-light statetd">{index + 1}</td>
                      <td className="text-light statetd">{Loadstate[id].statename}</td>
                      <td className="text-light statetd">
                        <Link to={`/stateregistration/RegistrationState/update/${id}`}>
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
                        <Link to={`/stateregistration/ReportState/view/${id}`}>
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

export default ReportState;
