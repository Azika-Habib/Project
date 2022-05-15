import Customersidebar from "../../customercomponents/customerSidebar/Customersidebar";
import Customernavbar from "../../customercomponents/customerNavbar/Customernavbar";
import "./customerHome.scss";
import Customerwidget from "../../customercomponents/customerWidget/Customerwidget";
//import Featured from "../../components/featured/Featured";
//import Chart from "../../components/chart/Chart";
//import Table from "../../components/table/Table";
import { Link } from "react-router-dom";

const Customerhome = () => {
  return (
    <div className="home">
      <Customersidebar />
      <div className="homeContainer">
        <Customernavbar />
        <div className="widgets">
         <Link to="/Newrequest"> <Customerwidget type="request" /></Link>
         <Link to="/Requeststatus"><Customerwidget type="request-status" /></Link>
         <Link to="/Vehiclestatus"><Customerwidget type="vehicle-status" /></Link>
         <Link to="/Bill"> <Customerwidget type="balance" /></Link>
        </div> 
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Customerhome;