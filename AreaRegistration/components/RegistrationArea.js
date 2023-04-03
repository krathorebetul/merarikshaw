
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux/es/exports";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { addArea, editArea, getCity, getVehicleType } from "../../Main/redux/actions";
import shortid from "shortid";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";

const AreaRegistration = () => {




    const [initialArea, setArea] = useState({
        stateid: '',
        cityid: '',
        areaid: '',
        areaname: '',
        statename: '',
        cityname: '',
        areapincode: "",

    });
    const [isStateSelected, setIsStateSelected] = useState(null);
    const [isCitySelected, setIsCitySelected] = useState(null);
    const [data, setData] = useState({
        temploadcity: []
    })

    const areaid1 = shortid.generate();

    initialArea.areaid = areaid1;

    const { loader: Loadstate } = useSelector((state) => state.Loadstate);

    const { loader: Loadcity } = useSelector((state) => state.Loadcity)

    const { statename, cityname, areaname, areapincode } = initialArea;
    let dispatch = useDispatch();

    const currentId = useParams();
    const history = useHistory();

    const { id } = currentId;


    let i = 0;
    if (isStateSelected) {

        data.temploadcity = [];
        Object.keys(Loadcity).map((id, index) => {
            if (isStateSelected.text === Loadcity[id].statename) {
                data.temploadcity[i] = Loadcity[id].cityname;
                initialArea.stateid = Loadcity[id].stateid;
                initialArea.statename = Loadcity[id].statename;
                i++;
            }
        })

    }


    if (isCitySelected) {
        Object.keys(Loadcity).map((id, index) => {
            if (isCitySelected.text === Loadcity[id].cityname) {
                initialArea.cityid = Loadcity[id].cityid;
                initialArea.cityname = Loadcity[id].cityname;
            }
        })
    }


    const handleInputChange1 = (e) => {
        setIsStateSelected({ text: e.target.value });
    };
    const handleInputChange2 = (e) => {
        setIsCitySelected({ text: e.target.value });
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setArea({ ...initialArea, [name]: value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEmpty(id)) {
            dispatch(addArea(initialArea));
        } else {
            dispatch(editArea(initialArea, id));
        }
        dispatch(getVehicleType());
        dispatch(getCity());
        alert("Area Register", handleSubmit);
        history.push("/vehicleRegistration/Registration");
    };

    return (
        <div>

            {

                global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

            }

            <div className="container p-5 my-5  border text-light border w-75">

                <h1 className="text-center"> Registration Area </h1>
                <form
                    onSubmit={handleSubmit}

                >

                    <div className="mb-3 mt-3">
                        <label  className="form-label"> State </label>
                        <select
                            className="form-select"
                            name='statename'
                            value={statename}
                            onChange={handleInputChange1}
                        >
                            <option>---Select---</option>
                            {Object.keys(Loadstate).map((id, index) => {
                                return (

                                    <option>{Loadstate[id].statename}</option>

                                );
                            })}

                        </select>

                    </div>
                    <div className="mb-3">
                        <label  className="form-label"> City </label>
                        <select
                            className="form-select"
                            onChange={handleInputChange2}
                            value={cityname}
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
                        <input
                            type='text'
                            className="form-control "
                            placeholder="areaname"
                            id="areaname"
                            name='areaname'
                            value={areaname}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className=" mb-3">
                        <label  className="form-label">Pincode</label>
                        <input
                            type='number'
                            className="form-control "
                            placeholder=" Area Pincode"
                            id="areapincode"
                            name='areapincode'
                            value={areapincode}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className='text-center mb-2'>

                        <button
                            type="submit"
                            className="btn btn-warning"
                        > Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AreaRegistration;