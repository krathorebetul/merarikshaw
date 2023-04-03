import { Route, Switch } from 'react-router-dom';
import Header from './Main/components/Header';
import profile from './Main/components/profile';

import RegistrationArea from './AreaRegistration/components/RegistrationArea';
import ReportArea from './AreaRegistration/components/ReportArea';
import Viewarea from './AreaRegistration/components/Viewarea';


import RegistrationState from './StateRegistration/components/RegistrationState';
import ReportState from './StateRegistration/components/ReportState';
import StateView from './StateRegistration/components/StateView';


import RegistrationCity from './CityRegistration/components/RegistrationCity';
import ReportCity from './CityRegistration/components/ReportCity';
import CityView from './CityRegistration/components/CityView';

import RegVehicleType from './VehicleTypeReg/components/RegVehicleType';
import ReportVehicleType from './VehicleTypeReg/components/ReportVehicleType';
import VehicleTypeView from './VehicleTypeReg/components/VehicleTypeView';


import ReportVehicle from './VehicleRegstration/components/ReportVehicle';
import RegistrationVehicle from './VehicleRegstration/components/RegistrationVehicle';
import VehicleView from './VehicleRegstration/components/VehicleView';


import MemberReg from './MemberReg/components/MemberReg';
import MemberReport from './MemberReg/components/MemberReport';
import MemberView from './MemberReg/components/MemberView';

import LoginRegistration from './Login/components/LoginRegistration';


import MemberLogin from './Main/components/MemberLogin';

import HeaderAdmin from './Main/components/HeaderAdmin';

import Xyz from './Main/components/Xyz';

import MemberLoaderReport from './Main/components/MemberLoaderReport';

import AdminLoaderReport from './Main/components/AdminLoaderReport';

import LoaderProfileView from './Login/components/LoaderProfileView';

import Termandconditions from './Main/components/Termandcondtions';

import Termandcondition from './Main/components/Termandcondtion';
function App() {
  return (
    <div className="App">

      <Switch>
  

        <Route exact path ="/" component={Xyz}/>

        <Route exact path="/Header" component={Header} />

        <Route exact path="/HeaderAdmin" component={HeaderAdmin} />

        <Route exact path="/memberlogin" component={MemberLogin} />

        <Route exact path="/memberloaderReport" component={MemberLoaderReport}/>

        <Route exact path="/adminloaderReport" component={AdminLoaderReport}/>
        
        <Route exact path="/terms&conditions" component={Termandconditions}/>


        <Route exact path="/terms&condition" component={Termandcondition}/>
        {/* -----------------Login Registration------------- */}
        <Route exact path="/login" component={LoginRegistration} />
        <Route exact path="/loginregistration/Registrationlogin/update/:id" component={LoginRegistration} />
        



        {/* -----------------Vehicle Registration------------- */}
        <Route exact path="/vehicleRegistration/Registration" component={RegistrationVehicle} />
        <Route exact path="/vehicleRegistration/Registration/update/:id" component={RegistrationVehicle} />
        <Route exact path="/vehicleRegistration/ReportVehicle" component={ReportVehicle} />
        <Route exact path="/vehicleRegistration/ReportVehicle/view/:id" component={VehicleView} />
 
        {/* ----------------- Member Registration------------- */}
        <Route exact path="/MemberReg/Reg" component={MemberReg} />
        <Route exact path="/MemberReg/Reg/update/:id" component={MemberReg} />
        <Route exact path="/MemberReg/ReportMember" component={MemberReport} />
        <Route exact path="/MemberReg/ReportMember/view/:id" component={MemberView} />

        {/* -----------------Vehicle Type Registration------------- */}
        <Route exact path="/vehicletype/RegVehicleType" component={RegVehicleType} />
        <Route exact path="/vehicletype/RegVehicleType/update/:id" component={RegVehicleType} />
        <Route exact path="/vehicletype/ReportVehicleType" component={ReportVehicleType} />
        <Route exact path="/vehicletype/ReportVehicleType/view/:id" component={VehicleTypeView} />

        {/* --------------------State Registration------------- */}
        <Route exact path="/stateregistration/RegistrationState" component={RegistrationState} />
        <Route exact path="/stateregistration/RegistrationState/update/:id" component={RegistrationState} />
        <Route exact path="/stateregistration/ReportState" component={ReportState} />
        <Route exact path="/stateregistration/ReportState/view/:id" component={StateView} />


        {/* -----------------City Registration------------- */}
        <Route exact path="/cityregistration/RegistrationCity" component={RegistrationCity} />
        <Route exact path="/cityregistration/RegistrationCity/update/:id" component={RegistrationCity} />
        <Route exact path="/cityregistration/ReportCity" component={ReportCity} />
        <Route exact path="/cityregistration/ReportCity/view/:id" component={CityView} />


        {/* -----------------Area Registration------------- */}
        <Route exact path="/arearegistration/RegistrationArea" component={RegistrationArea} />
        <Route exact path="/arearegistration/RegistrationArea/update/:id" component={RegistrationArea} />
        <Route exact path="/arearegistration/reportarea" component={ReportArea} />
        <Route exact path="/arearegistration/reportarea/view/:id" component={Viewarea} />


      

        {/* -----------------Profile------------- */}
        <Route exact path="/LoaderProfileView" component={LoaderProfileView} />

      </Switch>
      
    </div>
  );
}

export default App;
