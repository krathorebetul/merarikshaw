import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux/es/exports";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../Main/css/style.css';
import { addCity, editCity, getVehicleType } from "../../Main/redux/actions";
import shortid from "shortid";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";


const RegistrationCity = () => {
  const values = {
    statename: "",
    cityname: "",

  };


  const [initialCity, setCity] = useState(
    {
      stateid: '',
      statename: '',
      cityid: '',
      cityname: '',

    }
  );

  const cityid1 = shortid.generate();

  initialCity.cityid = cityid1;

  const { loader: Loadstate } = useSelector((state) => state.Loadstate);

  const { loader: Loadcity } = useSelector((state) => state.Loadcity);

  const { statename, cityname } = initialCity;


  const [isSelected, setIsSelected] = useState(null);
  let dispatch = useDispatch();

  const currentId = useParams();
  const history = useHistory();

  const { id } = currentId;


  useEffect(() => {
    if (isEmpty(id)) {
      setCity({ ...values });
    } else {
      setCity({ ...Loadcity[id] });


    }
  }, [id, Loadstate]);




  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setCity({
      ...initialCity,
      [name]: value,
    });
  };

  const handleChange1 = (e) => {
    setIsSelected({ text: e.target.value });

  }




  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(id)) {
      dispatch(addCity(initialCity));

    } else {
      dispatch(editCity(initialCity, id));
    }
    dispatch(getVehicleType());
    alert("City Register", handleSubmit);
    history.push("/arearegistration/RegistrationArea");

  }

  if (isSelected) {
    Object.keys(Loadstate).map((id, index) => {
      if (isSelected.text === Loadstate[id].statename) {
        initialCity.stateid = Loadstate[id].stateid;
        initialCity.statename = Loadstate[id].statename;
      }
    })
  }



  return (
    <div>

      {

        global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

      }
      <div className="container p-5 my-5  border text-light border w-75">

        <h1 className="text-center"> City Registration </h1>
        <form
          onSubmit={handleSubmit}
        >

          <div className="mb-3">
            <label  className="form-label"> State </label>
            <select
              className="form-select"
              name='statename'
              value={statename}
              onChange={handleChange1}

            >
              <option>---Select---</option>

              {Object.keys(Loadstate).map((id, index) => (
                <option value={Loadstate[id].statename}>{Loadstate[id].statename}</option>
              ))}
            </select>
          </div>

          <div className=" mb-3">
            <label className="form-label">City</label>
            <input
              type='text'
              className="form-control "
              placeholder="city"
              id="cityname"
              name='cityname'
              value={cityname}
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
  )
}


export default RegistrationCity;
