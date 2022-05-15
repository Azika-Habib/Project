import "./widget.scss";
//import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

//   //temporary
//   const amount = 100;
//   const diff = 20;

  switch (type) {
    case "customer":
      data = {
        title: "Customers",
        link: "View and Delete Customers",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "mechanic":
      data = {
        title: " Mechanics",
        link: "View and delete Mechanics",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
             
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "request":
      data = {
        title: "Approve requests",
        
        link: "Approved request ",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Payment",
        link: "View total payments",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
             
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        {/* <span className="counter">
          {data.isMoney && "$"} {amount}
        </span> */}
        <span className="link">{data.link}</span>
      </div>
       <div className="right"> 
         <div className="percentage positive">
          {/* <KeyboardArrowUpIcon /> */}
          {/* {diff} % */}
        </div> 
         {data.icon}
      </div> 
    </div>
  );

};

export default Widget;