import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../Main/css/style.css';
import { addVehicle, editVehicle, getState, getVehicle,getVehicleType ,getCity,getArea} from "../../Main/redux/actions";
import firebase from "firebase";
import firebaseDb from '../../firebase';
import shortid from "shortid";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";
import Resizer from "react-image-file-resizer";


const storage = firebase.storage();
let imgpos = 0;
var myformdata;


const RegistrationVehicle = () => {

    const values = {
        name: '',
        contact: '',
        emergency: '',
        vehicleno: '',
        vehiclepic: '',
        vehicle: '',
        statename: '',
        cityname: '',
        areaname: '',
        address: ''


    }


    const [initialVehicle, setVehicle] = useState({
        stateid: " ",
        emergency:"",
        statename: " ",
        cityid: " ",
        cityname: " ",
        areaid: " ",
        areaname: " ",
        contactid: " ",
        vehiclepic: " ",
        Memberid: " ",
        MemberName: " ",
        areapincode: " ",
        registereDate:"",
        registerTime:""

    });


    const
        {
            name,
            contact,
            emergency,
            vehicleno,
            vehiclepic,
            vehicle,
            statename,
            contactid,
            address,
            registereDate,
            registerTime,
            MemberName,
            Memberid
        } = initialVehicle;


    const [isStateSelected, setIsStateSelected] = useState(null);
    const [isCitySelected, setIsCitySelected] = useState(null);
    const [isAreaSelected, setIsAreaSelected] = useState(null);

    const [data, setData] = useState({
        temploadcity: []
    });

    const [demo, setDemo] = useState({
        temploadarea: []
    })


    const { loader: Loadstate } = useSelector((state) => state.Loadstate);
    const { loader: vehicleType } = useSelector((state) => state.vehicleType);
    const { loader: Loadcity } = useSelector((state) => state.Loadcity);

    const { loader: Loadarea } = useSelector((state) => state.Loadarea);
    const { loader: vehicles } = useSelector((state) => state.vehicles);




    const contact1 = shortid.generate();
   



    const currentId = useParams();
    const history = useHistory();

    const { id } = currentId;


    let dispatch = useDispatch();

    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    const curDate=cDay + "/" + cMonth + "/" + cYear  ;
    const time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

    let i = 0;
    if (isStateSelected) {
        data.temploadcity = [];
        Object.keys(Loadcity).map((id, index) => {
            if (isStateSelected.text === Loadcity[id].statename) {
                data.temploadcity[i] = Loadcity[id].cityname;
                initialVehicle.stateid = Loadcity[id].stateid;
                initialVehicle.statename = Loadcity[id].statename;
                i++;
            }
        })

    }
    if (isCitySelected) {
        demo.temploadarea = [];
        let j = 0;
        Object.keys(Loadarea).map((id, index) => {
            if (isCitySelected.text === Loadarea[id].cityname) {

                demo.temploadarea[j] = Loadarea[id].areaname;
                initialVehicle.cityid = Loadarea[id].cityid;
                initialVehicle.cityname = Loadarea[id].cityname;
                j++;
            }
        })
    }

    if (isAreaSelected) {
        Object.keys(Loadarea).map((id, index) => {
            if (isAreaSelected.text === Loadarea[id].areaname) {
                initialVehicle.areaid = Loadarea[id].areaid;
                initialVehicle.areaname = Loadarea[id].areaname;
                initialVehicle.areapincode = Loadarea[id].areapincode;

            }
        })
    }



    useEffect(() => {
      
        if (isEmpty(id)) {
            setVehicle({ ...initialVehicle });
        } else {
            setVehicle({ ...vehicles[id] });
        }


    }, [id, vehicles]);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVehicle({ ...initialVehicle, [name]: value });

    }
    const cityhandleChange = (e) => {
        setIsCitySelected({ text: e.target.value });
    };

    const areahandleChange = (e) => {
        setIsAreaSelected({ text: e.target.value });
    };

    const statehandleChange = (e) => {
        setIsStateSelected({ text: e.target.value });
    };


    const handleSubmit = (e) => {

        initialVehicle.Memberid = global.registered_memberid;
        initialVehicle.MemberName = global.registered_memberName;
        initialVehicle.registereDate=curDate;
        initialVehicle.registerTime=time;
        e.preventDefault();
        if (isEmpty(id)) {
            initialVehicle.contactid = contact1;
            initialVehicle.vehiclepic = myformdata;
            dispatch(addVehicle(initialVehicle));
            alert("Your password is " + contact1)
           
            alert("Your Data inserted");
            myformdata=null;
        } else {

           // 
           initialVehicle.contactid = contactid;
             {updatedata()}
            alert("Your data Updated");

        }

         history.push('/vehicleRegistration/Registration');
    };


    // .................................image.........................................
    const [image, setImage] = useState(null);

    const [url, setUrl] = useState("");

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
                initialVehicle.vehiclepic=uri;
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


       /****update record*****/

    const loadupdatedata = () => {
        initialVehicle.registereDate=registereDate;
        initialVehicle.registerTime=registerTime;
        initialVehicle.Memberid = Memberid;
        initialVehicle.MemberName = MemberName;
        dispatch(editVehicle(initialVehicle, id));
        myformdata = null;
      
    }


    const updatedata = () => {

        if (myformdata != null) {
            initialVehicle.vehiclepic = myformdata;
            { loadupdatedata() }
        }
        else {

            initialVehicle.vehiclepic = vehiclepic;
            { loadupdatedata() }
        }


    }

    return (
        <div>


            {

                global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

            }

            <div className="container p-5 my-5  border text-light border w-75">
                <h1 className="text-center">Rikshaw Registration</h1>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className=" mb-3">
                        <label  className="form-label">User Name</label>
                        <input
                            type='text'
                            className="form-control "
                            placeholder="name"
                            id="name"
                            name='name'
                            value={name}
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
                        <label  className="form-label">Emergency number</label>
                        <input
                            type='number'
                            className="form-control "
                            placeholder="emergency number"
                            id="emergency"
                            name='emergency'
                            value={emergency}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className=" mb-3">
                        <label  className="form-label">Vehicle no.</label>
                        <input
                            type='text'
                            className="form-control "
                            placeholder="vehicle no."
                            id="vehicleno"
                            name='vehicleno'
                            value={vehicleno}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className=" mb-3">
                        <label  className="form-label">Vehicle pic</label>
                        <div className="d-flex justify-content-evenly">
                            <input
                                type='file'
                                className="form-control "
                                placeholder="vehicle pic"
                                id="vehiclepic"
                                name='vehiclepic'
                                // value={vehiclepic}
                                onChange={handleChang}

                            />
                     </div>
                    </div>

                    <div className="mb-3">
                        <label  className="form-label"> Vehicle Type </label>
                        <select
                            className="form-select"
                            value={vehicle}
                            name='vehicle'
                            onChange={handleInputChange}
                        >
                            <option>---Select---</option>

                            {Object.keys(vehicleType).map((id) => {
                                return (
                                    <option>{vehicleType[id].vehicle}</option>

                                );
                            })}

                        </select>
                    </div>

                    <div className="mb-3">
                        <label  className="form-label"> State </label>
                        <select
                            className="form-select"
                            name='statename'
                           
                            onChange={statehandleChange}
                        >
                            <option>---Select---</option>

                            {Object.keys(Loadstate).map((id) => {
                                return (
                                    <option value={Loadstate[id].statename}>{Loadstate[id].statename}</option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label  className="form-label"> City </label>
                        <select
                            className="form-select"
                            name='cityname'
                            id="cityname"
                            onChange={cityhandleChange}

                        >
                            <option>---Select---</option>
                            {(data.temploadcity).map((option) => {

                                return (
                                    <option value={option.value}>{option}</option>
                                );
                            })}

                        </select>
                    </div>

                    <div className=" mb-3">
                        <label  className="form-label">Area</label>
                        <select
                            className="form-select"
                            id="areaname"
                            name='areaname'
                            onChange={areahandleChange}
                        >
                            <option>---Select---</option>
                            {(demo.temploadarea).map((option) => {

                                return (
                                    <option value={option.value}>{option}</option>
                                );
                            })}
                        </select>
                    </div>


                    <div className=" mt-3">
                        <label  className="form-label"> Address</label>
                        <input
                            type='text'
                            className="form-control "
                            placeholder="Address"
                            id="address"
                            name='address'
                            value={address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>



                    <div className='text-center mt-5'>
                        <button
                            type="submit"
                            className="btn btn-warning "
                        > Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RegistrationVehicle;