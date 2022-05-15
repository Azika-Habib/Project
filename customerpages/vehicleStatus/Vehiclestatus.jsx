import "./vehicleStatus.scss"
import Customersidebar from "../../customercomponents/customerSidebar/Customersidebar";
import Customernavbar from "../../customercomponents/customerNavbar/Customernavbar";
import Vehicletable from "../../customercomponents/vehicleTable/Vehicletable"

const Vehiclestatus = () => {
  return (
    <div className="list">
      <Customersidebar/>
      <div className="listContainer">
        <Customernavbar/>
        <div className="top">
          <h1>View Vehicle Status</h1>
        </div>
        <Vehicletable/>
      </div>
    </div>
  )
}

export default Vehiclestatus;