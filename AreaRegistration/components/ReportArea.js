import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { deleteArea, getArea } from "../../Main/redux/actions";
import "../../AreaRegistration/css/reportarea.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";

const ReportArea = () => {
  const { loader: Loadarea } = useSelector(state => state.Loadarea);
  let dispatch = useDispatch();


  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteArea(id));
    }
  };
  return (
    <>
      <div>

        {

          global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

        }

      </div>
      <div className="container mt-5">
        <div className="jumbotron">
          <h1 className="text-center m-5 text-light">
            Area Report
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <table className="table table-bordered table-striped areatable">
              <thead className="thead-dark areathread">
                <tr className="text-center" >
                  <th scope="col" className="text-light areath">No.</th>
                  <th scope="col" className="text-light areath">State</th>
                  <th scope="col" className="text-light areath">City</th>
                  <th scope="col" className="text-light areath">Area</th>
                  <th scope="col" className="text-light areath">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(Loadarea).map((id, index) => {
                  return (
                    <tr key={id} className="text-center">
                      <td scope="row" className="text-light">{index + 1}</td>
                      <td className="text-light areatd">{Loadarea[id].statename}</td>
                      <td className="text-light areatd">{Loadarea[id].cityname}</td>
                      <td className="text-light areatd">{Loadarea[id].areaname}</td>
                      <td className="text-light areatd">
                        <Link to={`/arearegistration/RegistrationArea/update/${id}`}>
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
                        <Link to={`/arearegistration/reportarea/view/${id}`}>
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
    </>
  );
};

export default ReportArea;