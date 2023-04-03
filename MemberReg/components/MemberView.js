import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebaseDb from "../../firebase";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";


const VehicleView = () => {
  const currentId = useParams();
  const [MemberReg, setMemberReg] = useState({});
  const { id } = currentId;

  useEffect(() => {
    firebaseDb.ref("Member_Reg").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setMemberReg({
          ...snapshot.val(),
        });
      } else {
        setMemberReg({});
      }
    });
  }, [id]);
  return (
    <div>
      {

        global.registered_memberid === '6261257241' ? <HeaderAdmin /> : <Header />

      }

      <div className="container mt-5 w-75">
        {Object.keys(MemberReg).map((userId) => {
          if (userId === id) {
            return (
              <div className="card text-center contain text-light">
                <div className="card-header lead "><h2>Member Detail</h2></div>
                <div className="card-body">
                  <p className="card-text"><h6>Member Name: {MemberReg[id].MemberName}</h6></p>
                  <p className="card-text"><h6>Contact No. : {MemberReg[id].contact}</h6></p>
                  <p className="card-text"><h6>EmmployID: {MemberReg[id].employid}</h6></p>
                  <p className="card-text"><h6>Father Name : {MemberReg[id].FatherName}</h6></p>
                  <p className="card-text"><h6>Member Pic: <br /> <br /> <img src={MemberReg[id].memberpic} height={80} width={80} /></h6></p>
                  <Link to="/MemberReg/ReportMember">
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

export default VehicleView;