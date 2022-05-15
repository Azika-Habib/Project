import "./customersidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
//import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
//import Build from "@mui/icons-material/Build";
//import InsertChartIcon from "@mui/icons-material/InsertChart";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";


const Customersidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/customerhome" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src="./images/pic2.png"/></span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {/* <p className="title">MAIN</p> */}
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/newrequest" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Request</span>
            </li>
          </Link>
          {/* <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Build className="icon" />
              <span>Charges</span>
            </li>
          </Link> */}
         
         <Link to="/bill" style={{ textDecoration: "none" }}> <li>
            <CreditCardIcon className="icon" />
            <span>Charges</span>
          </li></Link>
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Vehicals-details</span>
          </li>
          <p className="title">USEFUL</p> */}
          {/* <li>
            <InsertChartIcon className="icon" />
            <span>Requests</span>
          </li> */}
          {/* <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li> */}
          
          <p className="title">USER</p>
          <Link to='/Editprofile'><li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li></Link>
          <li>
            <ExitToAppIcon className="icon" />
           <Link to ='/'> <span>Logout</span>
           </Link>
          </li>
        </ul>
      </div>
    
    </div>
  );
};

export default Customersidebar;