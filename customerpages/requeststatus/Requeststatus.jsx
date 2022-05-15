import "./requestStatus.scss"
import Customersidebar from "../../customercomponents/customerSidebar/Customersidebar";
import Customernavbar from "../../customercomponents/customerNavbar/Customernavbar";
import Customerdatatable from "../../customercomponents/customerDatatable/Customerdatatable"

const Requeststatus = () => {
  return (
    <div className="list">
      <Customersidebar/>
      <div className="listContainer">
        <Customernavbar/>
        <div className="top">
          <h1>View Request Status</h1>
        </div>
        <Customerdatatable/>
      </div>
    </div>
  )
}

export default Requeststatus