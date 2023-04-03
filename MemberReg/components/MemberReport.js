import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { deleteMemberReg, getMemberReg, } from "../../Main/redux/actions";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";
import "../css/memreport.css";
const ReportVehicle = () => {
  const { loader: memberReg } = useSelector(state => state.memberReg);


  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemberReg());
  }, [dispatch]);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteMemberReg(id));
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
            Member Registration Report
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <table className="memregtable table table-bordered table-striped">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th scope="col" className="memregth text-light">No.</th>
                  <th scope="col" className="memregth text-light">Name</th>
                  <th scope="col" className="memregth text-light">Contact No.</th>
                  <th scope="col" className="memregth text-light">Password</th>
                  <th scope="col" className="memregth text-light">Employ Id.</th>
                  <th scope="col" className="memregth text-light">Father Name</th>
                  <th scope="col" className="memregth text-light">Member Pic </th>
                  <th scope="col" className="memregth text-light">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(memberReg).map((id, index) => {
                  return (
                    <tr key={id} className="text-center">
                      <td scope="row" className="text-light">{index + 1}</td>
                      <td className="memregtd text-light">{memberReg[id].MemberName}</td>
                      <td className="memregtd text-light">{memberReg[id].contact}</td>
                      <td className="memregtd text-light"> {memberReg[id].Memberid}</td>
                      <td className="memregtd text-light">{memberReg[id].employid}</td>
                      <td className="memregtd text-light">{memberReg[id].FatherName}</td>
                      <td className="memregtd text-light"><img src={memberReg[id].memberpic} height={80} width={80} /></td>

                      <td className="memregtd text-light">
                        <Link to={`/MemberReg/Reg/update/${id}`}>
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
                        <Link to={`/MemberReg/ReportMember/view/${id}`}>
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
