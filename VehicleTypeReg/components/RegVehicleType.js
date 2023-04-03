import React, { useEffect, useState } from "react";
import { useParams, useHistory, BrowserRouter, Route } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addVehicleType, editVehicleType } from "../../Main/redux/actions";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../Main/css/style.css';
import shortid from "shortid";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";



const RegVehicleType = () => {

   const values = {
      vehicle: "",
   };





   const [initialVehicleType, setState] = useState({
      vehicleTypeid: '',
      vehicle: ''

   });

   const vehicleTypeid1 = shortid.generate();
   initialVehicleType.vehicleTypeid = vehicleTypeid1;

   const { loader: vehicleType } = useSelector((state) => state.vehicleType);

   const { vehicle } = initialVehicleType;
   let dispatch = useDispatch();

   const currentId = useParams();
   const history = useHistory();

   const { id } = currentId;

   useEffect(() => {
      if (isEmpty(id)) {
         setState({ ...values });
      } else {
         setState({ ...vehicleType[id] });


      }

   }, [id, vehicleType]);

   const handleInputChange = (e) => {
      let { name, value } = e.target;
      setState({
         ...initialVehicleType,
         [name]: value,
      });
   };


   const handleSubmit = (e) => {

      e.preventDefault();
      if (isEmpty(id)) {
         dispatch(addVehicleType(initialVehicleType));
         alert("VehicleType Registered", addVehicleType);

      } else {
         dispatch(editVehicleType(initialVehicleType, id));
         alert("VehicleType Updated", editVehicleType);
      }

      history.push("/stateregistration/RegistrationState");
   };
   return (

      <div>
         {
            <HeaderAdmin />

         }


         <div className="container p-5 my-5  border text-light border w-75">

            <h1 className="text-center"> Vehicle Type  </h1>
            <form autoCapitalize="off"
               onSubmit={handleSubmit}
            >

               <div className=" m-3 ">
                  <label className="form-label">Vehicle Registration</label>
                  <input
                     type='text'
                     className="form-control "
                     placeholder="vehicle type"
                     id="vehicle"
                     name='vehicle'
                     value={vehicle}
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

export default RegVehicleType;
