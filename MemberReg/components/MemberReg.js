import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { head, isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux/es/exports";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../Main/css/style.css';
import { addMemberReg, editMemberReg } from "../../Main/redux/actions";
import firebase from "firebase";
import firebaseDb from '../../firebase';
import shortid from "shortid";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";
import Resizer from "react-image-file-resizer";

const storage = firebase.storage();
let myformdata ;
let imgpos = 0;

const MemberReg = () => {

    let dispatch = useDispatch();


    const values = {
        name: '',
        contact: '',
        FatherName: '',
        memberpic: '',

    }


    const [IsMemberReg, setMemberReg] = useState({
        MemberName: '',
        contact: '',
        FatherName: '',
        memberpic: '',
        Memberid: '',
    });


    const
        {
            MemberName,
            contact,
            employid,
            FatherName,
            memberpic,
            Memberid,
        } = IsMemberReg;




    const { loader: memberReg } = useSelector((state) => state.memberReg);

    const Memberid1 = shortid.generate();
   



    const currentId = useParams();
    const history = useHistory();

    const { id } = currentId;

    useEffect(() => {
        if (isEmpty(id)) {
            setMemberReg({ ...IsMemberReg });
        } else {
            setMemberReg({ ...memberReg[id] });
        }
    }, [id, memberReg]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMemberReg({ ...IsMemberReg, [name]: value });

    }
    const handleSubmit = (e) => {
       // IsMemberReg.memberpic = myformdata[0];
        e.preventDefault();

        if (isEmpty(id)) {
             IsMemberReg.Memberid = Memberid1;
            dispatch(addMemberReg(IsMemberReg));
            alert("Member Password is " + Memberid1);

        } else {
                 IsMemberReg.Memberid = Memberid;
             if(myformdata !==null)
             {
               
                dispatch(editMemberReg(IsMemberReg, id));
             }
             else{
                IsMemberReg.memberpic=memberpic;
                dispatch(editMemberReg(IsMemberReg, id));
             }
           

        }

        alert("Successful", handleSubmit);

        history.push("/memberlogin")
    };


    // .................................image.........................................
   
    const handleChang = (e) => {
        var fileInput = false;
        if (e.target.files[0]) {
          fileInput = true;
        }
        if (fileInput) {
          try {
            Resizer.imageFileResizer(
              e.target.files[0],
              200,
              200,
              "JPEG",
              100,
              0,
              (uri) => {
                myformdata=uri;
                IsMemberReg.memberpic=uri;
              },
              "base64",
              200,
              200
            );
          } catch (err) {
            console.log(err);
          }
        }
    };


    return (
        <div>
            {

                <HeaderAdmin />
            }
            <div className="container p-5 my-5  border text-light border w-75">
                <h1 className="text-center">Member Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className=" mb-3">
                        <label  className="form-label">Name</label>
                        <input
                            type='text'
                            className="form-control "
                            placeholder="MemberName"
                            id="MemberName"
                            name='MemberName'
                            value={MemberName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className=" mb-3">
                        <label  className="form-label">Employ ID </label>
                        <input
                            type='text'
                            className="form-control "
                            placeholder="EmployId"
                            id="employid"
                            name='employid'
                            value={employid}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className=" mb-3">
                        <label  className="form-label">Contact number</label>
                        <input
                            type='number'
                            className="form-control "
                            placeholder="contact number"
                            id="contact"
                            name='contact'
                            value={contact}
                            onChange={handleInputChange}
                            required
                        />
                    </div>


                    <div className=" mb-3">
                        <label  className="form-label">Father Name</label>
                        <input
                            type='text'
                            className="form-control "
                            placeholder="Father Name"
                            id="FatherName"
                            name='FatherName'
                            value={FatherName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className=" mb-3">
                        <label  className="form-label">Member Pic</label>
                        <input
                            type='file'
                            className="form-control "
                            placeholder="Member pic"
                            id="memberpic"
                            name='memberpic'
                            // value={memberpic}
                            onChange={handleChang}

                        />
                    </div>
 
                     <div className='text-center mt-3'>
                        <button
                            type="submit"
                            className="btn btn-warning"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default MemberReg;