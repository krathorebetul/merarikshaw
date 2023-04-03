import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addState, editState } from "../../Main/redux/actions";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../Main/css/style.css';
import shortid from "shortid";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";

const RegistrationState = () => {

   const values = {
      statename: "",
   };
   const [initialState, setState] = useState({
      stateid: '',
      statename: ''
   });

   const { loader: Loadstate } = useSelector((state) => state.Loadstate);

   const stateid1 = shortid.generate();

   initialState.stateid = stateid1;

   const { statename } = initialState;
   let dispatch = useDispatch();

   const currentId = useParams();
   const history = useHistory();

   const { id } = currentId;

   useEffect(() => {
      if (isEmpty(id)) {
         setState({ ...values });
      } else {
         setState({ ...Loadstate[id] });


      }
   }, [id, Loadstate]);

   const handleInputChange = (e) => {
      let { name, value } = e.target;
      setState({
         ...initialState,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isEmpty(id)) {
         dispatch(addState(initialState));
         alert("State Registered", addState);

      } else {
         dispatch(editState(initialState, id));
         alert("State Updated", editState);
      }
      history.push("/cityregistration/RegistrationCity");
   };
   return (
      <div>
         {

            global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

         }

         <div className="container p-5 my-5  border text-light border w-75">

            <h1 className="text-center"> State Registration </h1>
            <form autoComplete="off"
               onSubmit={handleSubmit}
            >


               <div className=" mt-3">
                  <label for="string" className="form-label">State</label>
                  <input
                     type='text'
                     className="form-control "
                     placeholder="state"
                     id="statename"
                     name='statename'
                     value={statename}
                     onChange={handleInputChange}
                     required
                  />
               </div>

               <div className='text-center mt-2'>

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

export default RegistrationState;
