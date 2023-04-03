import React from "react";
import "../css/header.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../image/logo.jpg';
import { useDispatch } from "react-redux";
import { getVehicleType } from "../redux/actions";
const HeaderAdmin = () => {

    let dispatch = useDispatch();

    return (
        <Navbar collapseOnSelect expand="lg" bg="warning" className="header">
            <img className="rounded-cricle border border-light border  m-2" src={logo} alt="logo.jpg" style={{ height: "70px", weight: "80px", borderRadius: "30px" }} />

            <Navbar.Brand>
               Mera Rikshaw
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                    <NavDropdown title="Vehicle Type" id="collasible-nav-dropdown"  >
                        <NavDropdown.Item><Link to='/vehicletype/RegVehicleType' className="btn btn-dark">Registration</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/vehicletype/ReportVehicleType" className="btn btn-dark">  Report </Link>
                        </NavDropdown.Item>

                    </NavDropdown>
                </Nav>

                <Nav className="mr-auto">

                    <NavDropdown title="State " id="collasible-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/stateregistration/RegistrationState" className="btn btn-dark">Registration</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/stateregistration/ReportState" className="btn btn-dark">Report</Link>
                        </NavDropdown.Item>

                    </NavDropdown>
                </Nav>


                <Nav className="mr-auto">

                    <NavDropdown title="City " id="collasible-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/cityregistration/RegistrationCity" className="btn btn-dark">Registration</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/cityregistration/ReportCity" className="btn btn-dark">Report</Link>
                        </NavDropdown.Item>

                    </NavDropdown>
                </Nav>
                <Nav className="mr-auto">

                    <NavDropdown title="Area" id="collasible-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/arearegistration/RegistrationArea" className="btn btn-dark">  Registration </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/arearegistration/reportarea" className="btn btn-dark"> Report</Link>
                        </NavDropdown.Item>

                    </NavDropdown>
                </Nav>
                <Nav className="mr-auto">

                    <NavDropdown title="Vehicle Registration" id="collasible-nav-dropdown">
                        <NavDropdown.Item ><Link to="/vehicleRegistration/Registration" className="btn btn-dark">Registration</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/vehicleRegistration/ReportVehicle" className="btn btn-dark"> Report </Link>
                        </NavDropdown.Item>

                    </NavDropdown>
                </Nav>


                <Nav className="mr-auto">
                    <NavDropdown title="Member Registration" id="collasible-nav-dropdown">
                        <NavDropdown.Item > <Link to="/MemberReg/Reg" className="btn btn-dark">Registration</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/MemberReg/ReportMember" className="btn btn-dark">Report</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>






                <Nav className="mr-auto">
                   
                     <Nav  id="collasible-nav-dropdown">
                        <Link to ="/terms&conditions" className=" btn font-weight-bold">Terms&Conditons</Link>
                     </Nav>


                    <Nav className="mr-auto">
                    <Link to ="/adminloaderReport" className=" btn font-weight-bold">AdminRikshawReport</Link>
                   
                    </Nav>




                    <Nav className="ml-5">
                        <Link to="/memberlogin" className="btn btn-dark">Logout</Link>
                    </Nav>





                </Nav>


            </Navbar.Collapse>
        </Navbar>
    );
}

export default HeaderAdmin;
