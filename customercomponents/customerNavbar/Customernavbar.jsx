import "./customerNavbar.scss";
//import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";


import {Link} from "react-router-dom";
const Customernavbar = () => {


  return (
    <div className="navbar">
      
      
{/*       
       < className="wrapper"> */}
        {/* <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div> */} 
        <Link to="/customerhome" style={{ textDecoration: "none" }}>
          <span className="logo">
           <h2> Vehicle-Workshop Automation </h2></span>
        </Link>
        
        <div className="items">
          
        
          
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            {/* <div className="counter">1</div> */}
          </div>
          
          
          <div className="item">
            <img
              src="./images/avatar.png"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
     
  );
};

export default Customernavbar;