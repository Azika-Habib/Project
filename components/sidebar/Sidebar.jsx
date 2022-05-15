import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Build from "@mui/icons-material/Build";
import InsertChartIcon from "@mui/icons-material/InsertChart";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";


const Sidebar = () => {

  return (
    <div className="sidebar">
    
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Build className="icon" />
              <span>Mechanics</span>
            </li>
          </Link>
         
          <li>
            <CreditCardIcon className="icon" />
            <span>Payments</span>
          </li>
          
          <p className="title">USEFUL</p>
         <Link to="/Approverequest"> <li>
            <InsertChartIcon className="icon" />
            <span>Requests</span>
          </li></Link>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          
          <p className="title">USER</p>
         <Link to ="Profile"> <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li></Link>
         <Link to="/"> <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li></Link>
        </ul>
      </div>
    
    </div>
  );
};

export default Sidebar;